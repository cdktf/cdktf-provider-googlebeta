# `googleFirebaseAppCheckRecaptchaEnterpriseConfig` Submodule <a name="`googleFirebaseAppCheckRecaptchaEnterpriseConfig` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppCheckRecaptchaEnterpriseConfig <a name="GoogleFirebaseAppCheckRecaptchaEnterpriseConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config google_firebase_app_check_recaptcha_enterprise_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_recaptcha_enterprise_config.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig;

GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Builder.create(Construct scope, java.lang.String id)
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
    .appId(java.lang.String)
    .siteKey(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts)
//  .tokenTtl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | The ID of an [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.siteKey">siteKey</a></code> | <code>java.lang.String</code> | The score-based site key created in reCAPTCHA Enterprise used to invoke reCAPTCHA and generate the reCAPTCHA tokens for your application. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#id GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#project GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise artifacts will be valid. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

The ID of an [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#app_id GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#app_id}

---

##### `siteKey`<sup>Required</sup> <a name="siteKey" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.siteKey"></a>

- *Type:* java.lang.String

The score-based site key created in reCAPTCHA Enterprise used to invoke reCAPTCHA and generate the reCAPTCHA tokens for your application.

**Important**: This is not the siteSecret (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#site_key GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#site_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#id GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#project GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#timeouts GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#timeouts}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.String

Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#token_ttl GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#token_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppCheckRecaptchaEnterpriseConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_recaptcha_enterprise_config.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig;

GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_recaptcha_enterprise_config.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig;

GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_recaptcha_enterprise_config.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig;

GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_recaptcha_enterprise_config.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig;

GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleFirebaseAppCheckRecaptchaEnterpriseConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirebaseAppCheckRecaptchaEnterpriseConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirebaseAppCheckRecaptchaEnterpriseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppCheckRecaptchaEnterpriseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.siteKeyInput">siteKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.siteKey">siteKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.timeouts"></a>

```java
public GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `siteKeyInput`<sup>Optional</sup> <a name="siteKeyInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.siteKeyInput"></a>

```java
public java.lang.String getSiteKeyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts</a>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.tokenTtlInput"></a>

```java
public java.lang.String getTokenTtlInput();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `siteKey`<sup>Required</sup> <a name="siteKey" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.siteKey"></a>

```java
public java.lang.String getSiteKey();
```

- *Type:* java.lang.String

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.tokenTtl"></a>

```java
public java.lang.String getTokenTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig <a name="GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_recaptcha_enterprise_config.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig;

GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.builder()
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
    .appId(java.lang.String)
    .siteKey(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts)
//  .tokenTtl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | The ID of an [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.siteKey">siteKey</a></code> | <code>java.lang.String</code> | The score-based site key created in reCAPTCHA Enterprise used to invoke reCAPTCHA and generate the reCAPTCHA tokens for your application. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#id GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#project GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise artifacts will be valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

The ID of an [Web App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.webApps#WebApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#app_id GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#app_id}

---

##### `siteKey`<sup>Required</sup> <a name="siteKey" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.siteKey"></a>

```java
public java.lang.String getSiteKey();
```

- *Type:* java.lang.String

The score-based site key created in reCAPTCHA Enterprise used to invoke reCAPTCHA and generate the reCAPTCHA tokens for your application.

**Important**: This is not the siteSecret (as it is in reCAPTCHA v3), but rather your score-based reCAPTCHA Enterprise site key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#site_key GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#site_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#id GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#project GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.timeouts"></a>

```java
public GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#timeouts GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#timeouts}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigConfig.property.tokenTtl"></a>

```java
public java.lang.String getTokenTtl();
```

- *Type:* java.lang.String

Specifies the duration for which App Check tokens exchanged from reCAPTCHA Enterprise artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#token_ttl GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#token_ttl}

---

### GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts <a name="GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_recaptcha_enterprise_config.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts;

GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#create GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#delete GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#update GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#create GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#delete GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_recaptcha_enterprise_config#update GoogleFirebaseAppCheckRecaptchaEnterpriseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference <a name="GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_recaptcha_enterprise_config.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference;

new GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckRecaptchaEnterpriseConfig.GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts">GoogleFirebaseAppCheckRecaptchaEnterpriseConfigTimeouts</a>

---



