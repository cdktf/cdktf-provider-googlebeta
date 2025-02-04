# `googleIntegrationsAuthConfig` Submodule <a name="`googleIntegrationsAuthConfig` Submodule" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIntegrationsAuthConfig <a name="GoogleIntegrationsAuthConfig" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config google_integrations_auth_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfig;

GoogleIntegrationsAuthConfig.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .clientCertificate(GoogleIntegrationsAuthConfigClientCertificate)
//  .decryptedCredential(GoogleIntegrationsAuthConfigDecryptedCredential)
//  .description(java.lang.String)
//  .expiryNotificationDuration(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .overrideValidTime(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleIntegrationsAuthConfigTimeouts)
//  .visibility(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of the auth config. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location in which client needs to be provisioned. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.clientCertificate">clientCertificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a></code> | client_certificate block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.decryptedCredential">decryptedCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a></code> | decrypted_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the auth config. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.expiryNotificationDuration">expiryNotificationDuration</a></code> | <code>java.util.List<java.lang.String></code> | User can define the time to receive notification after which the auth config becomes invalid. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#id GoogleIntegrationsAuthConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.overrideValidTime">overrideValidTime</a></code> | <code>java.lang.String</code> | User provided expiry time to override. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#project GoogleIntegrationsAuthConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.visibility">visibility</a></code> | <code>java.lang.String</code> | The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The name of the auth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#display_name GoogleIntegrationsAuthConfig#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location in which client needs to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#location GoogleIntegrationsAuthConfig#location}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.clientCertificate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#client_certificate GoogleIntegrationsAuthConfig#client_certificate}

---

##### `decryptedCredential`<sup>Optional</sup> <a name="decryptedCredential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.decryptedCredential"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a>

decrypted_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#decrypted_credential GoogleIntegrationsAuthConfig#decrypted_credential}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the auth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#description GoogleIntegrationsAuthConfig#description}

---

##### `expiryNotificationDuration`<sup>Optional</sup> <a name="expiryNotificationDuration" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.expiryNotificationDuration"></a>

- *Type:* java.util.List<java.lang.String>

User can define the time to receive notification after which the auth config becomes invalid.

Support up to 30 days. Support granularity in hours.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#expiry_notification_duration GoogleIntegrationsAuthConfig#expiry_notification_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#id GoogleIntegrationsAuthConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overrideValidTime`<sup>Optional</sup> <a name="overrideValidTime" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.overrideValidTime"></a>

- *Type:* java.lang.String

User provided expiry time to override.

For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#override_valid_time GoogleIntegrationsAuthConfig#override_valid_time}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#project GoogleIntegrationsAuthConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#timeouts GoogleIntegrationsAuthConfig#timeouts}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.Initializer.parameter.visibility"></a>

- *Type:* java.lang.String

The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#visibility GoogleIntegrationsAuthConfig#visibility}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putClientCertificate">putClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putDecryptedCredential">putDecryptedCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetDecryptedCredential">resetDecryptedCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetExpiryNotificationDuration">resetExpiryNotificationDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetOverrideValidTime">resetOverrideValidTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetVisibility">resetVisibility</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClientCertificate` <a name="putClientCertificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putClientCertificate"></a>

