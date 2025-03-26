# `googleGeminiGeminiGcpEnablementSetting` Submodule <a name="`googleGeminiGeminiGcpEnablementSetting` Submodule" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiGeminiGcpEnablementSetting <a name="GoogleGeminiGeminiGcpEnablementSetting" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting google_gemini_gemini_gcp_enablement_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_gemini_gcp_enablement_setting.GoogleGeminiGeminiGcpEnablementSetting;

GoogleGeminiGeminiGcpEnablementSetting.Builder.create(Construct scope, java.lang.String id)
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
    .geminiGcpEnablementSettingId(java.lang.String)
    .location(java.lang.String)
//  .enableCustomerDataSharing(java.lang.Boolean)
//  .enableCustomerDataSharing(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleGeminiGeminiGcpEnablementSettingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.geminiGcpEnablementSettingId">geminiGcpEnablementSettingId</a></code> | <code>java.lang.String</code> | Id of the Gemini Gcp Enablement setting. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.enableCustomerDataSharing">enableCustomerDataSharing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether customer data sharing should be enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#id GoogleGeminiGeminiGcpEnablementSetting#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#project GoogleGeminiGeminiGcpEnablementSetting#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts">GoogleGeminiGeminiGcpEnablementSettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `geminiGcpEnablementSettingId`<sup>Required</sup> <a name="geminiGcpEnablementSettingId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.geminiGcpEnablementSettingId"></a>

- *Type:* java.lang.String

Id of the Gemini Gcp Enablement setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#gemini_gcp_enablement_setting_id GoogleGeminiGeminiGcpEnablementSetting#gemini_gcp_enablement_setting_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#location GoogleGeminiGeminiGcpEnablementSetting#location}

---

##### `enableCustomerDataSharing`<sup>Optional</sup> <a name="enableCustomerDataSharing" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.enableCustomerDataSharing"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether customer data sharing should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#enable_customer_data_sharing GoogleGeminiGeminiGcpEnablementSetting#enable_customer_data_sharing}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#id GoogleGeminiGeminiGcpEnablementSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#labels GoogleGeminiGeminiGcpEnablementSetting#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#project GoogleGeminiGeminiGcpEnablementSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts">GoogleGeminiGeminiGcpEnablementSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#timeouts GoogleGeminiGeminiGcpEnablementSetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetEnableCustomerDataSharing">resetEnableCustomerDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.putTimeouts"></a>

```java
public void putTimeouts(GoogleGeminiGeminiGcpEnablementSettingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts">GoogleGeminiGeminiGcpEnablementSettingTimeouts</a>

---

##### `resetEnableCustomerDataSharing` <a name="resetEnableCustomerDataSharing" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetEnableCustomerDataSharing"></a>

```java
public void resetEnableCustomerDataSharing()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGeminiGeminiGcpEnablementSetting resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_gemini_gcp_enablement_setting.GoogleGeminiGeminiGcpEnablementSetting;

GoogleGeminiGeminiGcpEnablementSetting.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_gemini_gcp_enablement_setting.GoogleGeminiGeminiGcpEnablementSetting;

GoogleGeminiGeminiGcpEnablementSetting.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_gemini_gcp_enablement_setting.GoogleGeminiGeminiGcpEnablementSetting;

GoogleGeminiGeminiGcpEnablementSetting.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_gemini_gcp_enablement_setting.GoogleGeminiGeminiGcpEnablementSetting;

GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleGeminiGeminiGcpEnablementSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleGeminiGeminiGcpEnablementSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleGeminiGeminiGcpEnablementSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGeminiGeminiGcpEnablementSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference">GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharingInput">enableCustomerDataSharingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingIdInput">geminiGcpEnablementSettingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts">GoogleGeminiGeminiGcpEnablementSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharing">enableCustomerDataSharing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingId">geminiGcpEnablementSettingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.timeouts"></a>

```java
public GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference">GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `enableCustomerDataSharingInput`<sup>Optional</sup> <a name="enableCustomerDataSharingInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharingInput"></a>

```java
public java.lang.Object getEnableCustomerDataSharingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `geminiGcpEnablementSettingIdInput`<sup>Optional</sup> <a name="geminiGcpEnablementSettingIdInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingIdInput"></a>

