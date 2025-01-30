# `googleIapSettings` Submodule <a name="`googleIapSettings` Submodule" id="@cdktf/provider-google-beta.googleIapSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapSettings <a name="GoogleIapSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings google_iap_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettings;

GoogleIapSettings.Builder.create(Construct scope, java.lang.String id)
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
//  .accessSettings(GoogleIapSettingsAccessSettings)
//  .applicationSettings(GoogleIapSettingsApplicationSettings)
//  .id(java.lang.String)
//  .timeouts(GoogleIapSettingsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the IAP protected resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.accessSettings">accessSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a></code> | application_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#id GoogleIapSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the IAP protected resource.

Name can have below resources:

* organizations/{organization_id}
* folders/{folder_id}
* projects/{project_id}
* projects/{project_id}/iap_web
* projects/{project_id}/iap_web/compute
* projects/{project_id}/iap_web/compute-{region}
* projects/{project_id}/iap_web/compute/services/{service_id}
* projects/{project_id}/iap_web/compute-{region}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}/version/{version_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#name GoogleIapSettings#name}

---

##### `accessSettings`<sup>Optional</sup> <a name="accessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.accessSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#access_settings GoogleIapSettings#access_settings}

---

##### `applicationSettings`<sup>Optional</sup> <a name="applicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.applicationSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

application_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#application_settings GoogleIapSettings#application_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#id GoogleIapSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#timeouts GoogleIapSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putAccessSettings">putAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putApplicationSettings">putApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetAccessSettings">resetAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetApplicationSettings">resetApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessSettings` <a name="putAccessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putAccessSettings"></a>

```java
public void putAccessSettings(GoogleIapSettingsAccessSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putAccessSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

---

##### `putApplicationSettings` <a name="putApplicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putApplicationSettings"></a>

```java
public void putApplicationSettings(GoogleIapSettingsApplicationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putApplicationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putTimeouts"></a>

```java
public void putTimeouts(GoogleIapSettingsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a>

---

##### `resetAccessSettings` <a name="resetAccessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetAccessSettings"></a>

```java
public void resetAccessSettings()
```

##### `resetApplicationSettings` <a name="resetApplicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetApplicationSettings"></a>

```java
public void resetApplicationSettings()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIapSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettings;

GoogleIapSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettings;

GoogleIapSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettings;

GoogleIapSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettings;

GoogleIapSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIapSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleIapSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIapSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIapSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIapSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.accessSettings">accessSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference">GoogleIapSettingsAccessSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference">GoogleIapSettingsApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference">GoogleIapSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.accessSettingsInput">accessSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.applicationSettingsInput">applicationSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessSettings`<sup>Required</sup> <a name="accessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.accessSettings"></a>

```java
public GoogleIapSettingsAccessSettingsOutputReference getAccessSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference">GoogleIapSettingsAccessSettingsOutputReference</a>

---

##### `applicationSettings`<sup>Required</sup> <a name="applicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.applicationSettings"></a>

```java
public GoogleIapSettingsApplicationSettingsOutputReference getApplicationSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference">GoogleIapSettingsApplicationSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.timeouts"></a>

```java
public GoogleIapSettingsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference">GoogleIapSettingsTimeoutsOutputReference</a>

---

##### `accessSettingsInput`<sup>Optional</sup> <a name="accessSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.accessSettingsInput"></a>

```java
public GoogleIapSettingsAccessSettings getAccessSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

---

##### `applicationSettingsInput`<sup>Optional</sup> <a name="applicationSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.applicationSettingsInput"></a>

```java
public GoogleIapSettingsApplicationSettings getApplicationSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapSettingsAccessSettings <a name="GoogleIapSettingsAccessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsAccessSettings;

GoogleIapSettingsAccessSettings.builder()
//  .allowedDomainsSettings(GoogleIapSettingsAccessSettingsAllowedDomainsSettings)
//  .corsSettings(GoogleIapSettingsAccessSettingsCorsSettings)
//  .gcipSettings(GoogleIapSettingsAccessSettingsGcipSettings)
//  .identitySources(java.util.List<java.lang.String>)
//  .oauthSettings(GoogleIapSettingsAccessSettingsOauthSettings)
//  .reauthSettings(GoogleIapSettingsAccessSettingsReauthSettings)
//  .workforceIdentitySettings(GoogleIapSettingsAccessSettingsWorkforceIdentitySettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.allowedDomainsSettings">allowedDomainsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a></code> | allowed_domains_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.corsSettings">corsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a></code> | cors_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.gcipSettings">gcipSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a></code> | gcip_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.identitySources">identitySources</a></code> | <code>java.util.List<java.lang.String></code> | Identity sources that IAP can use to authenticate the end user. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.oauthSettings">oauthSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a></code> | oauth_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.reauthSettings">reauthSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a></code> | reauth_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.workforceIdentitySettings">workforceIdentitySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | workforce_identity_settings block. |

---

##### `allowedDomainsSettings`<sup>Optional</sup> <a name="allowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.allowedDomainsSettings"></a>

```java
public GoogleIapSettingsAccessSettingsAllowedDomainsSettings getAllowedDomainsSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a>

allowed_domains_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#allowed_domains_settings GoogleIapSettings#allowed_domains_settings}

---

##### `corsSettings`<sup>Optional</sup> <a name="corsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.corsSettings"></a>

```java
public GoogleIapSettingsAccessSettingsCorsSettings getCorsSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a>

cors_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#cors_settings GoogleIapSettings#cors_settings}

---

##### `gcipSettings`<sup>Optional</sup> <a name="gcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.gcipSettings"></a>

```java
public GoogleIapSettingsAccessSettingsGcipSettings getGcipSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a>

gcip_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#gcip_settings GoogleIapSettings#gcip_settings}

---

##### `identitySources`<sup>Optional</sup> <a name="identitySources" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.identitySources"></a>

```java
public java.util.List<java.lang.String> getIdentitySources();
```

- *Type:* java.util.List<java.lang.String>

Identity sources that IAP can use to authenticate the end user.

Only one identity source
can be configured. The possible values are:

* 'WORKFORCE_IDENTITY_FEDERATION': Use external identities set up on Google Cloud Workforce
  Identity Federation. Possible values: ["WORKFORCE_IDENTITY_FEDERATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#identity_sources GoogleIapSettings#identity_sources}

---

##### `oauthSettings`<sup>Optional</sup> <a name="oauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.oauthSettings"></a>

```java
public GoogleIapSettingsAccessSettingsOauthSettings getOauthSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a>

oauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#oauth_settings GoogleIapSettings#oauth_settings}

---

##### `reauthSettings`<sup>Optional</sup> <a name="reauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.reauthSettings"></a>

```java
public GoogleIapSettingsAccessSettingsReauthSettings getReauthSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a>

reauth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#reauth_settings GoogleIapSettings#reauth_settings}

---

##### `workforceIdentitySettings`<sup>Optional</sup> <a name="workforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings.property.workforceIdentitySettings"></a>

```java
public GoogleIapSettingsAccessSettingsWorkforceIdentitySettings getWorkforceIdentitySettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a>

workforce_identity_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#workforce_identity_settings GoogleIapSettings#workforce_identity_settings}

---

### GoogleIapSettingsAccessSettingsAllowedDomainsSettings <a name="GoogleIapSettingsAccessSettingsAllowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings;

GoogleIapSettingsAccessSettingsAllowedDomainsSettings.builder()
//  .domains(java.util.List<java.lang.String>)
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | List of trusted domains. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Configuration for customers to opt in for the feature. |

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

List of trusted domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#domains GoogleIapSettings#domains}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Configuration for customers to opt in for the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#enable GoogleIapSettings#enable}

---

### GoogleIapSettingsAccessSettingsCorsSettings <a name="GoogleIapSettingsAccessSettingsCorsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsAccessSettingsCorsSettings;

GoogleIapSettingsAccessSettingsCorsSettings.builder()
//  .allowHttpOptions(java.lang.Boolean)
//  .allowHttpOptions(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings.property.allowHttpOptions">allowHttpOptions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Configuration to allow HTTP OPTIONS calls to skip authorization. |

---

##### `allowHttpOptions`<sup>Optional</sup> <a name="allowHttpOptions" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings.property.allowHttpOptions"></a>

```java
public java.lang.Object getAllowHttpOptions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Configuration to allow HTTP OPTIONS calls to skip authorization.

If undefined, IAP will not apply any special logic to OPTIONS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#allow_http_options GoogleIapSettings#allow_http_options}

---

### GoogleIapSettingsAccessSettingsGcipSettings <a name="GoogleIapSettingsAccessSettingsGcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsAccessSettingsGcipSettings;

GoogleIapSettingsAccessSettingsGcipSettings.builder()
//  .loginPageUri(java.lang.String)
//  .tenantIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.property.loginPageUri">loginPageUri</a></code> | <code>java.lang.String</code> | Login page URI associated with the GCIP tenants. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.property.tenantIds">tenantIds</a></code> | <code>java.util.List<java.lang.String></code> | GCIP tenant ids that are linked to the IAP resource. |

---

##### `loginPageUri`<sup>Optional</sup> <a name="loginPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.property.loginPageUri"></a>

```java
public java.lang.String getLoginPageUri();
```

- *Type:* java.lang.String

Login page URI associated with the GCIP tenants.

Typically, all resources within
the same project share the same login page, though it could be overridden at the
sub resource level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#login_page_uri GoogleIapSettings#login_page_uri}

---

##### `tenantIds`<sup>Optional</sup> <a name="tenantIds" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings.property.tenantIds"></a>

```java
public java.util.List<java.lang.String> getTenantIds();
```

- *Type:* java.util.List<java.lang.String>

GCIP tenant ids that are linked to the IAP resource.

tenantIds could be a string
beginning with a number character to indicate authenticating with GCIP tenant flow,
or in the format of _ to indicate authenticating with GCIP agent flow. If agent flow
is used, tenantIds should only contain one single element, while for tenant flow,
tenantIds can contain multiple elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#tenant_ids GoogleIapSettings#tenant_ids}

---

### GoogleIapSettingsAccessSettingsOauthSettings <a name="GoogleIapSettingsAccessSettingsOauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsAccessSettingsOauthSettings;

GoogleIapSettingsAccessSettingsOauthSettings.builder()
//  .loginHint(java.lang.String)
//  .programmaticClients(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.property.loginHint">loginHint</a></code> | <code>java.lang.String</code> | Domain hint to send as hd=? |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.property.programmaticClients">programmaticClients</a></code> | <code>java.util.List<java.lang.String></code> | List of client ids allowed to use IAP programmatically. |

---

##### `loginHint`<sup>Optional</sup> <a name="loginHint" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.property.loginHint"></a>

```java
public java.lang.String getLoginHint();
```

- *Type:* java.lang.String

Domain hint to send as hd=?

parameter in OAuth request flow.
Enables redirect to primary IDP by skipping Google's login screen.
(https://developers.google.com/identity/protocols/OpenIDConnect#hd-param)
Note: IAP does not verify that the id token's hd claim matches this value
since access behavior is managed by IAM policies.

* loginHint setting is not a replacement for access control. Always enforce an appropriate access policy if you want to restrict access to users outside your domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#login_hint GoogleIapSettings#login_hint}

---

##### `programmaticClients`<sup>Optional</sup> <a name="programmaticClients" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings.property.programmaticClients"></a>

```java
public java.util.List<java.lang.String> getProgrammaticClients();
```

- *Type:* java.util.List<java.lang.String>

List of client ids allowed to use IAP programmatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#programmatic_clients GoogleIapSettings#programmatic_clients}

---

### GoogleIapSettingsAccessSettingsReauthSettings <a name="GoogleIapSettingsAccessSettingsReauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsAccessSettingsReauthSettings;

GoogleIapSettingsAccessSettingsReauthSettings.builder()
    .maxAge(java.lang.String)
    .method(java.lang.String)
    .policyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.maxAge">maxAge</a></code> | <code>java.lang.String</code> | Reauth session lifetime, how long before a user has to reauthenticate again. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.method">method</a></code> | <code>java.lang.String</code> | Reauth method requested. The possible values are:. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.policyType">policyType</a></code> | <code>java.lang.String</code> | How IAP determines the effective policy in cases of hierarchical policies. |

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.maxAge"></a>

```java
public java.lang.String getMaxAge();
```

- *Type:* java.lang.String

Reauth session lifetime, how long before a user has to reauthenticate again.

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#max_age GoogleIapSettings#max_age}

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Reauth method requested. The possible values are:.

* 'LOGIN': Prompts the user to log in again.
* 'SECURE_KEY': User must use their secure key 2nd factor device.
* 'ENROLLED_SECOND_FACTORS': User can use any enabled 2nd factor. Possible values: ["LOGIN", "SECURE_KEY", "ENROLLED_SECOND_FACTORS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#method GoogleIapSettings#method}

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

How IAP determines the effective policy in cases of hierarchical policies.

Policies are merged from higher in the hierarchy to lower in the hierarchy.
The possible values are:

* 'MINIMUM': This policy acts as a minimum to other policies, lower in the hierarchy.
  Effective policy may only be the same or stricter.
* 'DEFAULT': This policy acts as a default if no other reauth policy is set. Possible values: ["MINIMUM", "DEFAULT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#policy_type GoogleIapSettings#policy_type}

---

### GoogleIapSettingsAccessSettingsWorkforceIdentitySettings <a name="GoogleIapSettingsAccessSettingsWorkforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings;

GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.builder()
//  .oauth2(GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2)
//  .workforcePools(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.property.oauth2">oauth2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | oauth2 block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.property.workforcePools">workforcePools</a></code> | <code>java.util.List<java.lang.String></code> | The workforce pool resources. Only one workforce pool is accepted. |

---

##### `oauth2`<sup>Optional</sup> <a name="oauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.property.oauth2"></a>

```java
public GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 getOauth2();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

oauth2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#oauth2 GoogleIapSettings#oauth2}

---

##### `workforcePools`<sup>Optional</sup> <a name="workforcePools" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings.property.workforcePools"></a>

```java
public java.util.List<java.lang.String> getWorkforcePools();
```

- *Type:* java.util.List<java.lang.String>

The workforce pool resources. Only one workforce pool is accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#workforce_pools GoogleIapSettings#workforce_pools}

---

### GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 <a name="GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2;

GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.builder()
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Input only. The OAuth 2.0 client secret created while registering the client ID. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The OAuth 2.0 client ID registered in the workforce identity federation OAuth 2.0 Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#client_id GoogleIapSettings#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Input only. The OAuth 2.0 client secret created while registering the client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#client_secret GoogleIapSettings#client_secret}

---

### GoogleIapSettingsApplicationSettings <a name="GoogleIapSettingsApplicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsApplicationSettings;

GoogleIapSettingsApplicationSettings.builder()
//  .accessDeniedPageSettings(GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings)
//  .attributePropagationSettings(GoogleIapSettingsApplicationSettingsAttributePropagationSettings)
//  .cookieDomain(java.lang.String)
//  .csmSettings(GoogleIapSettingsApplicationSettingsCsmSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.accessDeniedPageSettings">accessDeniedPageSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | access_denied_page_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.attributePropagationSettings">attributePropagationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a></code> | attribute_propagation_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.cookieDomain">cookieDomain</a></code> | <code>java.lang.String</code> | The Domain value to set for cookies generated by IAP. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.csmSettings">csmSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a></code> | csm_settings block. |

---

##### `accessDeniedPageSettings`<sup>Optional</sup> <a name="accessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.accessDeniedPageSettings"></a>

```java
public GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings getAccessDeniedPageSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a>

access_denied_page_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#access_denied_page_settings GoogleIapSettings#access_denied_page_settings}

---

##### `attributePropagationSettings`<sup>Optional</sup> <a name="attributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.attributePropagationSettings"></a>

```java
public GoogleIapSettingsApplicationSettingsAttributePropagationSettings getAttributePropagationSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a>

attribute_propagation_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#attribute_propagation_settings GoogleIapSettings#attribute_propagation_settings}

---

##### `cookieDomain`<sup>Optional</sup> <a name="cookieDomain" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.cookieDomain"></a>

```java
public java.lang.String getCookieDomain();
```

- *Type:* java.lang.String

The Domain value to set for cookies generated by IAP.

This value is not validated by the API,
but will be ignored at runtime if invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#cookie_domain GoogleIapSettings#cookie_domain}

---

##### `csmSettings`<sup>Optional</sup> <a name="csmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings.property.csmSettings"></a>

```java
public GoogleIapSettingsApplicationSettingsCsmSettings getCsmSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a>

csm_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#csm_settings GoogleIapSettings#csm_settings}

---

### GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings <a name="GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings;

GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.builder()
//  .accessDeniedPageUri(java.lang.String)
//  .generateTroubleshootingUri(java.lang.Boolean)
//  .generateTroubleshootingUri(IResolvable)
//  .remediationTokenGenerationEnabled(java.lang.Boolean)
//  .remediationTokenGenerationEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.accessDeniedPageUri">accessDeniedPageUri</a></code> | <code>java.lang.String</code> | The URI to be redirected to when access is denied. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.generateTroubleshootingUri">generateTroubleshootingUri</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to generate a troubleshooting URL on access denied events to this application. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.remediationTokenGenerationEnabled">remediationTokenGenerationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to generate remediation token on access denied events to this application. |

---

##### `accessDeniedPageUri`<sup>Optional</sup> <a name="accessDeniedPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.accessDeniedPageUri"></a>

```java
public java.lang.String getAccessDeniedPageUri();
```

- *Type:* java.lang.String

The URI to be redirected to when access is denied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#access_denied_page_uri GoogleIapSettings#access_denied_page_uri}

---

##### `generateTroubleshootingUri`<sup>Optional</sup> <a name="generateTroubleshootingUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.generateTroubleshootingUri"></a>

```java
public java.lang.Object getGenerateTroubleshootingUri();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to generate a troubleshooting URL on access denied events to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#generate_troubleshooting_uri GoogleIapSettings#generate_troubleshooting_uri}

---

##### `remediationTokenGenerationEnabled`<sup>Optional</sup> <a name="remediationTokenGenerationEnabled" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings.property.remediationTokenGenerationEnabled"></a>

```java
public java.lang.Object getRemediationTokenGenerationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to generate remediation token on access denied events to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#remediation_token_generation_enabled GoogleIapSettings#remediation_token_generation_enabled}

---

### GoogleIapSettingsApplicationSettingsAttributePropagationSettings <a name="GoogleIapSettingsApplicationSettingsAttributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings;

GoogleIapSettingsApplicationSettingsAttributePropagationSettings.builder()
//  .enable(java.lang.Boolean)
//  .enable(IResolvable)
//  .expression(java.lang.String)
//  .outputCredentials(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the provided attribute propagation settings should be evaluated on user requests. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.expression">expression</a></code> | <code>java.lang.String</code> | Raw string CEL expression. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.outputCredentials">outputCredentials</a></code> | <code>java.util.List<java.lang.String></code> | Which output credentials attributes selected by the CEL expression should be propagated in. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the provided attribute propagation settings should be evaluated on user requests.

If set to true, attributes returned from the expression will be propagated in the set output credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#enable GoogleIapSettings#enable}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Raw string CEL expression.

Must return a list of attributes. A maximum of 45 attributes can
be selected. Expressions can select different attribute types from attributes:
attributes.saml_attributes, attributes.iap_attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#expression GoogleIapSettings#expression}

---

##### `outputCredentials`<sup>Optional</sup> <a name="outputCredentials" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings.property.outputCredentials"></a>

```java
public java.util.List<java.lang.String> getOutputCredentials();
```

- *Type:* java.util.List<java.lang.String>

Which output credentials attributes selected by the CEL expression should be propagated in.

All attributes will be fully duplicated in each selected output credential.
Possible values are:

* 'HEADER': Propagate attributes in the headers with "x-goog-iap-attr-" prefix.
* 'JWT': Propagate attributes in the JWT of the form:
  "additional_claims": { "my_attribute": ["value1", "value2"] }
* 'RCTOKEN': Propagate attributes in the RCToken of the form: "
  additional_claims": { "my_attribute": ["value1", "value2"] } Possible values: ["HEADER", "JWT", "RCTOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#output_credentials GoogleIapSettings#output_credentials}

---

### GoogleIapSettingsApplicationSettingsCsmSettings <a name="GoogleIapSettingsApplicationSettingsCsmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsApplicationSettingsCsmSettings;

GoogleIapSettingsApplicationSettingsCsmSettings.builder()
//  .rctokenAud(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings.property.rctokenAud">rctokenAud</a></code> | <code>java.lang.String</code> | Audience claim set in the generated RCToken. This value is not validated by IAP. |

---

##### `rctokenAud`<sup>Optional</sup> <a name="rctokenAud" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings.property.rctokenAud"></a>

```java
public java.lang.String getRctokenAud();
```

- *Type:* java.lang.String

Audience claim set in the generated RCToken. This value is not validated by IAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#rctoken_aud GoogleIapSettings#rctoken_aud}

---

### GoogleIapSettingsConfig <a name="GoogleIapSettingsConfig" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsConfig;

GoogleIapSettingsConfig.builder()
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
//  .accessSettings(GoogleIapSettingsAccessSettings)
//  .applicationSettings(GoogleIapSettingsApplicationSettings)
//  .id(java.lang.String)
//  .timeouts(GoogleIapSettingsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the IAP protected resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.accessSettings">accessSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a></code> | application_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#id GoogleIapSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the IAP protected resource.

Name can have below resources:

* organizations/{organization_id}
* folders/{folder_id}
* projects/{project_id}
* projects/{project_id}/iap_web
* projects/{project_id}/iap_web/compute
* projects/{project_id}/iap_web/compute-{region}
* projects/{project_id}/iap_web/compute/services/{service_id}
* projects/{project_id}/iap_web/compute-{region}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}
* projects/{project_id}/iap_web/appengine-{app_id}/services/{service_id}/version/{version_id}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#name GoogleIapSettings#name}

---

##### `accessSettings`<sup>Optional</sup> <a name="accessSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.accessSettings"></a>

```java
public GoogleIapSettingsAccessSettings getAccessSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#access_settings GoogleIapSettings#access_settings}

---

##### `applicationSettings`<sup>Optional</sup> <a name="applicationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.applicationSettings"></a>

```java
public GoogleIapSettingsApplicationSettings getApplicationSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

application_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#application_settings GoogleIapSettings#application_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#id GoogleIapSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsConfig.property.timeouts"></a>

```java
public GoogleIapSettingsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#timeouts GoogleIapSettings#timeouts}

---

### GoogleIapSettingsTimeouts <a name="GoogleIapSettingsTimeouts" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsTimeouts;

GoogleIapSettingsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#create GoogleIapSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#delete GoogleIapSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#update GoogleIapSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#create GoogleIapSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#delete GoogleIapSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_iap_settings#update GoogleIapSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference;

new GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetEnable">resetEnable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomains` <a name="resetDomains" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetDomains"></a>

```java
public void resetDomains()
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.resetEnable"></a>

```java
public void resetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domainsInput">domainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domains">domains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domainsInput"></a>

```java
public java.util.List<java.lang.String> getDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.domains"></a>

```java
public java.util.List<java.lang.String> getDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference.property.internalValue"></a>

```java
public GoogleIapSettingsAccessSettingsAllowedDomainsSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a>

---


### GoogleIapSettingsAccessSettingsCorsSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsCorsSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference;

new GoogleIapSettingsAccessSettingsCorsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resetAllowHttpOptions">resetAllowHttpOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowHttpOptions` <a name="resetAllowHttpOptions" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.resetAllowHttpOptions"></a>

```java
public void resetAllowHttpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptionsInput">allowHttpOptionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptions">allowHttpOptions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowHttpOptionsInput`<sup>Optional</sup> <a name="allowHttpOptionsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptionsInput"></a>

```java
public java.lang.Object getAllowHttpOptionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowHttpOptions`<sup>Required</sup> <a name="allowHttpOptions" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.allowHttpOptions"></a>

```java
public java.lang.Object getAllowHttpOptions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference.property.internalValue"></a>

```java
public GoogleIapSettingsAccessSettingsCorsSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a>

---


### GoogleIapSettingsAccessSettingsGcipSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsGcipSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference;

new GoogleIapSettingsAccessSettingsGcipSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resetLoginPageUri">resetLoginPageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resetTenantIds">resetTenantIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoginPageUri` <a name="resetLoginPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resetLoginPageUri"></a>

```java
public void resetLoginPageUri()
```

##### `resetTenantIds` <a name="resetTenantIds" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.resetTenantIds"></a>

```java
public void resetTenantIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUriInput">loginPageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIdsInput">tenantIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUri">loginPageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIds">tenantIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loginPageUriInput`<sup>Optional</sup> <a name="loginPageUriInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUriInput"></a>

```java
public java.lang.String getLoginPageUriInput();
```

- *Type:* java.lang.String

---

##### `tenantIdsInput`<sup>Optional</sup> <a name="tenantIdsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIdsInput"></a>

```java
public java.util.List<java.lang.String> getTenantIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginPageUri`<sup>Required</sup> <a name="loginPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.loginPageUri"></a>

```java
public java.lang.String getLoginPageUri();
```

- *Type:* java.lang.String

---

##### `tenantIds`<sup>Required</sup> <a name="tenantIds" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.tenantIds"></a>

```java
public java.util.List<java.lang.String> getTenantIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference.property.internalValue"></a>

```java
public GoogleIapSettingsAccessSettingsGcipSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a>

---


### GoogleIapSettingsAccessSettingsOauthSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsOauthSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference;

new GoogleIapSettingsAccessSettingsOauthSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resetLoginHint">resetLoginHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resetProgrammaticClients">resetProgrammaticClients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoginHint` <a name="resetLoginHint" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resetLoginHint"></a>

```java
public void resetLoginHint()
```

##### `resetProgrammaticClients` <a name="resetProgrammaticClients" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.resetProgrammaticClients"></a>

```java
public void resetProgrammaticClients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHintInput">loginHintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClientsInput">programmaticClientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHint">loginHint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClients">programmaticClients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loginHintInput`<sup>Optional</sup> <a name="loginHintInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHintInput"></a>

```java
public java.lang.String getLoginHintInput();
```

- *Type:* java.lang.String

---

##### `programmaticClientsInput`<sup>Optional</sup> <a name="programmaticClientsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClientsInput"></a>

```java
public java.util.List<java.lang.String> getProgrammaticClientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginHint`<sup>Required</sup> <a name="loginHint" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.loginHint"></a>

```java
public java.lang.String getLoginHint();
```

- *Type:* java.lang.String

---

##### `programmaticClients`<sup>Required</sup> <a name="programmaticClients" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.programmaticClients"></a>

```java
public java.util.List<java.lang.String> getProgrammaticClients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference.property.internalValue"></a>

```java
public GoogleIapSettingsAccessSettingsOauthSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a>

---


### GoogleIapSettingsAccessSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsAccessSettingsOutputReference;

new GoogleIapSettingsAccessSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings">putAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putCorsSettings">putCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putGcipSettings">putGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putOauthSettings">putOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putReauthSettings">putReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings">putWorkforceIdentitySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetAllowedDomainsSettings">resetAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetCorsSettings">resetCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetGcipSettings">resetGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetIdentitySources">resetIdentitySources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetOauthSettings">resetOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetReauthSettings">resetReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetWorkforceIdentitySettings">resetWorkforceIdentitySettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedDomainsSettings` <a name="putAllowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings"></a>

```java
public void putAllowedDomainsSettings(GoogleIapSettingsAccessSettingsAllowedDomainsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putAllowedDomainsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a>

---

##### `putCorsSettings` <a name="putCorsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putCorsSettings"></a>

```java
public void putCorsSettings(GoogleIapSettingsAccessSettingsCorsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putCorsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a>

---

##### `putGcipSettings` <a name="putGcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putGcipSettings"></a>

```java
public void putGcipSettings(GoogleIapSettingsAccessSettingsGcipSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putGcipSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a>

---

##### `putOauthSettings` <a name="putOauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putOauthSettings"></a>

```java
public void putOauthSettings(GoogleIapSettingsAccessSettingsOauthSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putOauthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a>

---

##### `putReauthSettings` <a name="putReauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putReauthSettings"></a>

```java
public void putReauthSettings(GoogleIapSettingsAccessSettingsReauthSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putReauthSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a>

---

##### `putWorkforceIdentitySettings` <a name="putWorkforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings"></a>

```java
public void putWorkforceIdentitySettings(GoogleIapSettingsAccessSettingsWorkforceIdentitySettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.putWorkforceIdentitySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a>

---

##### `resetAllowedDomainsSettings` <a name="resetAllowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetAllowedDomainsSettings"></a>

```java
public void resetAllowedDomainsSettings()
```

##### `resetCorsSettings` <a name="resetCorsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetCorsSettings"></a>

```java
public void resetCorsSettings()
```

##### `resetGcipSettings` <a name="resetGcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetGcipSettings"></a>

```java
public void resetGcipSettings()
```

##### `resetIdentitySources` <a name="resetIdentitySources" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetIdentitySources"></a>

```java
public void resetIdentitySources()
```

##### `resetOauthSettings` <a name="resetOauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetOauthSettings"></a>

```java
public void resetOauthSettings()
```

##### `resetReauthSettings` <a name="resetReauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetReauthSettings"></a>

```java
public void resetReauthSettings()
```

##### `resetWorkforceIdentitySettings` <a name="resetWorkforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.resetWorkforceIdentitySettings"></a>

```java
public void resetWorkforceIdentitySettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.allowedDomainsSettings">allowedDomainsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference">GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.corsSettings">corsSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference">GoogleIapSettingsAccessSettingsCorsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.gcipSettings">gcipSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference">GoogleIapSettingsAccessSettingsGcipSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.oauthSettings">oauthSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference">GoogleIapSettingsAccessSettingsOauthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.reauthSettings">reauthSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference">GoogleIapSettingsAccessSettingsReauthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.workforceIdentitySettings">workforceIdentitySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.allowedDomainsSettingsInput">allowedDomainsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.corsSettingsInput">corsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.gcipSettingsInput">gcipSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.identitySourcesInput">identitySourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.oauthSettingsInput">oauthSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.reauthSettingsInput">reauthSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.workforceIdentitySettingsInput">workforceIdentitySettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.identitySources">identitySources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedDomainsSettings`<sup>Required</sup> <a name="allowedDomainsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.allowedDomainsSettings"></a>

```java
public GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference getAllowedDomainsSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference">GoogleIapSettingsAccessSettingsAllowedDomainsSettingsOutputReference</a>

---

##### `corsSettings`<sup>Required</sup> <a name="corsSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.corsSettings"></a>

```java
public GoogleIapSettingsAccessSettingsCorsSettingsOutputReference getCorsSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettingsOutputReference">GoogleIapSettingsAccessSettingsCorsSettingsOutputReference</a>

---

##### `gcipSettings`<sup>Required</sup> <a name="gcipSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.gcipSettings"></a>

```java
public GoogleIapSettingsAccessSettingsGcipSettingsOutputReference getGcipSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettingsOutputReference">GoogleIapSettingsAccessSettingsGcipSettingsOutputReference</a>

---

##### `oauthSettings`<sup>Required</sup> <a name="oauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.oauthSettings"></a>

```java
public GoogleIapSettingsAccessSettingsOauthSettingsOutputReference getOauthSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettingsOutputReference">GoogleIapSettingsAccessSettingsOauthSettingsOutputReference</a>

---

##### `reauthSettings`<sup>Required</sup> <a name="reauthSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.reauthSettings"></a>

```java
public GoogleIapSettingsAccessSettingsReauthSettingsOutputReference getReauthSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference">GoogleIapSettingsAccessSettingsReauthSettingsOutputReference</a>

---

##### `workforceIdentitySettings`<sup>Required</sup> <a name="workforceIdentitySettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.workforceIdentitySettings"></a>

```java
public GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference getWorkforceIdentitySettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference</a>

---

##### `allowedDomainsSettingsInput`<sup>Optional</sup> <a name="allowedDomainsSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.allowedDomainsSettingsInput"></a>

```java
public GoogleIapSettingsAccessSettingsAllowedDomainsSettings getAllowedDomainsSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsAllowedDomainsSettings">GoogleIapSettingsAccessSettingsAllowedDomainsSettings</a>

---

##### `corsSettingsInput`<sup>Optional</sup> <a name="corsSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.corsSettingsInput"></a>

```java
public GoogleIapSettingsAccessSettingsCorsSettings getCorsSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsCorsSettings">GoogleIapSettingsAccessSettingsCorsSettings</a>

---

##### `gcipSettingsInput`<sup>Optional</sup> <a name="gcipSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.gcipSettingsInput"></a>

```java
public GoogleIapSettingsAccessSettingsGcipSettings getGcipSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsGcipSettings">GoogleIapSettingsAccessSettingsGcipSettings</a>

---

##### `identitySourcesInput`<sup>Optional</sup> <a name="identitySourcesInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.identitySourcesInput"></a>

```java
public java.util.List<java.lang.String> getIdentitySourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oauthSettingsInput`<sup>Optional</sup> <a name="oauthSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.oauthSettingsInput"></a>

```java
public GoogleIapSettingsAccessSettingsOauthSettings getOauthSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOauthSettings">GoogleIapSettingsAccessSettingsOauthSettings</a>

---

##### `reauthSettingsInput`<sup>Optional</sup> <a name="reauthSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.reauthSettingsInput"></a>

```java
public GoogleIapSettingsAccessSettingsReauthSettings getReauthSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a>

---

##### `workforceIdentitySettingsInput`<sup>Optional</sup> <a name="workforceIdentitySettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.workforceIdentitySettingsInput"></a>

```java
public GoogleIapSettingsAccessSettingsWorkforceIdentitySettings getWorkforceIdentitySettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a>

---

##### `identitySources`<sup>Required</sup> <a name="identitySources" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.identitySources"></a>

```java
public java.util.List<java.lang.String> getIdentitySources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsOutputReference.property.internalValue"></a>

```java
public GoogleIapSettingsAccessSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettings">GoogleIapSettingsAccessSettings</a>

---


### GoogleIapSettingsAccessSettingsReauthSettingsOutputReference <a name="GoogleIapSettingsAccessSettingsReauthSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference;

new GoogleIapSettingsAccessSettingsReauthSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAgeInput"></a>

```java
public java.lang.String getMaxAgeInput();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.maxAge"></a>

```java
public java.lang.String getMaxAge();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettingsOutputReference.property.internalValue"></a>

```java
public GoogleIapSettingsAccessSettingsReauthSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsReauthSettings">GoogleIapSettingsAccessSettingsReauthSettings</a>

---


### GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference <a name="GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference;

new GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretSha256">clientSecretSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientSecretSha256`<sup>Required</sup> <a name="clientSecretSha256" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretSha256"></a>

```java
public java.lang.String getClientSecretSha256();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference.property.internalValue"></a>

```java
public GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---


### GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference <a name="GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference;

new GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2">putOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetOauth2">resetOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetWorkforcePools">resetWorkforcePools</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOauth2` <a name="putOauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2"></a>

```java
public void putOauth2(GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.putOauth2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---

##### `resetOauth2` <a name="resetOauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetOauth2"></a>

```java
public void resetOauth2()
```

##### `resetWorkforcePools` <a name="resetWorkforcePools" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.resetWorkforcePools"></a>

```java
public void resetWorkforcePools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2">oauth2</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2Input">oauth2Input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePoolsInput">workforcePoolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePools">workforcePools</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `oauth2`<sup>Required</sup> <a name="oauth2" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2"></a>

```java
public GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference getOauth2();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2OutputReference</a>

---

##### `oauth2Input`<sup>Optional</sup> <a name="oauth2Input" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.oauth2Input"></a>

```java
public GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2 getOauth2Input();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2">GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOauth2</a>

---

##### `workforcePoolsInput`<sup>Optional</sup> <a name="workforcePoolsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePoolsInput"></a>

```java
public java.util.List<java.lang.String> getWorkforcePoolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workforcePools`<sup>Required</sup> <a name="workforcePools" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.workforcePools"></a>

```java
public java.util.List<java.lang.String> getWorkforcePools();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettingsOutputReference.property.internalValue"></a>

```java
public GoogleIapSettingsAccessSettingsWorkforceIdentitySettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsAccessSettingsWorkforceIdentitySettings">GoogleIapSettingsAccessSettingsWorkforceIdentitySettings</a>

---


### GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference <a name="GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference;

new GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetAccessDeniedPageUri">resetAccessDeniedPageUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetGenerateTroubleshootingUri">resetGenerateTroubleshootingUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetRemediationTokenGenerationEnabled">resetRemediationTokenGenerationEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessDeniedPageUri` <a name="resetAccessDeniedPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetAccessDeniedPageUri"></a>

```java
public void resetAccessDeniedPageUri()
```

##### `resetGenerateTroubleshootingUri` <a name="resetGenerateTroubleshootingUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetGenerateTroubleshootingUri"></a>

```java
public void resetGenerateTroubleshootingUri()
```

##### `resetRemediationTokenGenerationEnabled` <a name="resetRemediationTokenGenerationEnabled" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.resetRemediationTokenGenerationEnabled"></a>

```java
public void resetRemediationTokenGenerationEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUriInput">accessDeniedPageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUriInput">generateTroubleshootingUriInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabledInput">remediationTokenGenerationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUri">accessDeniedPageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUri">generateTroubleshootingUri</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabled">remediationTokenGenerationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessDeniedPageUriInput`<sup>Optional</sup> <a name="accessDeniedPageUriInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUriInput"></a>

```java
public java.lang.String getAccessDeniedPageUriInput();
```

- *Type:* java.lang.String

---

##### `generateTroubleshootingUriInput`<sup>Optional</sup> <a name="generateTroubleshootingUriInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUriInput"></a>

```java
public java.lang.Object getGenerateTroubleshootingUriInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `remediationTokenGenerationEnabledInput`<sup>Optional</sup> <a name="remediationTokenGenerationEnabledInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabledInput"></a>

```java
public java.lang.Object getRemediationTokenGenerationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `accessDeniedPageUri`<sup>Required</sup> <a name="accessDeniedPageUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.accessDeniedPageUri"></a>

```java
public java.lang.String getAccessDeniedPageUri();
```

- *Type:* java.lang.String

---

##### `generateTroubleshootingUri`<sup>Required</sup> <a name="generateTroubleshootingUri" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.generateTroubleshootingUri"></a>

```java
public java.lang.Object getGenerateTroubleshootingUri();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `remediationTokenGenerationEnabled`<sup>Required</sup> <a name="remediationTokenGenerationEnabled" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.remediationTokenGenerationEnabled"></a>

```java
public java.lang.Object getRemediationTokenGenerationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference.property.internalValue"></a>

```java
public GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---


### GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference <a name="GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference;

new GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetOutputCredentials">resetOutputCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetOutputCredentials` <a name="resetOutputCredentials" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.resetOutputCredentials"></a>

```java
public void resetOutputCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentialsInput">outputCredentialsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentials">outputCredentials</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enableInput"></a>

```java
public java.lang.Object getEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `outputCredentialsInput`<sup>Optional</sup> <a name="outputCredentialsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentialsInput"></a>

```java
public java.util.List<java.lang.String> getOutputCredentialsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.enable"></a>

```java
public java.lang.Object getEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `outputCredentials`<sup>Required</sup> <a name="outputCredentials" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.outputCredentials"></a>

```java
public java.util.List<java.lang.String> getOutputCredentials();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference.property.internalValue"></a>

```java
public GoogleIapSettingsApplicationSettingsAttributePropagationSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a>

---


### GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference <a name="GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference;

new GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resetRctokenAud">resetRctokenAud</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRctokenAud` <a name="resetRctokenAud" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.resetRctokenAud"></a>

```java
public void resetRctokenAud()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAudInput">rctokenAudInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAud">rctokenAud</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rctokenAudInput`<sup>Optional</sup> <a name="rctokenAudInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAudInput"></a>

```java
public java.lang.String getRctokenAudInput();
```

- *Type:* java.lang.String

---

##### `rctokenAud`<sup>Required</sup> <a name="rctokenAud" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.rctokenAud"></a>

```java
public java.lang.String getRctokenAud();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference.property.internalValue"></a>

```java
public GoogleIapSettingsApplicationSettingsCsmSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a>

---


### GoogleIapSettingsApplicationSettingsOutputReference <a name="GoogleIapSettingsApplicationSettingsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsApplicationSettingsOutputReference;

new GoogleIapSettingsApplicationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings">putAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings">putAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putCsmSettings">putCsmSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetAccessDeniedPageSettings">resetAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetAttributePropagationSettings">resetAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetCookieDomain">resetCookieDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetCsmSettings">resetCsmSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessDeniedPageSettings` <a name="putAccessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings"></a>

```java
public void putAccessDeniedPageSettings(GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAccessDeniedPageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---

##### `putAttributePropagationSettings` <a name="putAttributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings"></a>

```java
public void putAttributePropagationSettings(GoogleIapSettingsApplicationSettingsAttributePropagationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putAttributePropagationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a>

---

##### `putCsmSettings` <a name="putCsmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putCsmSettings"></a>

```java
public void putCsmSettings(GoogleIapSettingsApplicationSettingsCsmSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.putCsmSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a>

---

##### `resetAccessDeniedPageSettings` <a name="resetAccessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetAccessDeniedPageSettings"></a>

```java
public void resetAccessDeniedPageSettings()
```

##### `resetAttributePropagationSettings` <a name="resetAttributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetAttributePropagationSettings"></a>

```java
public void resetAttributePropagationSettings()
```

##### `resetCookieDomain` <a name="resetCookieDomain" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetCookieDomain"></a>

```java
public void resetCookieDomain()
```

##### `resetCsmSettings` <a name="resetCsmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.resetCsmSettings"></a>

```java
public void resetCsmSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettings">accessDeniedPageSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.attributePropagationSettings">attributePropagationSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference">GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.csmSettings">csmSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference">GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettingsInput">accessDeniedPageSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.attributePropagationSettingsInput">attributePropagationSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.cookieDomainInput">cookieDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.csmSettingsInput">csmSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.cookieDomain">cookieDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessDeniedPageSettings`<sup>Required</sup> <a name="accessDeniedPageSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettings"></a>

```java
public GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference getAccessDeniedPageSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettingsOutputReference</a>

---

##### `attributePropagationSettings`<sup>Required</sup> <a name="attributePropagationSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.attributePropagationSettings"></a>

```java
public GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference getAttributePropagationSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference">GoogleIapSettingsApplicationSettingsAttributePropagationSettingsOutputReference</a>

---

##### `csmSettings`<sup>Required</sup> <a name="csmSettings" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.csmSettings"></a>

```java
public GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference getCsmSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference">GoogleIapSettingsApplicationSettingsCsmSettingsOutputReference</a>

---

##### `accessDeniedPageSettingsInput`<sup>Optional</sup> <a name="accessDeniedPageSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.accessDeniedPageSettingsInput"></a>

```java
public GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings getAccessDeniedPageSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings">GoogleIapSettingsApplicationSettingsAccessDeniedPageSettings</a>

---

##### `attributePropagationSettingsInput`<sup>Optional</sup> <a name="attributePropagationSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.attributePropagationSettingsInput"></a>

```java
public GoogleIapSettingsApplicationSettingsAttributePropagationSettings getAttributePropagationSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsAttributePropagationSettings">GoogleIapSettingsApplicationSettingsAttributePropagationSettings</a>

---

##### `cookieDomainInput`<sup>Optional</sup> <a name="cookieDomainInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.cookieDomainInput"></a>

```java
public java.lang.String getCookieDomainInput();
```

- *Type:* java.lang.String

---

##### `csmSettingsInput`<sup>Optional</sup> <a name="csmSettingsInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.csmSettingsInput"></a>

```java
public GoogleIapSettingsApplicationSettingsCsmSettings getCsmSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsCsmSettings">GoogleIapSettingsApplicationSettingsCsmSettings</a>

---

##### `cookieDomain`<sup>Required</sup> <a name="cookieDomain" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.cookieDomain"></a>

```java
public java.lang.String getCookieDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettingsOutputReference.property.internalValue"></a>

```java
public GoogleIapSettingsApplicationSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsApplicationSettings">GoogleIapSettingsApplicationSettings</a>

---


### GoogleIapSettingsTimeoutsOutputReference <a name="GoogleIapSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_iap_settings.GoogleIapSettingsTimeoutsOutputReference;

new GoogleIapSettingsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleIapSettings.GoogleIapSettingsTimeouts">GoogleIapSettingsTimeouts</a>

---



