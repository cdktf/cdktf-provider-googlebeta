# `googleFirebaseAppCheckAppAttestConfig` Submodule <a name="`googleFirebaseAppCheckAppAttestConfig` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppCheckAppAttestConfig <a name="GoogleFirebaseAppCheckAppAttestConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config google_firebase_app_check_app_attest_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_app_attest_config.GoogleFirebaseAppCheckAppAttestConfig;

GoogleFirebaseAppCheckAppAttestConfig.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleFirebaseAppCheckAppAttestConfigTimeouts)
//  .tokenTtl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#id GoogleFirebaseAppCheckAppAttestConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#project GoogleFirebaseAppCheckAppAttestConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts">GoogleFirebaseAppCheckAppAttestConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#app_id GoogleFirebaseAppCheckAppAttestConfig#app_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#id GoogleFirebaseAppCheckAppAttestConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#project GoogleFirebaseAppCheckAppAttestConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts">GoogleFirebaseAppCheckAppAttestConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#timeouts GoogleFirebaseAppCheckAppAttestConfig#timeouts}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.String

Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#token_ttl GoogleFirebaseAppCheckAppAttestConfig#token_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirebaseAppCheckAppAttestConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts">GoogleFirebaseAppCheckAppAttestConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppCheckAppAttestConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_app_attest_config.GoogleFirebaseAppCheckAppAttestConfig;

GoogleFirebaseAppCheckAppAttestConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_app_attest_config.GoogleFirebaseAppCheckAppAttestConfig;

GoogleFirebaseAppCheckAppAttestConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_app_attest_config.GoogleFirebaseAppCheckAppAttestConfig;

GoogleFirebaseAppCheckAppAttestConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_app_attest_config.GoogleFirebaseAppCheckAppAttestConfig;

GoogleFirebaseAppCheckAppAttestConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirebaseAppCheckAppAttestConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleFirebaseAppCheckAppAttestConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirebaseAppCheckAppAttestConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirebaseAppCheckAppAttestConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppCheckAppAttestConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference">GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts">GoogleFirebaseAppCheckAppAttestConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.timeouts"></a>

```java
public GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference">GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts">GoogleFirebaseAppCheckAppAttestConfigTimeouts</a>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.tokenTtlInput"></a>

```java
public java.lang.String getTokenTtlInput();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.tokenTtl"></a>

```java
public java.lang.String getTokenTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppCheckAppAttestConfigConfig <a name="GoogleFirebaseAppCheckAppAttestConfigConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_app_attest_config.GoogleFirebaseAppCheckAppAttestConfigConfig;

GoogleFirebaseAppCheckAppAttestConfigConfig.builder()
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
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleFirebaseAppCheckAppAttestConfigTimeouts)
//  .tokenTtl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#id GoogleFirebaseAppCheckAppAttestConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#project GoogleFirebaseAppCheckAppAttestConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts">GoogleFirebaseAppCheckAppAttestConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.String</code> | Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#app_id GoogleFirebaseAppCheckAppAttestConfig#app_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#id GoogleFirebaseAppCheckAppAttestConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#project GoogleFirebaseAppCheckAppAttestConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.timeouts"></a>

```java
public GoogleFirebaseAppCheckAppAttestConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts">GoogleFirebaseAppCheckAppAttestConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#timeouts GoogleFirebaseAppCheckAppAttestConfig#timeouts}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigConfig.property.tokenTtl"></a>

```java
public java.lang.String getTokenTtl();
```

- *Type:* java.lang.String

Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#token_ttl GoogleFirebaseAppCheckAppAttestConfig#token_ttl}

---

### GoogleFirebaseAppCheckAppAttestConfigTimeouts <a name="GoogleFirebaseAppCheckAppAttestConfigTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_app_attest_config.GoogleFirebaseAppCheckAppAttestConfigTimeouts;

GoogleFirebaseAppCheckAppAttestConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#create GoogleFirebaseAppCheckAppAttestConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#delete GoogleFirebaseAppCheckAppAttestConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#update GoogleFirebaseAppCheckAppAttestConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#create GoogleFirebaseAppCheckAppAttestConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#delete GoogleFirebaseAppCheckAppAttestConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_app_check_app_attest_config#update GoogleFirebaseAppCheckAppAttestConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference <a name="GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_app_check_app_attest_config.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference;

new GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts">GoogleFirebaseAppCheckAppAttestConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckAppAttestConfig.GoogleFirebaseAppCheckAppAttestConfigTimeouts">GoogleFirebaseAppCheckAppAttestConfigTimeouts</a>

---



