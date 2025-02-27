# `googleIdentityPlatformDefaultSupportedIdpConfig` Submodule <a name="`googleIdentityPlatformDefaultSupportedIdpConfig` Submodule" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIdentityPlatformDefaultSupportedIdpConfig <a name="GoogleIdentityPlatformDefaultSupportedIdpConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config google_identity_platform_default_supported_idp_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_default_supported_idp_config.GoogleIdentityPlatformDefaultSupportedIdpConfig;

GoogleIdentityPlatformDefaultSupportedIdpConfig.Builder.create(Construct scope, java.lang.String id)
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
    .clientSecret(java.lang.String)
    .idpId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | OAuth client ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | OAuth client secret. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.idpId">idpId</a></code> | <code>java.lang.String</code> | ID of the IDP. Possible values include:. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this IDP allows the user to sign in. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#id GoogleIdentityPlatformDefaultSupportedIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#project GoogleIdentityPlatformDefaultSupportedIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#client_id GoogleIdentityPlatformDefaultSupportedIdpConfig#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#client_secret GoogleIdentityPlatformDefaultSupportedIdpConfig#client_secret}

---

##### `idpId`<sup>Required</sup> <a name="idpId" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.idpId"></a>

- *Type:* java.lang.String

ID of the IDP. Possible values include:.

* 'apple.com'
* 'facebook.com'
* 'gc.apple.com'
* 'github.com'
* 'google.com'
* 'linkedin.com'
* 'microsoft.com'
* 'playgames.google.com'
* 'twitter.com'
* 'yahoo.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#idp_id GoogleIdentityPlatformDefaultSupportedIdpConfig#idp_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this IDP allows the user to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#enabled GoogleIdentityPlatformDefaultSupportedIdpConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#id GoogleIdentityPlatformDefaultSupportedIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#project GoogleIdentityPlatformDefaultSupportedIdpConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#timeouts GoogleIdentityPlatformDefaultSupportedIdpConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIdentityPlatformDefaultSupportedIdpConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_default_supported_idp_config.GoogleIdentityPlatformDefaultSupportedIdpConfig;

GoogleIdentityPlatformDefaultSupportedIdpConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_default_supported_idp_config.GoogleIdentityPlatformDefaultSupportedIdpConfig;

GoogleIdentityPlatformDefaultSupportedIdpConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_default_supported_idp_config.GoogleIdentityPlatformDefaultSupportedIdpConfig;

GoogleIdentityPlatformDefaultSupportedIdpConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_default_supported_idp_config.GoogleIdentityPlatformDefaultSupportedIdpConfig;

GoogleIdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleIdentityPlatformDefaultSupportedIdpConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIdentityPlatformDefaultSupportedIdpConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIdentityPlatformDefaultSupportedIdpConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIdentityPlatformDefaultSupportedIdpConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference">GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.idpIdInput">idpIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.idpId">idpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.timeouts"></a>

```java
public GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference">GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idpIdInput`<sup>Optional</sup> <a name="idpIdInput" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.idpIdInput"></a>

```java
public java.lang.String getIdpIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idpId`<sup>Required</sup> <a name="idpId" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.idpId"></a>

```java
public java.lang.String getIdpId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIdentityPlatformDefaultSupportedIdpConfigConfig <a name="GoogleIdentityPlatformDefaultSupportedIdpConfigConfig" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_default_supported_idp_config.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig;

GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.builder()
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
    .clientSecret(java.lang.String)
    .idpId(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | OAuth client ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | OAuth client secret. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.idpId">idpId</a></code> | <code>java.lang.String</code> | ID of the IDP. Possible values include:. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this IDP allows the user to sign in. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#id GoogleIdentityPlatformDefaultSupportedIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#project GoogleIdentityPlatformDefaultSupportedIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#client_id GoogleIdentityPlatformDefaultSupportedIdpConfig#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#client_secret GoogleIdentityPlatformDefaultSupportedIdpConfig#client_secret}

---

##### `idpId`<sup>Required</sup> <a name="idpId" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.idpId"></a>

```java
public java.lang.String getIdpId();
```

- *Type:* java.lang.String

ID of the IDP. Possible values include:.

* 'apple.com'
* 'facebook.com'
* 'gc.apple.com'
* 'github.com'
* 'google.com'
* 'linkedin.com'
* 'microsoft.com'
* 'playgames.google.com'
* 'twitter.com'
* 'yahoo.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#idp_id GoogleIdentityPlatformDefaultSupportedIdpConfig#idp_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this IDP allows the user to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#enabled GoogleIdentityPlatformDefaultSupportedIdpConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#id GoogleIdentityPlatformDefaultSupportedIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#project GoogleIdentityPlatformDefaultSupportedIdpConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigConfig.property.timeouts"></a>

```java
public GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#timeouts GoogleIdentityPlatformDefaultSupportedIdpConfig#timeouts}

---

### GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts <a name="GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_default_supported_idp_config.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts;

GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#create GoogleIdentityPlatformDefaultSupportedIdpConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#delete GoogleIdentityPlatformDefaultSupportedIdpConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#update GoogleIdentityPlatformDefaultSupportedIdpConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#create GoogleIdentityPlatformDefaultSupportedIdpConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#delete GoogleIdentityPlatformDefaultSupportedIdpConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_identity_platform_default_supported_idp_config#update GoogleIdentityPlatformDefaultSupportedIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference <a name="GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_identity_platform_default_supported_idp_config.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference;

new GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIdentityPlatformDefaultSupportedIdpConfig.GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts">GoogleIdentityPlatformDefaultSupportedIdpConfigTimeouts</a>

---