```java
public void putClientCertificate(GoogleIntegrationsAuthConfigClientCertificate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putClientCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a>

---

##### `putDecryptedCredential` <a name="putDecryptedCredential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putDecryptedCredential"></a>

```java
public void putDecryptedCredential(GoogleIntegrationsAuthConfigDecryptedCredential value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putDecryptedCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleIntegrationsAuthConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a>

---

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetDecryptedCredential` <a name="resetDecryptedCredential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetDecryptedCredential"></a>

```java
public void resetDecryptedCredential()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpiryNotificationDuration` <a name="resetExpiryNotificationDuration" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetExpiryNotificationDuration"></a>

```java
public void resetExpiryNotificationDuration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetId"></a>

```java
public void resetId()
```

##### `resetOverrideValidTime` <a name="resetOverrideValidTime" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetOverrideValidTime"></a>

```java
public void resetOverrideValidTime()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.resetVisibility"></a>

```java
public void resetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIntegrationsAuthConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfig;

GoogleIntegrationsAuthConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfig;

GoogleIntegrationsAuthConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfig;

GoogleIntegrationsAuthConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfig;

GoogleIntegrationsAuthConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIntegrationsAuthConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleIntegrationsAuthConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIntegrationsAuthConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIntegrationsAuthConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIntegrationsAuthConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.clientCertificate">clientCertificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference">GoogleIntegrationsAuthConfigClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.creatorEmail">creatorEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.decryptedCredential">decryptedCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.encryptedCredential">encryptedCredential</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.lastModifierEmail">lastModifierEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference">GoogleIntegrationsAuthConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.validTime">validTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.clientCertificateInput">clientCertificateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.decryptedCredentialInput">decryptedCredentialInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.expiryNotificationDurationInput">expiryNotificationDurationInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.overrideValidTimeInput">overrideValidTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.expiryNotificationDuration">expiryNotificationDuration</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.overrideValidTime">overrideValidTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.clientCertificate"></a>

```java
public GoogleIntegrationsAuthConfigClientCertificateOutputReference getClientCertificate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference">GoogleIntegrationsAuthConfigClientCertificateOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creatorEmail`<sup>Required</sup> <a name="creatorEmail" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.creatorEmail"></a>

```java
public java.lang.String getCreatorEmail();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `decryptedCredential`<sup>Required</sup> <a name="decryptedCredential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.decryptedCredential"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference getDecryptedCredential();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference</a>

---

##### `encryptedCredential`<sup>Required</sup> <a name="encryptedCredential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.encryptedCredential"></a>

```java
public java.lang.String getEncryptedCredential();
```

- *Type:* java.lang.String

---

##### `lastModifierEmail`<sup>Required</sup> <a name="lastModifierEmail" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.lastModifierEmail"></a>

```java
public java.lang.String getLastModifierEmail();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.timeouts"></a>

```java
public GoogleIntegrationsAuthConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference">GoogleIntegrationsAuthConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `validTime`<sup>Required</sup> <a name="validTime" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.validTime"></a>

```java
public java.lang.String getValidTime();
```

- *Type:* java.lang.String

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.clientCertificateInput"></a>

```java
public GoogleIntegrationsAuthConfigClientCertificate getClientCertificateInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a>

---

##### `decryptedCredentialInput`<sup>Optional</sup> <a name="decryptedCredentialInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.decryptedCredentialInput"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredential getDecryptedCredentialInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `expiryNotificationDurationInput`<sup>Optional</sup> <a name="expiryNotificationDurationInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.expiryNotificationDurationInput"></a>

```java
public java.util.List<java.lang.String> getExpiryNotificationDurationInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `overrideValidTimeInput`<sup>Optional</sup> <a name="overrideValidTimeInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.overrideValidTimeInput"></a>

```java
public java.lang.String getOverrideValidTimeInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `expiryNotificationDuration`<sup>Required</sup> <a name="expiryNotificationDuration" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.expiryNotificationDuration"></a>

```java
public java.util.List<java.lang.String> getExpiryNotificationDuration();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `overrideValidTime`<sup>Required</sup> <a name="overrideValidTime" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.overrideValidTime"></a>

```java
public java.lang.String getOverrideValidTime();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIntegrationsAuthConfigClientCertificate <a name="GoogleIntegrationsAuthConfigClientCertificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigClientCertificate;

GoogleIntegrationsAuthConfigClientCertificate.builder()
    .encryptedPrivateKey(java.lang.String)
    .sslCertificate(java.lang.String)
//  .passphrase(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.encryptedPrivateKey">encryptedPrivateKey</a></code> | <code>java.lang.String</code> | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.sslCertificate">sslCertificate</a></code> | <code>java.lang.String</code> | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.passphrase">passphrase</a></code> | <code>java.lang.String</code> | 'passphrase' should be left unset if private key is not encrypted. |

---

##### `encryptedPrivateKey`<sup>Required</sup> <a name="encryptedPrivateKey" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.encryptedPrivateKey"></a>

```java
public java.lang.String getEncryptedPrivateKey();
```

- *Type:* java.lang.String

The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#encrypted_private_key GoogleIntegrationsAuthConfig#encrypted_private_key}

---

##### `sslCertificate`<sup>Required</sup> <a name="sslCertificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.sslCertificate"></a>

```java
public java.lang.String getSslCertificate();
```

- *Type:* java.lang.String

The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#ssl_certificate GoogleIntegrationsAuthConfig#ssl_certificate}

---

##### `passphrase`<sup>Optional</sup> <a name="passphrase" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate.property.passphrase"></a>

```java
public java.lang.String getPassphrase();
```

- *Type:* java.lang.String

'passphrase' should be left unset if private key is not encrypted.

Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#passphrase GoogleIntegrationsAuthConfig#passphrase}

---

### GoogleIntegrationsAuthConfigConfig <a name="GoogleIntegrationsAuthConfigConfig" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigConfig;

GoogleIntegrationsAuthConfigConfig.builder()
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
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .clientCertificate(GoogleIntegrationsAuthConfigClientCertificate)
//  .decryptedCredential(GoogleIntegrationsAuthConfigDecryptedCredential)
//  .description(java.lang.String)
//  .expiryNotificationDuration(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .overrideValidTime(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleIntegrationsAuthConfigTimeouts)
//  .visibility(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of the auth config. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location in which client needs to be provisioned. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.clientCertificate">clientCertificate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a></code> | client_certificate block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.decryptedCredential">decryptedCredential</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a></code> | decrypted_credential block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the auth config. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.expiryNotificationDuration">expiryNotificationDuration</a></code> | <code>java.util.List<java.lang.String></code> | User can define the time to receive notification after which the auth config becomes invalid. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#id GoogleIntegrationsAuthConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.overrideValidTime">overrideValidTime</a></code> | <code>java.lang.String</code> | User provided expiry time to override. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#project GoogleIntegrationsAuthConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The name of the auth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#display_name GoogleIntegrationsAuthConfig#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location in which client needs to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#location GoogleIntegrationsAuthConfig#location}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.clientCertificate"></a>

```java
public GoogleIntegrationsAuthConfigClientCertificate getClientCertificate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a>

client_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#client_certificate GoogleIntegrationsAuthConfig#client_certificate}

---

##### `decryptedCredential`<sup>Optional</sup> <a name="decryptedCredential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.decryptedCredential"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredential getDecryptedCredential();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a>

decrypted_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#decrypted_credential GoogleIntegrationsAuthConfig#decrypted_credential}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the auth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#description GoogleIntegrationsAuthConfig#description}

---

##### `expiryNotificationDuration`<sup>Optional</sup> <a name="expiryNotificationDuration" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.expiryNotificationDuration"></a>

```java
public java.util.List<java.lang.String> getExpiryNotificationDuration();
```

- *Type:* java.util.List<java.lang.String>

User can define the time to receive notification after which the auth config becomes invalid.

Support up to 30 days. Support granularity in hours.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#expiry_notification_duration GoogleIntegrationsAuthConfig#expiry_notification_duration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#id GoogleIntegrationsAuthConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overrideValidTime`<sup>Optional</sup> <a name="overrideValidTime" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.overrideValidTime"></a>

```java
public java.lang.String getOverrideValidTime();
```

- *Type:* java.lang.String

User provided expiry time to override.

For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#override_valid_time GoogleIntegrationsAuthConfig#override_valid_time}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#project GoogleIntegrationsAuthConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.timeouts"></a>

```java
public GoogleIntegrationsAuthConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#timeouts GoogleIntegrationsAuthConfig#timeouts}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

The visibility of the auth config. Possible values: ["PRIVATE", "CLIENT_VISIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#visibility GoogleIntegrationsAuthConfig#visibility}

---

### GoogleIntegrationsAuthConfigDecryptedCredential <a name="GoogleIntegrationsAuthConfigDecryptedCredential" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredential;

GoogleIntegrationsAuthConfigDecryptedCredential.builder()
    .credentialType(java.lang.String)
//  .authToken(GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken)
//  .jwt(GoogleIntegrationsAuthConfigDecryptedCredentialJwt)
//  .oauth2AuthorizationCode(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode)
//  .oauth2ClientCredentials(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials)
//  .oidcToken(GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken)
//  .serviceAccountCredentials(GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials)
//  .usernameAndPassword(GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | Credential type associated with auth configs. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.authToken">authToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a></code> | auth_token block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.jwt">jwt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a></code> | jwt block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oauth2AuthorizationCode">oauth2AuthorizationCode</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a></code> | oauth2_authorization_code block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oauth2ClientCredentials">oauth2ClientCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a></code> | oauth2_client_credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a></code> | oidc_token block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.serviceAccountCredentials">serviceAccountCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a></code> | service_account_credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.usernameAndPassword">usernameAndPassword</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a></code> | username_and_password block. |

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

Credential type associated with auth configs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#credential_type GoogleIntegrationsAuthConfig#credential_type}

---

##### `authToken`<sup>Optional</sup> <a name="authToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.authToken"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken getAuthToken();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a>

auth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#auth_token GoogleIntegrationsAuthConfig#auth_token}

---

##### `jwt`<sup>Optional</sup> <a name="jwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.jwt"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialJwt getJwt();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a>

jwt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#jwt GoogleIntegrationsAuthConfig#jwt}

---

##### `oauth2AuthorizationCode`<sup>Optional</sup> <a name="oauth2AuthorizationCode" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oauth2AuthorizationCode"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode getOauth2AuthorizationCode();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

oauth2_authorization_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#oauth2_authorization_code GoogleIntegrationsAuthConfig#oauth2_authorization_code}

---

##### `oauth2ClientCredentials`<sup>Optional</sup> <a name="oauth2ClientCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oauth2ClientCredentials"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials getOauth2ClientCredentials();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

oauth2_client_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#oauth2_client_credentials GoogleIntegrationsAuthConfig#oauth2_client_credentials}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.oidcToken"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken getOidcToken();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#oidc_token GoogleIntegrationsAuthConfig#oidc_token}

---

##### `serviceAccountCredentials`<sup>Optional</sup> <a name="serviceAccountCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.serviceAccountCredentials"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials getServiceAccountCredentials();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

service_account_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#service_account_credentials GoogleIntegrationsAuthConfig#service_account_credentials}

---

##### `usernameAndPassword`<sup>Optional</sup> <a name="usernameAndPassword" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential.property.usernameAndPassword"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword getUsernameAndPassword();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

username_and_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#username_and_password GoogleIntegrationsAuthConfig#username_and_password}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken <a name="GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken;

GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken.builder()
//  .token(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken.property.token">token</a></code> | <code>java.lang.String</code> | The token for the auth type. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken.property.type">type</a></code> | <code>java.lang.String</code> | Authentication type, e.g. "Basic", "Bearer", etc. |

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

The token for the auth type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#token GoogleIntegrationsAuthConfig#token}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Authentication type, e.g. "Basic", "Bearer", etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#type GoogleIntegrationsAuthConfig#type}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialJwt <a name="GoogleIntegrationsAuthConfigDecryptedCredentialJwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialJwt;

GoogleIntegrationsAuthConfigDecryptedCredentialJwt.builder()
//  .jwtHeader(java.lang.String)
//  .jwtPayload(java.lang.String)
//  .secret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.jwtHeader">jwtHeader</a></code> | <code>java.lang.String</code> | Identifies which algorithm is used to generate the signature. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.jwtPayload">jwtPayload</a></code> | <code>java.lang.String</code> | Contains a set of claims. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.secret">secret</a></code> | <code>java.lang.String</code> | User's pre-shared secret to sign the token. |

---

##### `jwtHeader`<sup>Optional</sup> <a name="jwtHeader" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.jwtHeader"></a>

```java
public java.lang.String getJwtHeader();
```

- *Type:* java.lang.String

Identifies which algorithm is used to generate the signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#jwt_header GoogleIntegrationsAuthConfig#jwt_header}

---

##### `jwtPayload`<sup>Optional</sup> <a name="jwtPayload" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.jwtPayload"></a>

```java
public java.lang.String getJwtPayload();
```

- *Type:* java.lang.String

Contains a set of claims.

The JWT specification defines seven Registered Claim Names which are the standard fields commonly included in tokens. Custom claims are usually also included, depending on the purpose of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#jwt_payload GoogleIntegrationsAuthConfig#jwt_payload}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

User's pre-shared secret to sign the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#secret GoogleIntegrationsAuthConfig#secret}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode;

GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.builder()
//  .authEndpoint(java.lang.String)
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .scope(java.lang.String)
//  .tokenEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.authEndpoint">authEndpoint</a></code> | <code>java.lang.String</code> | The auth url endpoint to send the auth code request to. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client's id. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client's secret. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.scope">scope</a></code> | <code>java.lang.String</code> | A space-delimited list of requested scope permissions. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | The token url endpoint to send the token request to. |

---

##### `authEndpoint`<sup>Optional</sup> <a name="authEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.authEndpoint"></a>

```java
public java.lang.String getAuthEndpoint();
```

- *Type:* java.lang.String

The auth url endpoint to send the auth code request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#auth_endpoint GoogleIntegrationsAuthConfig#auth_endpoint}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client's id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#client_id GoogleIntegrationsAuthConfig#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The client's secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#client_secret GoogleIntegrationsAuthConfig#client_secret}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#scope GoogleIntegrationsAuthConfig#scope}

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

The token url endpoint to send the token request to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#token_endpoint GoogleIntegrationsAuthConfig#token_endpoint}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials;

GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.builder()
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
//  .requestType(java.lang.String)
//  .scope(java.lang.String)
//  .tokenEndpoint(java.lang.String)
//  .tokenParams(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client's ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client's secret. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.requestType">requestType</a></code> | <code>java.lang.String</code> | Represent how to pass parameters to fetch access token Possible values: ["REQUEST_TYPE_UNSPECIFIED", "REQUEST_BODY", "QUERY_PARAMETERS", "ENCODED_HEADER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.scope">scope</a></code> | <code>java.lang.String</code> | A space-delimited list of requested scope permissions. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenParams">tokenParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a></code> | token_params block. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#client_id GoogleIntegrationsAuthConfig#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The client's secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#client_secret GoogleIntegrationsAuthConfig#client_secret}

---

##### `requestType`<sup>Optional</sup> <a name="requestType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.requestType"></a>

```java
public java.lang.String getRequestType();
```

- *Type:* java.lang.String

Represent how to pass parameters to fetch access token Possible values: ["REQUEST_TYPE_UNSPECIFIED", "REQUEST_BODY", "QUERY_PARAMETERS", "ENCODED_HEADER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#request_type GoogleIntegrationsAuthConfig#request_type}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#scope GoogleIntegrationsAuthConfig#scope}

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#token_endpoint GoogleIntegrationsAuthConfig#token_endpoint}

---

##### `tokenParams`<sup>Optional</sup> <a name="tokenParams" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials.property.tokenParams"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams getTokenParams();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

token_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#token_params GoogleIntegrationsAuthConfig#token_params}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams;

GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.builder()
//  .entries(IResolvable)
//  .entries(java.util.List<GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.property.entries">entries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>></code> | entries block. |

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams.property.entries"></a>

```java
public java.lang.Object getEntries();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>>

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#entries GoogleIntegrationsAuthConfig#entries}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries;

GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.builder()
//  .key(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey)
//  .value(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.key">key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a></code> | key block. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.value">value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a></code> | value block. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.key"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey getKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#key GoogleIntegrationsAuthConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries.property.value"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue getValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#value GoogleIntegrationsAuthConfig#value}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey;

GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.builder()
//  .literalValue(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.property.literalValue">literalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a></code> | literal_value block. |

---

##### `literalValue`<sup>Optional</sup> <a name="literalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey.property.literalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue getLiteralValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

literal_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#literal_value GoogleIntegrationsAuthConfig#literal_value}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue;

GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.builder()
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | String. |

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#string_value GoogleIntegrationsAuthConfig#string_value}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue;

GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.builder()
//  .literalValue(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.property.literalValue">literalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a></code> | literal_value block. |

---

##### `literalValue`<sup>Optional</sup> <a name="literalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue.property.literalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue getLiteralValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

literal_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#literal_value GoogleIntegrationsAuthConfig#literal_value}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue;

GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.builder()
//  .stringValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | String. |

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

String.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#string_value GoogleIntegrationsAuthConfig#string_value}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken;

GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken.builder()
//  .audience(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken.property.audience">audience</a></code> | <code>java.lang.String</code> | Audience to be used when generating OIDC token. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | The service account email to be used as the identity for the token. |

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

Audience to be used when generating OIDC token.

The audience claim identifies the recipients that the JWT is intended for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#audience GoogleIntegrationsAuthConfig#audience}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

The service account email to be used as the identity for the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#service_account_email GoogleIntegrationsAuthConfig#service_account_email}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials <a name="GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials;

GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.builder()
//  .scope(java.lang.String)
//  .serviceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.scope">scope</a></code> | <code>java.lang.String</code> | A space-delimited list of requested scope permissions. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Name of the service account that has the permission to make the request. |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

A space-delimited list of requested scope permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#scope GoogleIntegrationsAuthConfig#scope}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Name of the service account that has the permission to make the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#service_account GoogleIntegrationsAuthConfig#service_account}

---

### GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword <a name="GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword;

GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.builder()
//  .password(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.password">password</a></code> | <code>java.lang.String</code> | Password to be used. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.username">username</a></code> | <code>java.lang.String</code> | Username to be used. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#password GoogleIntegrationsAuthConfig#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#username GoogleIntegrationsAuthConfig#username}

---

### GoogleIntegrationsAuthConfigTimeouts <a name="GoogleIntegrationsAuthConfigTimeouts" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigTimeouts;

GoogleIntegrationsAuthConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#create GoogleIntegrationsAuthConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#delete GoogleIntegrationsAuthConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#update GoogleIntegrationsAuthConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#create GoogleIntegrationsAuthConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#delete GoogleIntegrationsAuthConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_integrations_auth_config#update GoogleIntegrationsAuthConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIntegrationsAuthConfigClientCertificateOutputReference <a name="GoogleIntegrationsAuthConfigClientCertificateOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigClientCertificateOutputReference;

new GoogleIntegrationsAuthConfigClientCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.resetPassphrase">resetPassphrase</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassphrase` <a name="resetPassphrase" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.resetPassphrase"></a>

```java
public void resetPassphrase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKeyInput">encryptedPrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.passphraseInput">passphraseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificateInput">sslCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKey">encryptedPrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.passphrase">passphrase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificate">sslCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptedPrivateKeyInput`<sup>Optional</sup> <a name="encryptedPrivateKeyInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKeyInput"></a>

```java
public java.lang.String getEncryptedPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `passphraseInput`<sup>Optional</sup> <a name="passphraseInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.passphraseInput"></a>

```java
public java.lang.String getPassphraseInput();
```

- *Type:* java.lang.String

---

##### `sslCertificateInput`<sup>Optional</sup> <a name="sslCertificateInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificateInput"></a>

```java
public java.lang.String getSslCertificateInput();
```

- *Type:* java.lang.String

---

##### `encryptedPrivateKey`<sup>Required</sup> <a name="encryptedPrivateKey" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.encryptedPrivateKey"></a>

```java
public java.lang.String getEncryptedPrivateKey();
```

- *Type:* java.lang.String

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.passphrase"></a>

```java
public java.lang.String getPassphrase();
```

- *Type:* java.lang.String

---

##### `sslCertificate`<sup>Required</sup> <a name="sslCertificate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.sslCertificate"></a>

```java
public java.lang.String getSslCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificateOutputReference.property.internalValue"></a>

```java
public GoogleIntegrationsAuthConfigClientCertificate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigClientCertificate">GoogleIntegrationsAuthConfigClientCertificate</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference;

new GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToken` <a name="resetToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetToken"></a>

```java
public void resetToken()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference.property.internalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference;

new GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtHeader">resetJwtHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtPayload">resetJwtPayload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJwtHeader` <a name="resetJwtHeader" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtHeader"></a>

```java
public void resetJwtHeader()
```

##### `resetJwtPayload` <a name="resetJwtPayload" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetJwtPayload"></a>

```java
public void resetJwtPayload()
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.resetSecret"></a>

```java
public void resetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwt">jwt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeaderInput">jwtHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayloadInput">jwtPayloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeader">jwtHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayload">jwtPayload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwt"></a>

```java
public java.lang.String getJwt();
```

- *Type:* java.lang.String

---

##### `jwtHeaderInput`<sup>Optional</sup> <a name="jwtHeaderInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeaderInput"></a>

```java
public java.lang.String getJwtHeaderInput();
```

- *Type:* java.lang.String

---

##### `jwtPayloadInput`<sup>Optional</sup> <a name="jwtPayloadInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayloadInput"></a>

```java
public java.lang.String getJwtPayloadInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `jwtHeader`<sup>Required</sup> <a name="jwtHeader" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtHeader"></a>

```java
public java.lang.String getJwtHeader();
```

- *Type:* java.lang.String

---

##### `jwtPayload`<sup>Required</sup> <a name="jwtPayload" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.jwtPayload"></a>

```java
public java.lang.String getJwtPayload();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference.property.internalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialJwt getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetAuthEndpoint">resetAuthEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthEndpoint` <a name="resetAuthEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetAuthEndpoint"></a>

```java
public void resetAuthEndpoint()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.resetTokenEndpoint"></a>

```java
public void resetTokenEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpointInput">authEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpoint">authEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authEndpointInput`<sup>Optional</sup> <a name="authEndpointInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpointInput"></a>

```java
public java.lang.String getAuthEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `authEndpoint`<sup>Required</sup> <a name="authEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.authEndpoint"></a>

```java
public java.lang.String getAuthEndpoint();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference.property.internalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.putTokenParams">putTokenParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetRequestType">resetRequestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenParams">resetTokenParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTokenParams` <a name="putTokenParams" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.putTokenParams"></a>

```java
public void putTokenParams(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.putTokenParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

---

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetRequestType` <a name="resetRequestType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetRequestType"></a>

```java
public void resetRequestType()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenEndpoint"></a>

```java
public void resetTokenEndpoint()
```

##### `resetTokenParams` <a name="resetTokenParams" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.resetTokenParams"></a>

```java
public void resetTokenParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParams">tokenParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestTypeInput">requestTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParamsInput">tokenParamsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestType">requestType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tokenParams`<sup>Required</sup> <a name="tokenParams" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParams"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference getTokenParams();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `requestTypeInput`<sup>Optional</sup> <a name="requestTypeInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestTypeInput"></a>

```java
public java.lang.String getRequestTypeInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `tokenParamsInput`<sup>Optional</sup> <a name="tokenParamsInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenParamsInput"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams getTokenParamsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.requestType"></a>

```java
public java.lang.String getRequestType();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference.property.internalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStringValue` <a name="resetStringValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference.property.internalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.putLiteralValue">putLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resetLiteralValue">resetLiteralValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLiteralValue` <a name="putLiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.putLiteralValue"></a>

```java
public void putLiteralValue(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.putLiteralValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

---

##### `resetLiteralValue` <a name="resetLiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.resetLiteralValue"></a>

```java
public void resetLiteralValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValue">literalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValueInput">literalValueInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `literalValue`<sup>Required</sup> <a name="literalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference getLiteralValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValueOutputReference</a>

---

##### `literalValueInput`<sup>Optional</sup> <a name="literalValueInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.literalValueInput"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue getLiteralValueInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyLiteralValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference.property.internalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.get"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putKey">putKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKey` <a name="putKey" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putKey"></a>

```java
public void putKey(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

---

##### `putValue` <a name="putValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putValue"></a>

```java
public void putValue(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

---

##### `resetKey` <a name="resetKey" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.key">key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.keyInput">keyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.valueInput">valueInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.key"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference getKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKeyOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.value"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference getValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.keyInput"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey getKeyInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesKey</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.valueInput"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue getValueInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStringValue` <a name="resetStringValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.resetStringValue"></a>

```java
public void resetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValue">stringValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValueInput"></a>

```java
public java.lang.String getStringValueInput();
```

- *Type:* java.lang.String

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.stringValue"></a>

```java
public java.lang.String getStringValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference.property.internalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.putLiteralValue">putLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resetLiteralValue">resetLiteralValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLiteralValue` <a name="putLiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.putLiteralValue"></a>

```java
public void putLiteralValue(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.putLiteralValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

---

##### `resetLiteralValue` <a name="resetLiteralValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.resetLiteralValue"></a>

```java
public void resetLiteralValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValue">literalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValueInput">literalValueInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `literalValue`<sup>Required</sup> <a name="literalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference getLiteralValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValueOutputReference</a>

---

##### `literalValueInput`<sup>Optional</sup> <a name="literalValueInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.literalValueInput"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue getLiteralValueInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueLiteralValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValueOutputReference.property.internalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesValue</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference;

new GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resetEntries">resetEntries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntries` <a name="putEntries" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.putEntries"></a>

```java
public void putEntries(IResolvable OR java.util.List<GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.putEntries.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>>

---

##### `resetEntries` <a name="resetEntries" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.resetEntries"></a>

```java
public void resetEntries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entriesInput">entriesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entries"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList getEntries();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntriesList</a>

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.entriesInput"></a>

```java
public java.lang.Object getEntriesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsEntries</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParamsOutputReference.property.internalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsTokenParams</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference;

new GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetAudience"></a>

```java
public void resetAudience()
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.tokenExpireTime">tokenExpireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `tokenExpireTime`<sup>Required</sup> <a name="tokenExpireTime" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.tokenExpireTime"></a>

```java
public java.lang.String getTokenExpireTime();
```

- *Type:* java.lang.String

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference.property.internalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference;

new GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putAuthToken">putAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt">putJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode">putOauth2AuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials">putOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOidcToken">putOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putServiceAccountCredentials">putServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putUsernameAndPassword">putUsernameAndPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetAuthToken">resetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetJwt">resetJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2AuthorizationCode">resetOauth2AuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2ClientCredentials">resetOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOidcToken">resetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetServiceAccountCredentials">resetServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetUsernameAndPassword">resetUsernameAndPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthToken` <a name="putAuthToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putAuthToken"></a>

```java
public void putAuthToken(GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putAuthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a>

---

##### `putJwt` <a name="putJwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt"></a>

```java
public void putJwt(GoogleIntegrationsAuthConfigDecryptedCredentialJwt value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putJwt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a>

---

##### `putOauth2AuthorizationCode` <a name="putOauth2AuthorizationCode" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode"></a>

```java
public void putOauth2AuthorizationCode(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2AuthorizationCode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

---

##### `putOauth2ClientCredentials` <a name="putOauth2ClientCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials"></a>

```java
public void putOauth2ClientCredentials(GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOauth2ClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

---

##### `putOidcToken` <a name="putOidcToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOidcToken"></a>

```java
public void putOidcToken(GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a>

---

##### `putServiceAccountCredentials` <a name="putServiceAccountCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putServiceAccountCredentials"></a>

```java
public void putServiceAccountCredentials(GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putServiceAccountCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

---

##### `putUsernameAndPassword` <a name="putUsernameAndPassword" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putUsernameAndPassword"></a>

```java
public void putUsernameAndPassword(GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.putUsernameAndPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

---

##### `resetAuthToken` <a name="resetAuthToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetAuthToken"></a>

```java
public void resetAuthToken()
```

##### `resetJwt` <a name="resetJwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetJwt"></a>

```java
public void resetJwt()
```

##### `resetOauth2AuthorizationCode` <a name="resetOauth2AuthorizationCode" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2AuthorizationCode"></a>

```java
public void resetOauth2AuthorizationCode()
```

##### `resetOauth2ClientCredentials` <a name="resetOauth2ClientCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOauth2ClientCredentials"></a>

```java
public void resetOauth2ClientCredentials()
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetOidcToken"></a>

```java
public void resetOidcToken()
```

##### `resetServiceAccountCredentials` <a name="resetServiceAccountCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetServiceAccountCredentials"></a>

```java
public void resetServiceAccountCredentials()
```

##### `resetUsernameAndPassword` <a name="resetUsernameAndPassword" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.resetUsernameAndPassword"></a>

```java
public void resetUsernameAndPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.authToken">authToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwt">jwt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCode">oauth2AuthorizationCode</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentials">oauth2ClientCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentials">serviceAccountCredentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPassword">usernameAndPassword</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.authTokenInput">authTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwtInput">jwtInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCodeInput">oauth2AuthorizationCodeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentialsInput">oauth2ClientCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcTokenInput">oidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentialsInput">serviceAccountCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPasswordInput">usernameAndPasswordInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.authToken"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference getAuthToken();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialAuthTokenOutputReference</a>

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwt"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference getJwt();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialJwtOutputReference</a>

---

##### `oauth2AuthorizationCode`<sup>Required</sup> <a name="oauth2AuthorizationCode" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCode"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference getOauth2AuthorizationCode();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCodeOutputReference</a>

---

##### `oauth2ClientCredentials`<sup>Required</sup> <a name="oauth2ClientCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentials"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference getOauth2ClientCredentials();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentialsOutputReference</a>

---

##### `oidcToken`<sup>Required</sup> <a name="oidcToken" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcToken"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference getOidcToken();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialOidcTokenOutputReference</a>

---

##### `serviceAccountCredentials`<sup>Required</sup> <a name="serviceAccountCredentials" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentials"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference getServiceAccountCredentials();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference</a>

---

##### `usernameAndPassword`<sup>Required</sup> <a name="usernameAndPassword" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPassword"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference getUsernameAndPassword();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference</a>

---

##### `authTokenInput`<sup>Optional</sup> <a name="authTokenInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.authTokenInput"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken getAuthTokenInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken">GoogleIntegrationsAuthConfigDecryptedCredentialAuthToken</a>

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialTypeInput"></a>

```java
public java.lang.String getCredentialTypeInput();
```

- *Type:* java.lang.String

---

##### `jwtInput`<sup>Optional</sup> <a name="jwtInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.jwtInput"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialJwt getJwtInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialJwt">GoogleIntegrationsAuthConfigDecryptedCredentialJwt</a>

---

##### `oauth2AuthorizationCodeInput`<sup>Optional</sup> <a name="oauth2AuthorizationCodeInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2AuthorizationCodeInput"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode getOauth2AuthorizationCodeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2AuthorizationCode</a>

---

##### `oauth2ClientCredentialsInput`<sup>Optional</sup> <a name="oauth2ClientCredentialsInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oauth2ClientCredentialsInput"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials getOauth2ClientCredentialsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialOauth2ClientCredentials</a>

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.oidcTokenInput"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken getOidcTokenInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken">GoogleIntegrationsAuthConfigDecryptedCredentialOidcToken</a>

---

##### `serviceAccountCredentialsInput`<sup>Optional</sup> <a name="serviceAccountCredentialsInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.serviceAccountCredentialsInput"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials getServiceAccountCredentialsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

---

##### `usernameAndPasswordInput`<sup>Optional</sup> <a name="usernameAndPasswordInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.usernameAndPasswordInput"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword getUsernameAndPasswordInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialOutputReference.property.internalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredential getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredential">GoogleIntegrationsAuthConfigDecryptedCredential</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference;

new GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentialsOutputReference.property.internalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials">GoogleIntegrationsAuthConfigDecryptedCredentialServiceAccountCredentials</a>

---


### GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference <a name="GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference;

new GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPasswordOutputReference.property.internalValue"></a>

```java
public GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword">GoogleIntegrationsAuthConfigDecryptedCredentialUsernameAndPassword</a>

---


### GoogleIntegrationsAuthConfigTimeoutsOutputReference <a name="GoogleIntegrationsAuthConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_integrations_auth_config.GoogleIntegrationsAuthConfigTimeoutsOutputReference;

new GoogleIntegrationsAuthConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIntegrationsAuthConfig.GoogleIntegrationsAuthConfigTimeouts">GoogleIntegrationsAuthConfigTimeouts</a>

---



