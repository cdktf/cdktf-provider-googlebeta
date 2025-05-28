# `googleIdentityPlatformOauthIdpConfig` Submodule <a name="`googleIdentityPlatformOauthIdpConfig` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformOauthIdpConfig <a name="GoogleIdentityPlatformOauthIdpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config google_identity_platform_oauth_idp_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_oauth_idp_config.GoogleIdentityPlatformOauthIdpConfig;

GoogleIdentityPlatformOauthIdpConfig.Builder.create(Construct scope, java.lang.String id)
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
    .clientId(java.lang.String)
    .issuer(java.lang.String)
    .name(java.lang.String)
//  .clientSecret(java.lang.String)
//  .displayName(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .responseType(GoogleIdentityPlatformOauthIdpConfigResponseType)
//  .timeouts(GoogleIdentityPlatformOauthIdpConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | The client id of an OAuth client. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.issuer">issuer</a></code> | <code>java.lang.String</code> | For OIDC Idps, the issuer identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the OauthIdpConfig. Must start with 'oidc.'. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client secret of the OAuth client, to enable OIDC code flow. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#id GoogleIdentityPlatformOauthIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#project GoogleIdentityPlatformOauthIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.responseType">responseType</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseType">GoogleIdentityPlatformOauthIdpConfigResponseType</a></code> | response_type block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

The client id of an OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#client_id GoogleIdentityPlatformOauthIdpConfig#client_id}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.issuer"></a>

- *Type:* java.lang.String

For OIDC Idps, the issuer identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#issuer GoogleIdentityPlatformOauthIdpConfig#issuer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the OauthIdpConfig. Must start with 'oidc.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#name GoogleIdentityPlatformOauthIdpConfig#name}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

The client secret of the OAuth client, to enable OIDC code flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#client_secret GoogleIdentityPlatformOauthIdpConfig#client_secret}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#display_name GoogleIdentityPlatformOauthIdpConfig#display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#enabled GoogleIdentityPlatformOauthIdpConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#id GoogleIdentityPlatformOauthIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#project GoogleIdentityPlatformOauthIdpConfig#project}.

---

##### `responseType`<sup>Optional</sup> <a name="responseType" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.responseType"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseType">GoogleIdentityPlatformOauthIdpConfigResponseType</a>

response_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#response_type GoogleIdentityPlatformOauthIdpConfig#response_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#timeouts GoogleIdentityPlatformOauthIdpConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.putResponseType">putResponseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetResponseType">resetResponseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResponseType` <a name="putResponseType" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.putResponseType"></a>

```java
public void putResponseType(GoogleIdentityPlatformOauthIdpConfigResponseType value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.putResponseType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseType">GoogleIdentityPlatformOauthIdpConfigResponseType</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleIdentityPlatformOauthIdpConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a>

---

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetResponseType` <a name="resetResponseType" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetResponseType"></a>

```java
public void resetResponseType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIdentityPlatformOauthIdpConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_oauth_idp_config.GoogleIdentityPlatformOauthIdpConfig;

GoogleIdentityPlatformOauthIdpConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_oauth_idp_config.GoogleIdentityPlatformOauthIdpConfig;

GoogleIdentityPlatformOauthIdpConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_oauth_idp_config.GoogleIdentityPlatformOauthIdpConfig;

GoogleIdentityPlatformOauthIdpConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_oauth_idp_config.GoogleIdentityPlatformOauthIdpConfig;

GoogleIdentityPlatformOauthIdpConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIdentityPlatformOauthIdpConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleIdentityPlatformOauthIdpConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIdentityPlatformOauthIdpConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIdentityPlatformOauthIdpConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIdentityPlatformOauthIdpConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.responseType">responseType</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference">GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference">GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.responseTypeInput">responseTypeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseType">GoogleIdentityPlatformOauthIdpConfigResponseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `responseType`<sup>Required</sup> <a name="responseType" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.responseType"></a>

```java
public GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference getResponseType();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference">GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.timeouts"></a>

```java
public GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference">GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `responseTypeInput`<sup>Optional</sup> <a name="responseTypeInput" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.responseTypeInput"></a>

```java
public GoogleIdentityPlatformOauthIdpConfigResponseType getResponseTypeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseType">GoogleIdentityPlatformOauthIdpConfigResponseType</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformOauthIdpConfigConfig <a name="GoogleIdentityPlatformOauthIdpConfigConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_oauth_idp_config.GoogleIdentityPlatformOauthIdpConfigConfig;

GoogleIdentityPlatformOauthIdpConfigConfig.builder()
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
    .clientId(java.lang.String)
    .issuer(java.lang.String)
    .name(java.lang.String)
