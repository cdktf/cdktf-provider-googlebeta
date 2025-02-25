# `googleGeminiDataSharingWithGoogleSettingBinding` Submodule <a name="`googleGeminiDataSharingWithGoogleSettingBinding` Submodule" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiDataSharingWithGoogleSettingBinding <a name="GoogleGeminiDataSharingWithGoogleSettingBinding" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding google_gemini_data_sharing_with_google_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_data_sharing_with_google_setting_binding.GoogleGeminiDataSharingWithGoogleSettingBinding;

GoogleGeminiDataSharingWithGoogleSettingBinding.Builder.create(Construct scope, java.lang.String id)
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
    .dataSharingWithGoogleSettingId(java.lang.String)
    .settingBindingId(java.lang.String)
    .target(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .product(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.dataSharingWithGoogleSettingId">dataSharingWithGoogleSettingId</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.settingBindingId">settingBindingId</a></code> | <code>java.lang.String</code> | Required. Id of the setting binding. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | Target of the binding. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#id GoogleGeminiDataSharingWithGoogleSettingBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.product">product</a></code> | <code>java.lang.String</code> | Product type of the setting binding. Possible values: ["GEMINI_CLOUD_ASSIST", "GEMINI_CODE_ASSIST"]. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#project GoogleGeminiDataSharingWithGoogleSettingBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts">GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSharingWithGoogleSettingId`<sup>Required</sup> <a name="dataSharingWithGoogleSettingId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.dataSharingWithGoogleSettingId"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#data_sharing_with_google_setting_id GoogleGeminiDataSharingWithGoogleSettingBinding#data_sharing_with_google_setting_id}

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.settingBindingId"></a>

- *Type:* java.lang.String

Required. Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#setting_binding_id GoogleGeminiDataSharingWithGoogleSettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.target"></a>

- *Type:* java.lang.String

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#target GoogleGeminiDataSharingWithGoogleSettingBinding#target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#id GoogleGeminiDataSharingWithGoogleSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#labels GoogleGeminiDataSharingWithGoogleSettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#location GoogleGeminiDataSharingWithGoogleSettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.product"></a>

- *Type:* java.lang.String

Product type of the setting binding. Possible values: ["GEMINI_CLOUD_ASSIST", "GEMINI_CODE_ASSIST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#product GoogleGeminiDataSharingWithGoogleSettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#project GoogleGeminiDataSharingWithGoogleSettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts">GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#timeouts GoogleGeminiDataSharingWithGoogleSettingBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetProduct">resetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.putTimeouts"></a>

```java
public void putTimeouts(GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts">GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProduct` <a name="resetProduct" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetProduct"></a>

```java
public void resetProduct()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGeminiDataSharingWithGoogleSettingBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_data_sharing_with_google_setting_binding.GoogleGeminiDataSharingWithGoogleSettingBinding;

GoogleGeminiDataSharingWithGoogleSettingBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_data_sharing_with_google_setting_binding.GoogleGeminiDataSharingWithGoogleSettingBinding;

GoogleGeminiDataSharingWithGoogleSettingBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_data_sharing_with_google_setting_binding.GoogleGeminiDataSharingWithGoogleSettingBinding;

GoogleGeminiDataSharingWithGoogleSettingBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_data_sharing_with_google_setting_binding.GoogleGeminiDataSharingWithGoogleSettingBinding;

GoogleGeminiDataSharingWithGoogleSettingBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleGeminiDataSharingWithGoogleSettingBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleGeminiDataSharingWithGoogleSettingBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleGeminiDataSharingWithGoogleSettingBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleGeminiDataSharingWithGoogleSettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGeminiDataSharingWithGoogleSettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference">GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingIdInput">dataSharingWithGoogleSettingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.productInput">productInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.settingBindingIdInput">settingBindingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts">GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingId">dataSharingWithGoogleSettingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.product">product</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.settingBindingId">settingBindingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.timeouts"></a>

```java
public GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference">GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `dataSharingWithGoogleSettingIdInput`<sup>Optional</sup> <a name="dataSharingWithGoogleSettingIdInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingIdInput"></a>

```java
public java.lang.String getDataSharingWithGoogleSettingIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `productInput`<sup>Optional</sup> <a name="productInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.productInput"></a>

```java
public java.lang.String getProductInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `settingBindingIdInput`<sup>Optional</sup> <a name="settingBindingIdInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.settingBindingIdInput"></a>

```java
public java.lang.String getSettingBindingIdInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts">GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts</a>

---

##### `dataSharingWithGoogleSettingId`<sup>Required</sup> <a name="dataSharingWithGoogleSettingId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.dataSharingWithGoogleSettingId"></a>

```java
public java.lang.String getDataSharingWithGoogleSettingId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.settingBindingId"></a>

```java
public java.lang.String getSettingBindingId();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiDataSharingWithGoogleSettingBindingConfig <a name="GoogleGeminiDataSharingWithGoogleSettingBindingConfig" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_data_sharing_with_google_setting_binding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig;

GoogleGeminiDataSharingWithGoogleSettingBindingConfig.builder()
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
    .dataSharingWithGoogleSettingId(java.lang.String)
    .settingBindingId(java.lang.String)
    .target(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .product(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.dataSharingWithGoogleSettingId">dataSharingWithGoogleSettingId</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.settingBindingId">settingBindingId</a></code> | <code>java.lang.String</code> | Required. Id of the setting binding. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.target">target</a></code> | <code>java.lang.String</code> | Target of the binding. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#id GoogleGeminiDataSharingWithGoogleSettingBinding#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.product">product</a></code> | <code>java.lang.String</code> | Product type of the setting binding. Possible values: ["GEMINI_CLOUD_ASSIST", "GEMINI_CODE_ASSIST"]. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#project GoogleGeminiDataSharingWithGoogleSettingBinding#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts">GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSharingWithGoogleSettingId`<sup>Required</sup> <a name="dataSharingWithGoogleSettingId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.dataSharingWithGoogleSettingId"></a>

```java
public java.lang.String getDataSharingWithGoogleSettingId();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#data_sharing_with_google_setting_id GoogleGeminiDataSharingWithGoogleSettingBinding#data_sharing_with_google_setting_id}

---

##### `settingBindingId`<sup>Required</sup> <a name="settingBindingId" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.settingBindingId"></a>

```java
public java.lang.String getSettingBindingId();
```

- *Type:* java.lang.String

Required. Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#setting_binding_id GoogleGeminiDataSharingWithGoogleSettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#target GoogleGeminiDataSharingWithGoogleSettingBinding#target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#id GoogleGeminiDataSharingWithGoogleSettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#labels GoogleGeminiDataSharingWithGoogleSettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#location GoogleGeminiDataSharingWithGoogleSettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

Product type of the setting binding. Possible values: ["GEMINI_CLOUD_ASSIST", "GEMINI_CODE_ASSIST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#product GoogleGeminiDataSharingWithGoogleSettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#project GoogleGeminiDataSharingWithGoogleSettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingConfig.property.timeouts"></a>

```java
public GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts">GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#timeouts GoogleGeminiDataSharingWithGoogleSettingBinding#timeouts}

---

### GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts <a name="GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_data_sharing_with_google_setting_binding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts;

GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#create GoogleGeminiDataSharingWithGoogleSettingBinding#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#delete GoogleGeminiDataSharingWithGoogleSettingBinding#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#update GoogleGeminiDataSharingWithGoogleSettingBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#create GoogleGeminiDataSharingWithGoogleSettingBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#delete GoogleGeminiDataSharingWithGoogleSettingBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_gemini_data_sharing_with_google_setting_binding#update GoogleGeminiDataSharingWithGoogleSettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference <a name="GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_gemini_data_sharing_with_google_setting_binding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference;

new GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts">GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleGeminiDataSharingWithGoogleSettingBinding.GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts">GoogleGeminiDataSharingWithGoogleSettingBindingTimeouts</a>

---



