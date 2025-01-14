# `googleFirebaseHostingRelease` Submodule <a name="`googleFirebaseHostingRelease` Submodule" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseHostingRelease <a name="GoogleFirebaseHostingRelease" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release google_firebase_hosting_release}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_release.GoogleFirebaseHostingRelease;

GoogleFirebaseHostingRelease.Builder.create(Construct scope, java.lang.String id)
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
    .siteId(java.lang.String)
//  .channelId(java.lang.String)
//  .id(java.lang.String)
//  .message(java.lang.String)
//  .timeouts(GoogleFirebaseHostingReleaseTimeouts)
//  .type(java.lang.String)
//  .versionName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.siteId">siteId</a></code> | <code>java.lang.String</code> | Required. The ID of the site to which the release belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.channelId">channelId</a></code> | <code>java.lang.String</code> | The ID of the channel to which the release belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#id GoogleFirebaseHostingRelease#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.message">message</a></code> | <code>java.lang.String</code> | The deploy description when the release was created. The value can be up to 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeouts">GoogleFirebaseHostingReleaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the release; |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.versionName">versionName</a></code> | <code>java.lang.String</code> | The unique identifier for a version, in the format: sites/SITE_ID/versions/VERSION_ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.siteId"></a>

- *Type:* java.lang.String

Required. The ID of the site to which the release belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#site_id GoogleFirebaseHostingRelease#site_id}

---

##### `channelId`<sup>Optional</sup> <a name="channelId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.channelId"></a>

- *Type:* java.lang.String

The ID of the channel to which the release belongs.

If not provided, the release will
belong to the default "live" channel

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#channel_id GoogleFirebaseHostingRelease#channel_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#id GoogleFirebaseHostingRelease#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.message"></a>

- *Type:* java.lang.String

The deploy description when the release was created. The value can be up to 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#message GoogleFirebaseHostingRelease#message}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeouts">GoogleFirebaseHostingReleaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#timeouts GoogleFirebaseHostingRelease#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the release;

