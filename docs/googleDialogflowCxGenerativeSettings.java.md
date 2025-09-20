# `googleDialogflowCxGenerativeSettings` Submodule <a name="`googleDialogflowCxGenerativeSettings` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxGenerativeSettings <a name="GoogleDialogflowCxGenerativeSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings google_dialogflow_cx_generative_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettings;

GoogleDialogflowCxGenerativeSettings.Builder.create(Construct scope, java.lang.String id)
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
    .languageCode(java.lang.String)
//  .fallbackSettings(GoogleDialogflowCxGenerativeSettingsFallbackSettings)
//  .generativeSafetySettings(GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings)
//  .id(java.lang.String)
//  .knowledgeConnectorSettings(GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings)
//  .llmModelSettings(GoogleDialogflowCxGenerativeSettingsLlmModelSettings)
//  .parent(java.lang.String)
//  .timeouts(GoogleDialogflowCxGenerativeSettingsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Language for this settings. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.fallbackSettings">fallbackSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a></code> | fallback_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.generativeSafetySettings">generativeSafetySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | generative_safety_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#id GoogleDialogflowCxGenerativeSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.knowledgeConnectorSettings">knowledgeConnectorSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | knowledge_connector_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.languageCode"></a>

- *Type:* java.lang.String

Language for this settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#language_code GoogleDialogflowCxGenerativeSettings#language_code}

---

##### `fallbackSettings`<sup>Optional</sup> <a name="fallbackSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.fallbackSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

fallback_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#fallback_settings GoogleDialogflowCxGenerativeSettings#fallback_settings}

---

##### `generativeSafetySettings`<sup>Optional</sup> <a name="generativeSafetySettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.generativeSafetySettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

generative_safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#generative_safety_settings GoogleDialogflowCxGenerativeSettings#generative_safety_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#id GoogleDialogflowCxGenerativeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `knowledgeConnectorSettings`<sup>Optional</sup> <a name="knowledgeConnectorSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.knowledgeConnectorSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

knowledge_connector_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#knowledge_connector_settings GoogleDialogflowCxGenerativeSettings#knowledge_connector_settings}

---

##### `llmModelSettings`<sup>Optional</sup> <a name="llmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.llmModelSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#llm_model_settings GoogleDialogflowCxGenerativeSettings#llm_model_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#parent GoogleDialogflowCxGenerativeSettings#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#timeouts GoogleDialogflowCxGenerativeSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putFallbackSettings">putFallbackSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putGenerativeSafetySettings">putGenerativeSafetySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings">putKnowledgeConnectorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putLlmModelSettings">putLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetFallbackSettings">resetFallbackSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetGenerativeSafetySettings">resetGenerativeSafetySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetKnowledgeConnectorSettings">resetKnowledgeConnectorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetLlmModelSettings">resetLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFallbackSettings` <a name="putFallbackSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putFallbackSettings"></a>

