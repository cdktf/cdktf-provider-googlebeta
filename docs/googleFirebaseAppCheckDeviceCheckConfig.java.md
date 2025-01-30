# `googleFirebaseAppCheckDeviceCheckConfig` Submodule <a name="`googleFirebaseAppCheckDeviceCheckConfig` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppCheckDeviceCheckConfig <a name="GoogleFirebaseAppCheckDeviceCheckConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config google_firebase_app_check_device_check_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_device_check_config.GoogleFirebaseAppCheckDeviceCheckConfig;

GoogleFirebaseAppCheckDeviceCheckConfig.Builder.create(Construct scope, java.lang.String id)
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
    .keyId(java.lang.String)
    .privateKey(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleFirebaseAppCheckDeviceCheckConfigTimeouts)
//  .tokenTtl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.keyId">keyId</a></code> | <code>java.lang.String</code> | The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The contents of the private key (.p8) file associated with the key specified by keyId. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#id GoogleFirebaseAppCheckDeviceCheckConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#project GoogleFirebaseAppCheckDeviceCheckConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | Specifies the duration for which App Check tokens exchanged from DeviceCheck artifacts will be valid. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#app_id GoogleFirebaseAppCheckDeviceCheckConfig#app_id}

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.keyId"></a>

- *Type:* java.lang.String

The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#key_id GoogleFirebaseAppCheckDeviceCheckConfig#key_id}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

The contents of the private key (.p8) file associated with the key specified by keyId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#private_key GoogleFirebaseAppCheckDeviceCheckConfig#private_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#id GoogleFirebaseAppCheckDeviceCheckConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#project GoogleFirebaseAppCheckDeviceCheckConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#timeouts GoogleFirebaseAppCheckDeviceCheckConfig#timeouts}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.String

Specifies the duration for which App Check tokens exchanged from DeviceCheck artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#token_ttl GoogleFirebaseAppCheckDeviceCheckConfig#token_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirebaseAppCheckDeviceCheckConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppCheckDeviceCheckConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_device_check_config.GoogleFirebaseAppCheckDeviceCheckConfig;

GoogleFirebaseAppCheckDeviceCheckConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_device_check_config.GoogleFirebaseAppCheckDeviceCheckConfig;

GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_device_check_config.GoogleFirebaseAppCheckDeviceCheckConfig;

GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_device_check_config.GoogleFirebaseAppCheckDeviceCheckConfig;

GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleFirebaseAppCheckDeviceCheckConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirebaseAppCheckDeviceCheckConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirebaseAppCheckDeviceCheckConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppCheckDeviceCheckConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKeySet">privateKeySet</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference">GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateKeySet`<sup>Required</sup> <a name="privateKeySet" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKeySet"></a>

```java
public IResolvable getPrivateKeySet();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.timeouts"></a>

```java
public GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference">GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tokenTtlInput"></a>

```java
public java.lang.String getTokenTtlInput();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tokenTtl"></a>

```java
public java.lang.String getTokenTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppCheckDeviceCheckConfigConfig <a name="GoogleFirebaseAppCheckDeviceCheckConfigConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_device_check_config.GoogleFirebaseAppCheckDeviceCheckConfigConfig;

GoogleFirebaseAppCheckDeviceCheckConfigConfig.builder()
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
    .keyId(java.lang.String)
    .privateKey(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleFirebaseAppCheckDeviceCheckConfigTimeouts)
//  .tokenTtl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The contents of the private key (.p8) file associated with the key specified by keyId. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#id GoogleFirebaseAppCheckDeviceCheckConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#project GoogleFirebaseAppCheckDeviceCheckConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | Specifies the duration for which App Check tokens exchanged from DeviceCheck artifacts will be valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#app_id GoogleFirebaseAppCheckDeviceCheckConfig#app_id}

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

The key identifier of a private key enabled with DeviceCheck, created in your Apple Developer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#key_id GoogleFirebaseAppCheckDeviceCheckConfig#key_id}

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

The contents of the private key (.p8) file associated with the key specified by keyId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#private_key GoogleFirebaseAppCheckDeviceCheckConfig#private_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#id GoogleFirebaseAppCheckDeviceCheckConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#project GoogleFirebaseAppCheckDeviceCheckConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.timeouts"></a>

```java
public GoogleFirebaseAppCheckDeviceCheckConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#timeouts GoogleFirebaseAppCheckDeviceCheckConfig#timeouts}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigConfig.property.tokenTtl"></a>

```java
public java.lang.String getTokenTtl();
```

- *Type:* java.lang.String

Specifies the duration for which App Check tokens exchanged from DeviceCheck artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#token_ttl GoogleFirebaseAppCheckDeviceCheckConfig#token_ttl}

---

### GoogleFirebaseAppCheckDeviceCheckConfigTimeouts <a name="GoogleFirebaseAppCheckDeviceCheckConfigTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_device_check_config.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts;

GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#create GoogleFirebaseAppCheckDeviceCheckConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#delete GoogleFirebaseAppCheckDeviceCheckConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#update GoogleFirebaseAppCheckDeviceCheckConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#create GoogleFirebaseAppCheckDeviceCheckConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#delete GoogleFirebaseAppCheckDeviceCheckConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_firebase_app_check_device_check_config#update GoogleFirebaseAppCheckDeviceCheckConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference <a name="GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_device_check_config.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference;

new GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckDeviceCheckConfig.GoogleFirebaseAppCheckDeviceCheckConfigTimeouts">GoogleFirebaseAppCheckDeviceCheckConfigTimeouts</a>

---