```java
public java.lang.String getGeminiGcpEnablementSettingIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts">GoogleGeminiGeminiGcpEnablementSettingTimeouts</a>

---

##### `enableCustomerDataSharing`<sup>Required</sup> <a name="enableCustomerDataSharing" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharing"></a>

```java
public java.lang.Object getEnableCustomerDataSharing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `geminiGcpEnablementSettingId`<sup>Required</sup> <a name="geminiGcpEnablementSettingId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingId"></a>

```java
public java.lang.String getGeminiGcpEnablementSettingId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSetting.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiGeminiGcpEnablementSettingConfig <a name="GoogleGeminiGeminiGcpEnablementSettingConfig" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_gemini_gcp_enablement_setting.GoogleGeminiGeminiGcpEnablementSettingConfig;

GoogleGeminiGeminiGcpEnablementSettingConfig.builder()
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
    .geminiGcpEnablementSettingId(java.lang.String)
    .location(java.lang.String)
//  .enableCustomerDataSharing(java.lang.Boolean)
//  .enableCustomerDataSharing(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleGeminiGeminiGcpEnablementSettingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.geminiGcpEnablementSettingId">geminiGcpEnablementSettingId</a></code> | <code>java.lang.String</code> | Id of the Gemini Gcp Enablement setting. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.enableCustomerDataSharing">enableCustomerDataSharing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether customer data sharing should be enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#id GoogleGeminiGeminiGcpEnablementSetting#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#project GoogleGeminiGeminiGcpEnablementSetting#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts">GoogleGeminiGeminiGcpEnablementSettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `geminiGcpEnablementSettingId`<sup>Required</sup> <a name="geminiGcpEnablementSettingId" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.geminiGcpEnablementSettingId"></a>

```java
public java.lang.String getGeminiGcpEnablementSettingId();
```

- *Type:* java.lang.String

Id of the Gemini Gcp Enablement setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#gemini_gcp_enablement_setting_id GoogleGeminiGeminiGcpEnablementSetting#gemini_gcp_enablement_setting_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#location GoogleGeminiGeminiGcpEnablementSetting#location}

---

##### `enableCustomerDataSharing`<sup>Optional</sup> <a name="enableCustomerDataSharing" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.enableCustomerDataSharing"></a>

```java
public java.lang.Object getEnableCustomerDataSharing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether customer data sharing should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#enable_customer_data_sharing GoogleGeminiGeminiGcpEnablementSetting#enable_customer_data_sharing}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#id GoogleGeminiGeminiGcpEnablementSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#labels GoogleGeminiGeminiGcpEnablementSetting#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#project GoogleGeminiGeminiGcpEnablementSetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingConfig.property.timeouts"></a>

```java
public GoogleGeminiGeminiGcpEnablementSettingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts">GoogleGeminiGeminiGcpEnablementSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#timeouts GoogleGeminiGeminiGcpEnablementSetting#timeouts}

---

### GoogleGeminiGeminiGcpEnablementSettingTimeouts <a name="GoogleGeminiGeminiGcpEnablementSettingTimeouts" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_gemini_gcp_enablement_setting.GoogleGeminiGeminiGcpEnablementSettingTimeouts;

GoogleGeminiGeminiGcpEnablementSettingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#create GoogleGeminiGeminiGcpEnablementSetting#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#delete GoogleGeminiGeminiGcpEnablementSetting#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#update GoogleGeminiGeminiGcpEnablementSetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#create GoogleGeminiGeminiGcpEnablementSetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#delete GoogleGeminiGeminiGcpEnablementSetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_gemini_gemini_gcp_enablement_setting#update GoogleGeminiGeminiGcpEnablementSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference <a name="GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_gemini_gcp_enablement_setting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference;

new GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts">GoogleGeminiGeminiGcpEnablementSettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiGeminiGcpEnablementSetting.GoogleGeminiGeminiGcpEnablementSettingTimeouts">GoogleGeminiGeminiGcpEnablementSettingTimeouts</a>

---