```java
public void putFallbackSettings(GoogleDialogflowCxGenerativeSettingsFallbackSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putFallbackSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

---

##### `putGenerativeSafetySettings` <a name="putGenerativeSafetySettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putGenerativeSafetySettings"></a>

```java
public void putGenerativeSafetySettings(GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putGenerativeSafetySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

---

##### `putKnowledgeConnectorSettings` <a name="putKnowledgeConnectorSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings"></a>

```java
public void putKnowledgeConnectorSettings(GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

---

##### `putLlmModelSettings` <a name="putLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putLlmModelSettings"></a>

```java
public void putLlmModelSettings(GoogleDialogflowCxGenerativeSettingsLlmModelSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putLlmModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putTimeouts"></a>

```java
public void putTimeouts(GoogleDialogflowCxGenerativeSettingsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>

---

##### `resetFallbackSettings` <a name="resetFallbackSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetFallbackSettings"></a>

```java
public void resetFallbackSettings()
```

##### `resetGenerativeSafetySettings` <a name="resetGenerativeSafetySettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetGenerativeSafetySettings"></a>

```java
public void resetGenerativeSafetySettings()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetId"></a>

```java
public void resetId()
```

##### `resetKnowledgeConnectorSettings` <a name="resetKnowledgeConnectorSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetKnowledgeConnectorSettings"></a>

```java
public void resetKnowledgeConnectorSettings()
```

##### `resetLlmModelSettings` <a name="resetLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetLlmModelSettings"></a>

```java
public void resetLlmModelSettings()
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetParent"></a>

```java
public void resetParent()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxGenerativeSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettings;

GoogleDialogflowCxGenerativeSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettings;

GoogleDialogflowCxGenerativeSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettings;

GoogleDialogflowCxGenerativeSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettings;

GoogleDialogflowCxGenerativeSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDialogflowCxGenerativeSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDialogflowCxGenerativeSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDialogflowCxGenerativeSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDialogflowCxGenerativeSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxGenerativeSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fallbackSettings">fallbackSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.generativeSafetySettings">generativeSafetySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.knowledgeConnectorSettings">knowledgeConnectorSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference">GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fallbackSettingsInput">fallbackSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.generativeSafetySettingsInput">generativeSafetySettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.knowledgeConnectorSettingsInput">knowledgeConnectorSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.llmModelSettingsInput">llmModelSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fallbackSettings`<sup>Required</sup> <a name="fallbackSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fallbackSettings"></a>

```java
public GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference getFallbackSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference</a>

---

##### `generativeSafetySettings`<sup>Required</sup> <a name="generativeSafetySettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.generativeSafetySettings"></a>

```java
public GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference getGenerativeSafetySettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference</a>

---

##### `knowledgeConnectorSettings`<sup>Required</sup> <a name="knowledgeConnectorSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.knowledgeConnectorSettings"></a>

```java
public GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference getKnowledgeConnectorSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference</a>

---

##### `llmModelSettings`<sup>Required</sup> <a name="llmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.llmModelSettings"></a>

```java
public GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference getLlmModelSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.timeouts"></a>

```java
public GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference">GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference</a>

---

##### `fallbackSettingsInput`<sup>Optional</sup> <a name="fallbackSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fallbackSettingsInput"></a>

```java
public GoogleDialogflowCxGenerativeSettingsFallbackSettings getFallbackSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

---

##### `generativeSafetySettingsInput`<sup>Optional</sup> <a name="generativeSafetySettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.generativeSafetySettingsInput"></a>

```java
public GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings getGenerativeSafetySettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `knowledgeConnectorSettingsInput`<sup>Optional</sup> <a name="knowledgeConnectorSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.knowledgeConnectorSettingsInput"></a>

```java
public GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings getKnowledgeConnectorSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `llmModelSettingsInput`<sup>Optional</sup> <a name="llmModelSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.llmModelSettingsInput"></a>

```java
public GoogleDialogflowCxGenerativeSettingsLlmModelSettings getLlmModelSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxGenerativeSettingsConfig <a name="GoogleDialogflowCxGenerativeSettingsConfig" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsConfig;

GoogleDialogflowCxGenerativeSettingsConfig.builder()
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
    .languageCode(java.lang.String)
//  .fallbackSettings(GoogleDialogflowCxGenerativeSettingsFallbackSettings)
//  .generativeSafetySettings(GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings)
//  .id(java.lang.String)
//  .knowledgeConnectorSettings(GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings)
//  .llmModelSettings(GoogleDialogflowCxGenerativeSettingsLlmModelSettings)
//  .parent(java.lang.String)
//  .timeouts(GoogleDialogflowCxGenerativeSettingsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Language for this settings. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.fallbackSettings">fallbackSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a></code> | fallback_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.generativeSafetySettings">generativeSafetySettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | generative_safety_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#id GoogleDialogflowCxGenerativeSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.knowledgeConnectorSettings">knowledgeConnectorSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | knowledge_connector_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

Language for this settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#language_code GoogleDialogflowCxGenerativeSettings#language_code}

---

##### `fallbackSettings`<sup>Optional</sup> <a name="fallbackSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.fallbackSettings"></a>

```java
public GoogleDialogflowCxGenerativeSettingsFallbackSettings getFallbackSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

fallback_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#fallback_settings GoogleDialogflowCxGenerativeSettings#fallback_settings}

---

##### `generativeSafetySettings`<sup>Optional</sup> <a name="generativeSafetySettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.generativeSafetySettings"></a>

```java
public GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings getGenerativeSafetySettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

generative_safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#generative_safety_settings GoogleDialogflowCxGenerativeSettings#generative_safety_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#id GoogleDialogflowCxGenerativeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `knowledgeConnectorSettings`<sup>Optional</sup> <a name="knowledgeConnectorSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.knowledgeConnectorSettings"></a>

```java
public GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings getKnowledgeConnectorSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

knowledge_connector_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#knowledge_connector_settings GoogleDialogflowCxGenerativeSettings#knowledge_connector_settings}

---

##### `llmModelSettings`<sup>Optional</sup> <a name="llmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.llmModelSettings"></a>

```java
public GoogleDialogflowCxGenerativeSettingsLlmModelSettings getLlmModelSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#llm_model_settings GoogleDialogflowCxGenerativeSettings#llm_model_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#parent GoogleDialogflowCxGenerativeSettings#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.timeouts"></a>

```java
public GoogleDialogflowCxGenerativeSettingsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#timeouts GoogleDialogflowCxGenerativeSettings#timeouts}

---

### GoogleDialogflowCxGenerativeSettingsFallbackSettings <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsFallbackSettings;

GoogleDialogflowCxGenerativeSettingsFallbackSettings.builder()
//  .promptTemplates(IResolvable)
//  .promptTemplates(java.util.List<GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates>)
//  .selectedPrompt(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.property.promptTemplates">promptTemplates</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>></code> | prompt_templates block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.property.selectedPrompt">selectedPrompt</a></code> | <code>java.lang.String</code> | Display name of the selected prompt. |

---

##### `promptTemplates`<sup>Optional</sup> <a name="promptTemplates" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.property.promptTemplates"></a>

```java
public java.lang.Object getPromptTemplates();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>>

prompt_templates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#prompt_templates GoogleDialogflowCxGenerativeSettings#prompt_templates}

---

##### `selectedPrompt`<sup>Optional</sup> <a name="selectedPrompt" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.property.selectedPrompt"></a>

```java
public java.lang.String getSelectedPrompt();
```

- *Type:* java.lang.String

Display name of the selected prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#selected_prompt GoogleDialogflowCxGenerativeSettings#selected_prompt}

---

### GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates;

GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.builder()
//  .displayName(java.lang.String)
//  .frozen(java.lang.Boolean)
//  .frozen(IResolvable)
//  .promptText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Prompt name. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.frozen">frozen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the flag is true, the prompt is frozen and cannot be modified by users. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.promptText">promptText</a></code> | <code>java.lang.String</code> | Prompt text that is sent to a LLM on no-match default, placeholders are filled downstream. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Prompt name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#display_name GoogleDialogflowCxGenerativeSettings#display_name}

---

##### `frozen`<sup>Optional</sup> <a name="frozen" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.frozen"></a>

```java
public java.lang.Object getFrozen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the flag is true, the prompt is frozen and cannot be modified by users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#frozen GoogleDialogflowCxGenerativeSettings#frozen}

---

##### `promptText`<sup>Optional</sup> <a name="promptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.promptText"></a>

```java
public java.lang.String getPromptText();
```

- *Type:* java.lang.String

Prompt text that is sent to a LLM on no-match default, placeholders are filled downstream.

For example: "Here is a conversation $conversation, a response is: "

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#prompt_text GoogleDialogflowCxGenerativeSettings#prompt_text}

---

### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings;

GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.builder()
//  .bannedPhrases(IResolvable)
//  .bannedPhrases(java.util.List<GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases>)
//  .defaultBannedPhraseMatchStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.property.bannedPhrases">bannedPhrases</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>></code> | banned_phrases block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.property.defaultBannedPhraseMatchStrategy">defaultBannedPhraseMatchStrategy</a></code> | <code>java.lang.String</code> | Optional. Default phrase match strategy for banned phrases. See [PhraseMatchStrategy](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/GenerativeSettings#phrasematchstrategy) for valid values. |

---

##### `bannedPhrases`<sup>Optional</sup> <a name="bannedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.property.bannedPhrases"></a>

```java
public java.lang.Object getBannedPhrases();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>>

banned_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#banned_phrases GoogleDialogflowCxGenerativeSettings#banned_phrases}

---

##### `defaultBannedPhraseMatchStrategy`<sup>Optional</sup> <a name="defaultBannedPhraseMatchStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.property.defaultBannedPhraseMatchStrategy"></a>

```java
public java.lang.String getDefaultBannedPhraseMatchStrategy();
```

- *Type:* java.lang.String

Optional. Default phrase match strategy for banned phrases. See [PhraseMatchStrategy](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/GenerativeSettings#phrasematchstrategy) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#default_banned_phrase_match_strategy GoogleDialogflowCxGenerativeSettings#default_banned_phrase_match_strategy}

---

### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases;

GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.builder()
    .languageCode(java.lang.String)
    .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Language code of the phrase. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.text">text</a></code> | <code>java.lang.String</code> | Text input which can be used for prompt or banned phrases. |

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

Language code of the phrase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#language_code GoogleDialogflowCxGenerativeSettings#language_code}

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Text input which can be used for prompt or banned phrases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#text GoogleDialogflowCxGenerativeSettings#text}

---

### GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings <a name="GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings;

GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.builder()
//  .agent(java.lang.String)
//  .agentIdentity(java.lang.String)
//  .agentScope(java.lang.String)
//  .business(java.lang.String)
//  .businessDescription(java.lang.String)
//  .disableDataStoreFallback(java.lang.Boolean)
//  .disableDataStoreFallback(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agent">agent</a></code> | <code>java.lang.String</code> | Name of the virtual agent. Used for LLM prompt. Can be left empty. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentIdentity">agentIdentity</a></code> | <code>java.lang.String</code> | Identity of the agent, e.g. "virtual agent", "AI assistant". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentScope">agentScope</a></code> | <code>java.lang.String</code> | Agent scope, e.g. "Example company website", "internal Example company website for employees", "manual of car owner". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.business">business</a></code> | <code>java.lang.String</code> | Name of the company, organization or other entity that the agent represents. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.businessDescription">businessDescription</a></code> | <code>java.lang.String</code> | Company description, used for LLM prompt, e.g. "a family company selling freshly roasted coffee beans".''. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.disableDataStoreFallback">disableDataStoreFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to disable fallback to Data Store search results (in case the LLM couldn't pick a proper answer). |

---

##### `agent`<sup>Optional</sup> <a name="agent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agent"></a>

```java
public java.lang.String getAgent();
```

- *Type:* java.lang.String

Name of the virtual agent. Used for LLM prompt. Can be left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#agent GoogleDialogflowCxGenerativeSettings#agent}

---

##### `agentIdentity`<sup>Optional</sup> <a name="agentIdentity" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentIdentity"></a>

```java
public java.lang.String getAgentIdentity();
```

- *Type:* java.lang.String

Identity of the agent, e.g. "virtual agent", "AI assistant".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#agent_identity GoogleDialogflowCxGenerativeSettings#agent_identity}

---

##### `agentScope`<sup>Optional</sup> <a name="agentScope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentScope"></a>

```java
public java.lang.String getAgentScope();
```

- *Type:* java.lang.String

Agent scope, e.g. "Example company website", "internal Example company website for employees", "manual of car owner".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#agent_scope GoogleDialogflowCxGenerativeSettings#agent_scope}

---

##### `business`<sup>Optional</sup> <a name="business" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.business"></a>

```java
public java.lang.String getBusiness();
```

- *Type:* java.lang.String

Name of the company, organization or other entity that the agent represents.

Used for knowledge connector LLM prompt and for knowledge search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#business GoogleDialogflowCxGenerativeSettings#business}

---

##### `businessDescription`<sup>Optional</sup> <a name="businessDescription" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.businessDescription"></a>

```java
public java.lang.String getBusinessDescription();
```

- *Type:* java.lang.String

Company description, used for LLM prompt, e.g. "a family company selling freshly roasted coffee beans".''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#business_description GoogleDialogflowCxGenerativeSettings#business_description}

---

##### `disableDataStoreFallback`<sup>Optional</sup> <a name="disableDataStoreFallback" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.disableDataStoreFallback"></a>

```java
public java.lang.Object getDisableDataStoreFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to disable fallback to Data Store search results (in case the LLM couldn't pick a proper answer).

Per default the feature is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#disable_data_store_fallback GoogleDialogflowCxGenerativeSettings#disable_data_store_fallback}

---

### GoogleDialogflowCxGenerativeSettingsLlmModelSettings <a name="GoogleDialogflowCxGenerativeSettingsLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings;

GoogleDialogflowCxGenerativeSettingsLlmModelSettings.builder()
//  .model(java.lang.String)
//  .promptText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.property.model">model</a></code> | <code>java.lang.String</code> | The selected LLM model. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.property.promptText">promptText</a></code> | <code>java.lang.String</code> | The custom prompt to use. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#model GoogleDialogflowCxGenerativeSettings#model}

---

##### `promptText`<sup>Optional</sup> <a name="promptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.property.promptText"></a>

```java
public java.lang.String getPromptText();
```

- *Type:* java.lang.String

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#prompt_text GoogleDialogflowCxGenerativeSettings#prompt_text}

---

### GoogleDialogflowCxGenerativeSettingsTimeouts <a name="GoogleDialogflowCxGenerativeSettingsTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsTimeouts;

GoogleDialogflowCxGenerativeSettingsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#create GoogleDialogflowCxGenerativeSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#delete GoogleDialogflowCxGenerativeSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#update GoogleDialogflowCxGenerativeSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#create GoogleDialogflowCxGenerativeSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#delete GoogleDialogflowCxGenerativeSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_dialogflow_cx_generative_settings#update GoogleDialogflowCxGenerativeSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference;

new GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.putPromptTemplates">putPromptTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetPromptTemplates">resetPromptTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetSelectedPrompt">resetSelectedPrompt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPromptTemplates` <a name="putPromptTemplates" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.putPromptTemplates"></a>

```java
public void putPromptTemplates(IResolvable OR java.util.List<GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.putPromptTemplates.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>>

---

##### `resetPromptTemplates` <a name="resetPromptTemplates" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetPromptTemplates"></a>

```java
public void resetPromptTemplates()
```

##### `resetSelectedPrompt` <a name="resetSelectedPrompt" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetSelectedPrompt"></a>

```java
public void resetSelectedPrompt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplates">promptTemplates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplatesInput">promptTemplatesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPromptInput">selectedPromptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPrompt">selectedPrompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `promptTemplates`<sup>Required</sup> <a name="promptTemplates" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplates"></a>

```java
public GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList getPromptTemplates();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList</a>

---

##### `promptTemplatesInput`<sup>Optional</sup> <a name="promptTemplatesInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplatesInput"></a>

```java
public java.lang.Object getPromptTemplatesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>>

---

##### `selectedPromptInput`<sup>Optional</sup> <a name="selectedPromptInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPromptInput"></a>

```java
public java.lang.String getSelectedPromptInput();
```

- *Type:* java.lang.String

---

##### `selectedPrompt`<sup>Required</sup> <a name="selectedPrompt" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPrompt"></a>

```java
public java.lang.String getSelectedPrompt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxGenerativeSettingsFallbackSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

---


### GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList;

new GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.get"></a>

```java
public GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>>

---


### GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference;

new GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetFrozen">resetFrozen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetPromptText">resetPromptText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFrozen` <a name="resetFrozen" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetFrozen"></a>

```java
public void resetFrozen()
```

##### `resetPromptText` <a name="resetPromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetPromptText"></a>

```java
public void resetPromptText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozenInput">frozenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptTextInput">promptTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozen">frozen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptText">promptText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `frozenInput`<sup>Optional</sup> <a name="frozenInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozenInput"></a>

```java
public java.lang.Object getFrozenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `promptTextInput`<sup>Optional</sup> <a name="promptTextInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptTextInput"></a>

```java
public java.lang.String getPromptTextInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `frozen`<sup>Required</sup> <a name="frozen" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozen"></a>

```java
public java.lang.Object getFrozen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptText"></a>

```java
public java.lang.String getPromptText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>

---


### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList;

new GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.get"></a>

```java
public GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>>

---


### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference;

new GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>

---


### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference;

new GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.putBannedPhrases">putBannedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetBannedPhrases">resetBannedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetDefaultBannedPhraseMatchStrategy">resetDefaultBannedPhraseMatchStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBannedPhrases` <a name="putBannedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.putBannedPhrases"></a>

```java
public void putBannedPhrases(IResolvable OR java.util.List<GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.putBannedPhrases.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>>

---

##### `resetBannedPhrases` <a name="resetBannedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetBannedPhrases"></a>

```java
public void resetBannedPhrases()
```

##### `resetDefaultBannedPhraseMatchStrategy` <a name="resetDefaultBannedPhraseMatchStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetDefaultBannedPhraseMatchStrategy"></a>

```java
public void resetDefaultBannedPhraseMatchStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrases">bannedPhrases</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrasesInput">bannedPhrasesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategyInput">defaultBannedPhraseMatchStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategy">defaultBannedPhraseMatchStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bannedPhrases`<sup>Required</sup> <a name="bannedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrases"></a>

```java
public GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList getBannedPhrases();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList</a>

---

##### `bannedPhrasesInput`<sup>Optional</sup> <a name="bannedPhrasesInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrasesInput"></a>

```java
public java.lang.Object getBannedPhrasesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>>

---

##### `defaultBannedPhraseMatchStrategyInput`<sup>Optional</sup> <a name="defaultBannedPhraseMatchStrategyInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategyInput"></a>

```java
public java.lang.String getDefaultBannedPhraseMatchStrategyInput();
```

- *Type:* java.lang.String

---

##### `defaultBannedPhraseMatchStrategy`<sup>Required</sup> <a name="defaultBannedPhraseMatchStrategy" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategy"></a>

```java
public java.lang.String getDefaultBannedPhraseMatchStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

---


### GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference;

new GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgent">resetAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentIdentity">resetAgentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentScope">resetAgentScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusiness">resetBusiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusinessDescription">resetBusinessDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetDisableDataStoreFallback">resetDisableDataStoreFallback</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgent` <a name="resetAgent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgent"></a>

```java
public void resetAgent()
```

##### `resetAgentIdentity` <a name="resetAgentIdentity" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentIdentity"></a>

```java
public void resetAgentIdentity()
```

##### `resetAgentScope` <a name="resetAgentScope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentScope"></a>

```java
public void resetAgentScope()
```

##### `resetBusiness` <a name="resetBusiness" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusiness"></a>

```java
public void resetBusiness()
```

##### `resetBusinessDescription` <a name="resetBusinessDescription" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusinessDescription"></a>

```java
public void resetBusinessDescription()
```

##### `resetDisableDataStoreFallback` <a name="resetDisableDataStoreFallback" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetDisableDataStoreFallback"></a>

```java
public void resetDisableDataStoreFallback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentityInput">agentIdentityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentInput">agentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScopeInput">agentScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescriptionInput">businessDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessInput">businessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallbackInput">disableDataStoreFallbackInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agent">agent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentity">agentIdentity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScope">agentScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.business">business</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescription">businessDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallback">disableDataStoreFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentIdentityInput`<sup>Optional</sup> <a name="agentIdentityInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentityInput"></a>

```java
public java.lang.String getAgentIdentityInput();
```

- *Type:* java.lang.String

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentInput"></a>

```java
public java.lang.String getAgentInput();
```

- *Type:* java.lang.String

---

##### `agentScopeInput`<sup>Optional</sup> <a name="agentScopeInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScopeInput"></a>

```java
public java.lang.String getAgentScopeInput();
```

- *Type:* java.lang.String

---

##### `businessDescriptionInput`<sup>Optional</sup> <a name="businessDescriptionInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescriptionInput"></a>

```java
public java.lang.String getBusinessDescriptionInput();
```

- *Type:* java.lang.String

---

##### `businessInput`<sup>Optional</sup> <a name="businessInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessInput"></a>

```java
public java.lang.String getBusinessInput();
```

- *Type:* java.lang.String

---

##### `disableDataStoreFallbackInput`<sup>Optional</sup> <a name="disableDataStoreFallbackInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallbackInput"></a>

```java
public java.lang.Object getDisableDataStoreFallbackInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agent"></a>

```java
public java.lang.String getAgent();
```

- *Type:* java.lang.String

---

##### `agentIdentity`<sup>Required</sup> <a name="agentIdentity" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentity"></a>

```java
public java.lang.String getAgentIdentity();
```

- *Type:* java.lang.String

---

##### `agentScope`<sup>Required</sup> <a name="agentScope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScope"></a>

```java
public java.lang.String getAgentScope();
```

- *Type:* java.lang.String

---

##### `business`<sup>Required</sup> <a name="business" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.business"></a>

```java
public java.lang.String getBusiness();
```

- *Type:* java.lang.String

---

##### `businessDescription`<sup>Required</sup> <a name="businessDescription" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescription"></a>

```java
public java.lang.String getBusinessDescription();
```

- *Type:* java.lang.String

---

##### `disableDataStoreFallback`<sup>Required</sup> <a name="disableDataStoreFallback" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallback"></a>

```java
public java.lang.Object getDisableDataStoreFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

---


### GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference;

new GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetPromptText">resetPromptText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetPromptText` <a name="resetPromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetPromptText"></a>

```java
public void resetPromptText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptTextInput">promptTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptText">promptText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `promptTextInput`<sup>Optional</sup> <a name="promptTextInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptTextInput"></a>

```java
public java.lang.String getPromptTextInput();
```

- *Type:* java.lang.String

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptText"></a>

```java
public java.lang.String getPromptText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxGenerativeSettingsLlmModelSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

---


### GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generative_settings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference;

new GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>

---