indicates what happened to the content of the site. There is no need to specify
'DEPLOY' or 'ROLLBACK' type if a 'version_name' is provided.
DEPLOY: A version was uploaded to Firebase Hosting and released. Output only.
ROLLBACK: The release points back to a previously deployed version. Output only.
SITE_DISABLE: The release prevents the site from serving content. Firebase Hosting acts as if the site never existed Possible values: ["DEPLOY", "ROLLBACK", "SITE_DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#type GoogleFirebaseHostingRelease#type}

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.Initializer.parameter.versionName"></a>

- *Type:* java.lang.String

The unique identifier for a version, in the format: sites/SITE_ID/versions/VERSION_ID.

The content of the version specified will be actively displayed on the appropriate URL.
The Version must belong to the same site as in the 'site_id'.
This parameter must be empty if the 'type' of the release is 'SITE_DISABLE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#version_name GoogleFirebaseHostingRelease#version_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.resetChannelId">resetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.resetVersionName">resetVersionName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirebaseHostingReleaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeouts">GoogleFirebaseHostingReleaseTimeouts</a>

---

##### `resetChannelId` <a name="resetChannelId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.resetChannelId"></a>

```java
public void resetChannelId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.resetId"></a>

```java
public void resetId()
```

##### `resetMessage` <a name="resetMessage" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.resetType"></a>

```java
public void resetType()
```

##### `resetVersionName` <a name="resetVersionName" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.resetVersionName"></a>

```java
public void resetVersionName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleFirebaseHostingRelease resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_release.GoogleFirebaseHostingRelease;

GoogleFirebaseHostingRelease.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_release.GoogleFirebaseHostingRelease;

GoogleFirebaseHostingRelease.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_release.GoogleFirebaseHostingRelease;

GoogleFirebaseHostingRelease.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_release.GoogleFirebaseHostingRelease;

GoogleFirebaseHostingRelease.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirebaseHostingRelease.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleFirebaseHostingRelease resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirebaseHostingRelease to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirebaseHostingRelease that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseHostingRelease to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.releaseId">releaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference">GoogleFirebaseHostingReleaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.channelIdInput">channelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.siteIdInput">siteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeouts">GoogleFirebaseHostingReleaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.versionNameInput">versionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.channelId">channelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.siteId">siteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.versionName">versionName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `releaseId`<sup>Required</sup> <a name="releaseId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.releaseId"></a>

```java
public java.lang.String getReleaseId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.timeouts"></a>

```java
public GoogleFirebaseHostingReleaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference">GoogleFirebaseHostingReleaseTimeoutsOutputReference</a>

---

##### `channelIdInput`<sup>Optional</sup> <a name="channelIdInput" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.channelIdInput"></a>

```java
public java.lang.String getChannelIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.siteIdInput"></a>

```java
public java.lang.String getSiteIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeouts">GoogleFirebaseHostingReleaseTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `versionNameInput`<sup>Optional</sup> <a name="versionNameInput" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.versionNameInput"></a>

```java
public java.lang.String getVersionNameInput();
```

- *Type:* java.lang.String

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingRelease.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseHostingReleaseConfig <a name="GoogleFirebaseHostingReleaseConfig" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_release.GoogleFirebaseHostingReleaseConfig;

GoogleFirebaseHostingReleaseConfig.builder()
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
    .siteId(java.lang.String)
//  .channelId(java.lang.String)
//  .id(java.lang.String)
//  .message(java.lang.String)
//  .timeouts(GoogleFirebaseHostingReleaseTimeouts)
//  .type(java.lang.String)
//  .versionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.siteId">siteId</a></code> | <code>java.lang.String</code> | Required. The ID of the site to which the release belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.channelId">channelId</a></code> | <code>java.lang.String</code> | The ID of the channel to which the release belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#id GoogleFirebaseHostingRelease#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.message">message</a></code> | <code>java.lang.String</code> | The deploy description when the release was created. The value can be up to 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeouts">GoogleFirebaseHostingReleaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the release; |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.versionName">versionName</a></code> | <code>java.lang.String</code> | The unique identifier for a version, in the format: sites/SITE_ID/versions/VERSION_ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.siteId"></a>

```java
public java.lang.String getSiteId();
```

- *Type:* java.lang.String

Required. The ID of the site to which the release belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#site_id GoogleFirebaseHostingRelease#site_id}

---

##### `channelId`<sup>Optional</sup> <a name="channelId" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.channelId"></a>

```java
public java.lang.String getChannelId();
```

- *Type:* java.lang.String

The ID of the channel to which the release belongs.

If not provided, the release will
belong to the default "live" channel

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#channel_id GoogleFirebaseHostingRelease#channel_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#id GoogleFirebaseHostingRelease#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

The deploy description when the release was created. The value can be up to 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#message GoogleFirebaseHostingRelease#message}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.timeouts"></a>

```java
public GoogleFirebaseHostingReleaseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeouts">GoogleFirebaseHostingReleaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#timeouts GoogleFirebaseHostingRelease#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the release;

indicates what happened to the content of the site. There is no need to specify
'DEPLOY' or 'ROLLBACK' type if a 'version_name' is provided.
DEPLOY: A version was uploaded to Firebase Hosting and released. Output only.
ROLLBACK: The release points back to a previously deployed version. Output only.
SITE_DISABLE: The release prevents the site from serving content. Firebase Hosting acts as if the site never existed Possible values: ["DEPLOY", "ROLLBACK", "SITE_DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#type GoogleFirebaseHostingRelease#type}

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseConfig.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

The unique identifier for a version, in the format: sites/SITE_ID/versions/VERSION_ID.

The content of the version specified will be actively displayed on the appropriate URL.
The Version must belong to the same site as in the 'site_id'.
This parameter must be empty if the 'type' of the release is 'SITE_DISABLE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#version_name GoogleFirebaseHostingRelease#version_name}

---

### GoogleFirebaseHostingReleaseTimeouts <a name="GoogleFirebaseHostingReleaseTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_release.GoogleFirebaseHostingReleaseTimeouts;

GoogleFirebaseHostingReleaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#create GoogleFirebaseHostingRelease#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#delete GoogleFirebaseHostingRelease#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#create GoogleFirebaseHostingRelease#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_hosting_release#delete GoogleFirebaseHostingRelease#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseHostingReleaseTimeoutsOutputReference <a name="GoogleFirebaseHostingReleaseTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_firebase_hosting_release.GoogleFirebaseHostingReleaseTimeoutsOutputReference;

new GoogleFirebaseHostingReleaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeouts">GoogleFirebaseHostingReleaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleFirebaseHostingRelease.GoogleFirebaseHostingReleaseTimeouts">GoogleFirebaseHostingReleaseTimeouts</a>

---