//  .clientSecret(java.lang.String)
//  .displayName(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .responseType(GoogleIdentityPlatformOauthIdpConfigResponseType)
//  .timeouts(GoogleIdentityPlatformOauthIdpConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client id of an OAuth client. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | For OIDC Idps, the issuer identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the OauthIdpConfig. Must start with 'oidc.'. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client secret of the OAuth client, to enable OIDC code flow. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#id GoogleIdentityPlatformOauthIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#project GoogleIdentityPlatformOauthIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.responseType">responseType</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseType">GoogleIdentityPlatformOauthIdpConfigResponseType</a></code> | response_type block. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client id of an OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#client_id GoogleIdentityPlatformOauthIdpConfig#client_id}

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

For OIDC Idps, the issuer identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#issuer GoogleIdentityPlatformOauthIdpConfig#issuer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the OauthIdpConfig. Must start with 'oidc.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#name GoogleIdentityPlatformOauthIdpConfig#name}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The client secret of the OAuth client, to enable OIDC code flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#client_secret GoogleIdentityPlatformOauthIdpConfig#client_secret}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#display_name GoogleIdentityPlatformOauthIdpConfig#display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#enabled GoogleIdentityPlatformOauthIdpConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#id GoogleIdentityPlatformOauthIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#project GoogleIdentityPlatformOauthIdpConfig#project}.

---

##### `responseType`<sup>Optional</sup> <a name="responseType" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.responseType"></a>

```java
public GoogleIdentityPlatformOauthIdpConfigResponseType getResponseType();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseType">GoogleIdentityPlatformOauthIdpConfigResponseType</a>

response_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#response_type GoogleIdentityPlatformOauthIdpConfig#response_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigConfig.property.timeouts"></a>

```java
public GoogleIdentityPlatformOauthIdpConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#timeouts GoogleIdentityPlatformOauthIdpConfig#timeouts}

---

### GoogleIdentityPlatformOauthIdpConfigResponseType <a name="GoogleIdentityPlatformOauthIdpConfigResponseType" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseType.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_oauth_idp_config.GoogleIdentityPlatformOauthIdpConfigResponseType;

GoogleIdentityPlatformOauthIdpConfigResponseType.builder()
//  .code(java.lang.Boolean)
//  .code(IResolvable)
//  .idToken(java.lang.Boolean)
//  .idToken(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseType.property.code">code</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, authorization code is returned from IdP's authorization endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseType.property.idToken">idToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, ID token is returned from IdP's authorization endpoint. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseType.property.code"></a>

```java
public java.lang.Object getCode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, authorization code is returned from IdP's authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#code GoogleIdentityPlatformOauthIdpConfig#code}

---

##### `idToken`<sup>Optional</sup> <a name="idToken" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseType.property.idToken"></a>

```java
public java.lang.Object getIdToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, ID token is returned from IdP's authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#id_token GoogleIdentityPlatformOauthIdpConfig#id_token}

---

### GoogleIdentityPlatformOauthIdpConfigTimeouts <a name="GoogleIdentityPlatformOauthIdpConfigTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_oauth_idp_config.GoogleIdentityPlatformOauthIdpConfigTimeouts;

GoogleIdentityPlatformOauthIdpConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#create GoogleIdentityPlatformOauthIdpConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#delete GoogleIdentityPlatformOauthIdpConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#update GoogleIdentityPlatformOauthIdpConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#create GoogleIdentityPlatformOauthIdpConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#delete GoogleIdentityPlatformOauthIdpConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.37.0/docs/resources/google_identity_platform_oauth_idp_config#update GoogleIdentityPlatformOauthIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference <a name="GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_oauth_idp_config.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference;

new GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.resetIdToken">resetIdToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.resetCode"></a>

```java
public void resetCode()
```

##### `resetIdToken` <a name="resetIdToken" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.resetIdToken"></a>

```java
public void resetIdToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.idTokenInput">idTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.code">code</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.idToken">idToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseType">GoogleIdentityPlatformOauthIdpConfigResponseType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.codeInput"></a>

```java
public java.lang.Object getCodeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idTokenInput`<sup>Optional</sup> <a name="idTokenInput" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.idTokenInput"></a>

```java
public java.lang.Object getIdTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.code"></a>

```java
public java.lang.Object getCode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idToken`<sup>Required</sup> <a name="idToken" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.idToken"></a>

```java
public java.lang.Object getIdToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseTypeOutputReference.property.internalValue"></a>

```java
public GoogleIdentityPlatformOauthIdpConfigResponseType getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigResponseType">GoogleIdentityPlatformOauthIdpConfigResponseType</a>

---


### GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_oauth_idp_config.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference;

new GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformOauthIdpConfig.GoogleIdentityPlatformOauthIdpConfigTimeouts">GoogleIdentityPlatformOauthIdpConfigTimeouts</a>

---



