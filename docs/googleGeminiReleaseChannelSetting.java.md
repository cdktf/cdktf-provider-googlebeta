# `googleGeminiReleaseChannelSetting` Submodule <a name="`googleGeminiReleaseChannelSetting` Submodule" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiReleaseChannelSetting <a name="GoogleGeminiReleaseChannelSetting" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting google_gemini_release_channel_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_release_channel_setting.GoogleGeminiReleaseChannelSetting;

GoogleGeminiReleaseChannelSetting.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .releaseChannelSettingId(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .releaseChannel(java.lang.String)
//  .timeouts(GoogleGeminiReleaseChannelSettingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.releaseChannelSettingId">releaseChannelSettingId</a></code> | <code>java.lang.String</code> | Id of the Release Channel Setting. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#id GoogleGeminiReleaseChannelSetting#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#project GoogleGeminiReleaseChannelSetting#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.releaseChannel">releaseChannel</a></code> | <code>java.lang.String</code> | Release channel to be used. Possible values: STABLE EXPERIMENTAL. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts">GoogleGeminiReleaseChannelSettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#location GoogleGeminiReleaseChannelSetting#location}

---

##### `releaseChannelSettingId`<sup>Required</sup> <a name="releaseChannelSettingId" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.releaseChannelSettingId"></a>

- *Type:* java.lang.String

Id of the Release Channel Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#release_channel_setting_id GoogleGeminiReleaseChannelSetting#release_channel_setting_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#id GoogleGeminiReleaseChannelSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#labels GoogleGeminiReleaseChannelSetting#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#project GoogleGeminiReleaseChannelSetting#project}.

---

##### `releaseChannel`<sup>Optional</sup> <a name="releaseChannel" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.releaseChannel"></a>

- *Type:* java.lang.String

Release channel to be used. Possible values: STABLE EXPERIMENTAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#release_channel GoogleGeminiReleaseChannelSetting#release_channel}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts">GoogleGeminiReleaseChannelSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#timeouts GoogleGeminiReleaseChannelSetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.resetReleaseChannel">resetReleaseChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.putTimeouts"></a>

```java
public void putTimeouts(GoogleGeminiReleaseChannelSettingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts">GoogleGeminiReleaseChannelSettingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.resetProject"></a>

```java
public void resetProject()
```

##### `resetReleaseChannel` <a name="resetReleaseChannel" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.resetReleaseChannel"></a>

```java
public void resetReleaseChannel()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGeminiReleaseChannelSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_release_channel_setting.GoogleGeminiReleaseChannelSetting;

GoogleGeminiReleaseChannelSetting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_release_channel_setting.GoogleGeminiReleaseChannelSetting;

GoogleGeminiReleaseChannelSetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_release_channel_setting.GoogleGeminiReleaseChannelSetting;

GoogleGeminiReleaseChannelSetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_release_channel_setting.GoogleGeminiReleaseChannelSetting;

GoogleGeminiReleaseChannelSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleGeminiReleaseChannelSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleGeminiReleaseChannelSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleGeminiReleaseChannelSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleGeminiReleaseChannelSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGeminiReleaseChannelSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference">GoogleGeminiReleaseChannelSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.releaseChannelInput">releaseChannelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.releaseChannelSettingIdInput">releaseChannelSettingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts">GoogleGeminiReleaseChannelSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.releaseChannel">releaseChannel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.releaseChannelSettingId">releaseChannelSettingId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.timeouts"></a>

```java
public GoogleGeminiReleaseChannelSettingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference">GoogleGeminiReleaseChannelSettingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `releaseChannelInput`<sup>Optional</sup> <a name="releaseChannelInput" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.releaseChannelInput"></a>

```java
public java.lang.String getReleaseChannelInput();
```

- *Type:* java.lang.String

---

##### `releaseChannelSettingIdInput`<sup>Optional</sup> <a name="releaseChannelSettingIdInput" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.releaseChannelSettingIdInput"></a>

```java
public java.lang.String getReleaseChannelSettingIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts">GoogleGeminiReleaseChannelSettingTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `releaseChannel`<sup>Required</sup> <a name="releaseChannel" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.releaseChannel"></a>

```java
public java.lang.String getReleaseChannel();
```

- *Type:* java.lang.String

---

##### `releaseChannelSettingId`<sup>Required</sup> <a name="releaseChannelSettingId" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.releaseChannelSettingId"></a>

```java
public java.lang.String getReleaseChannelSettingId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiReleaseChannelSettingConfig <a name="GoogleGeminiReleaseChannelSettingConfig" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_release_channel_setting.GoogleGeminiReleaseChannelSettingConfig;

GoogleGeminiReleaseChannelSettingConfig.builder()
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
    .location(java.lang.String)
    .releaseChannelSettingId(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .releaseChannel(java.lang.String)
//  .timeouts(GoogleGeminiReleaseChannelSettingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.releaseChannelSettingId">releaseChannelSettingId</a></code> | <code>java.lang.String</code> | Id of the Release Channel Setting. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#id GoogleGeminiReleaseChannelSetting#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#project GoogleGeminiReleaseChannelSetting#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.releaseChannel">releaseChannel</a></code> | <code>java.lang.String</code> | Release channel to be used. Possible values: STABLE EXPERIMENTAL. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts">GoogleGeminiReleaseChannelSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#location GoogleGeminiReleaseChannelSetting#location}

---

##### `releaseChannelSettingId`<sup>Required</sup> <a name="releaseChannelSettingId" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.releaseChannelSettingId"></a>

```java
public java.lang.String getReleaseChannelSettingId();
```

- *Type:* java.lang.String

Id of the Release Channel Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#release_channel_setting_id GoogleGeminiReleaseChannelSetting#release_channel_setting_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#id GoogleGeminiReleaseChannelSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#labels GoogleGeminiReleaseChannelSetting#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#project GoogleGeminiReleaseChannelSetting#project}.

---

##### `releaseChannel`<sup>Optional</sup> <a name="releaseChannel" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.releaseChannel"></a>

```java
public java.lang.String getReleaseChannel();
```

- *Type:* java.lang.String

Release channel to be used. Possible values: STABLE EXPERIMENTAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#release_channel GoogleGeminiReleaseChannelSetting#release_channel}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingConfig.property.timeouts"></a>

```java
public GoogleGeminiReleaseChannelSettingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts">GoogleGeminiReleaseChannelSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#timeouts GoogleGeminiReleaseChannelSetting#timeouts}

---

### GoogleGeminiReleaseChannelSettingTimeouts <a name="GoogleGeminiReleaseChannelSettingTimeouts" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_release_channel_setting.GoogleGeminiReleaseChannelSettingTimeouts;

GoogleGeminiReleaseChannelSettingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#create GoogleGeminiReleaseChannelSetting#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#delete GoogleGeminiReleaseChannelSetting#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#update GoogleGeminiReleaseChannelSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#create GoogleGeminiReleaseChannelSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#delete GoogleGeminiReleaseChannelSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_release_channel_setting#update GoogleGeminiReleaseChannelSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiReleaseChannelSettingTimeoutsOutputReference <a name="GoogleGeminiReleaseChannelSettingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_release_channel_setting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference;

new GoogleGeminiReleaseChannelSettingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts">GoogleGeminiReleaseChannelSettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiReleaseChannelSetting.GoogleGeminiReleaseChannelSettingTimeouts">GoogleGeminiReleaseChannelSettingTimeouts</a>

---



