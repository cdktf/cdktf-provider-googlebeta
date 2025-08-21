# `googleDialogflowCxGenerator` Submodule <a name="`googleDialogflowCxGenerator` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxGenerator <a name="GoogleDialogflowCxGenerator" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator google_dialogflow_cx_generator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGenerator;

GoogleDialogflowCxGenerator.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .promptText(GoogleDialogflowCxGeneratorPromptText)
//  .id(java.lang.String)
//  .languageCode(java.lang.String)
//  .llmModelSettings(GoogleDialogflowCxGeneratorLlmModelSettings)
//  .modelParameter(GoogleDialogflowCxGeneratorModelParameter)
//  .parent(java.lang.String)
//  .placeholders(IResolvable)
//  .placeholders(java.util.List<GoogleDialogflowCxGeneratorPlaceholders>)
//  .timeouts(GoogleDialogflowCxGeneratorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the generator, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.promptText">promptText</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText">GoogleDialogflowCxGeneratorPromptText</a></code> | prompt_text block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#id GoogleDialogflowCxGenerator#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language to create generators for the following fields: * Generator.prompt_text.text If not specified, the agent's default language is used. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings">GoogleDialogflowCxGeneratorLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.modelParameter">modelParameter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter">GoogleDialogflowCxGeneratorModelParameter</a></code> | model_parameter block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create a Generator for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.placeholders">placeholders</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders">GoogleDialogflowCxGeneratorPlaceholders</a>></code> | placeholders block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts">GoogleDialogflowCxGeneratorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human-readable name of the generator, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#display_name GoogleDialogflowCxGenerator#display_name}

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.promptText"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText">GoogleDialogflowCxGeneratorPromptText</a>

prompt_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#prompt_text GoogleDialogflowCxGenerator#prompt_text}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#id GoogleDialogflowCxGenerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.languageCode"></a>

- *Type:* java.lang.String

The language to create generators for the following fields: * Generator.prompt_text.text If not specified, the agent's default language is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#language_code GoogleDialogflowCxGenerator#language_code}

---

##### `llmModelSettings`<sup>Optional</sup> <a name="llmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.llmModelSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings">GoogleDialogflowCxGeneratorLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#llm_model_settings GoogleDialogflowCxGenerator#llm_model_settings}

---

##### `modelParameter`<sup>Optional</sup> <a name="modelParameter" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.modelParameter"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter">GoogleDialogflowCxGeneratorModelParameter</a>

model_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#model_parameter GoogleDialogflowCxGenerator#model_parameter}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The agent to create a Generator for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#parent GoogleDialogflowCxGenerator#parent}

---

##### `placeholders`<sup>Optional</sup> <a name="placeholders" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.placeholders"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders">GoogleDialogflowCxGeneratorPlaceholders</a>>

placeholders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#placeholders GoogleDialogflowCxGenerator#placeholders}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts">GoogleDialogflowCxGeneratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#timeouts GoogleDialogflowCxGenerator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putLlmModelSettings">putLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putModelParameter">putModelParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putPlaceholders">putPlaceholders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putPromptText">putPromptText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetLlmModelSettings">resetLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetModelParameter">resetModelParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetPlaceholders">resetPlaceholders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLlmModelSettings` <a name="putLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putLlmModelSettings"></a>

```java
public void putLlmModelSettings(GoogleDialogflowCxGeneratorLlmModelSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putLlmModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings">GoogleDialogflowCxGeneratorLlmModelSettings</a>

---

##### `putModelParameter` <a name="putModelParameter" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putModelParameter"></a>

```java
public void putModelParameter(GoogleDialogflowCxGeneratorModelParameter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putModelParameter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter">GoogleDialogflowCxGeneratorModelParameter</a>

---

##### `putPlaceholders` <a name="putPlaceholders" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putPlaceholders"></a>

```java
public void putPlaceholders(IResolvable OR java.util.List<GoogleDialogflowCxGeneratorPlaceholders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putPlaceholders.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders">GoogleDialogflowCxGeneratorPlaceholders</a>>

---

##### `putPromptText` <a name="putPromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putPromptText"></a>

```java
public void putPromptText(GoogleDialogflowCxGeneratorPromptText value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putPromptText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText">GoogleDialogflowCxGeneratorPromptText</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putTimeouts"></a>

```java
public void putTimeouts(GoogleDialogflowCxGeneratorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts">GoogleDialogflowCxGeneratorTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetId"></a>

```java
public void resetId()
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetLanguageCode"></a>

```java
public void resetLanguageCode()
```

##### `resetLlmModelSettings` <a name="resetLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetLlmModelSettings"></a>

```java
public void resetLlmModelSettings()
```

##### `resetModelParameter` <a name="resetModelParameter" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetModelParameter"></a>

```java
public void resetModelParameter()
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetParent"></a>

```java
public void resetParent()
```

##### `resetPlaceholders` <a name="resetPlaceholders" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetPlaceholders"></a>

```java
public void resetPlaceholders()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxGenerator resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGenerator;

GoogleDialogflowCxGenerator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGenerator;

GoogleDialogflowCxGenerator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGenerator;

GoogleDialogflowCxGenerator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGenerator;

GoogleDialogflowCxGenerator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDialogflowCxGenerator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDialogflowCxGenerator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDialogflowCxGenerator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDialogflowCxGenerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxGenerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference">GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.modelParameter">modelParameter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference">GoogleDialogflowCxGeneratorModelParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.placeholders">placeholders</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList">GoogleDialogflowCxGeneratorPlaceholdersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.promptText">promptText</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference">GoogleDialogflowCxGeneratorPromptTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference">GoogleDialogflowCxGeneratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.llmModelSettingsInput">llmModelSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings">GoogleDialogflowCxGeneratorLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.modelParameterInput">modelParameterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter">GoogleDialogflowCxGeneratorModelParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.placeholdersInput">placeholdersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders">GoogleDialogflowCxGeneratorPlaceholders</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.promptTextInput">promptTextInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText">GoogleDialogflowCxGeneratorPromptText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts">GoogleDialogflowCxGeneratorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `llmModelSettings`<sup>Required</sup> <a name="llmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.llmModelSettings"></a>

```java
public GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference getLlmModelSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference">GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference</a>

---

##### `modelParameter`<sup>Required</sup> <a name="modelParameter" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.modelParameter"></a>

```java
public GoogleDialogflowCxGeneratorModelParameterOutputReference getModelParameter();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference">GoogleDialogflowCxGeneratorModelParameterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `placeholders`<sup>Required</sup> <a name="placeholders" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.placeholders"></a>

```java
public GoogleDialogflowCxGeneratorPlaceholdersList getPlaceholders();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList">GoogleDialogflowCxGeneratorPlaceholdersList</a>

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.promptText"></a>

```java
public GoogleDialogflowCxGeneratorPromptTextOutputReference getPromptText();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference">GoogleDialogflowCxGeneratorPromptTextOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.timeouts"></a>

```java
public GoogleDialogflowCxGeneratorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference">GoogleDialogflowCxGeneratorTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `llmModelSettingsInput`<sup>Optional</sup> <a name="llmModelSettingsInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.llmModelSettingsInput"></a>

```java
public GoogleDialogflowCxGeneratorLlmModelSettings getLlmModelSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings">GoogleDialogflowCxGeneratorLlmModelSettings</a>

---

##### `modelParameterInput`<sup>Optional</sup> <a name="modelParameterInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.modelParameterInput"></a>

```java
public GoogleDialogflowCxGeneratorModelParameter getModelParameterInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter">GoogleDialogflowCxGeneratorModelParameter</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `placeholdersInput`<sup>Optional</sup> <a name="placeholdersInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.placeholdersInput"></a>

```java
public java.lang.Object getPlaceholdersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders">GoogleDialogflowCxGeneratorPlaceholders</a>>

---

##### `promptTextInput`<sup>Optional</sup> <a name="promptTextInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.promptTextInput"></a>

```java
public GoogleDialogflowCxGeneratorPromptText getPromptTextInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText">GoogleDialogflowCxGeneratorPromptText</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts">GoogleDialogflowCxGeneratorTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGenerator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxGeneratorConfig <a name="GoogleDialogflowCxGeneratorConfig" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGeneratorConfig;

GoogleDialogflowCxGeneratorConfig.builder()
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
    .displayName(java.lang.String)
    .promptText(GoogleDialogflowCxGeneratorPromptText)
//  .id(java.lang.String)
//  .languageCode(java.lang.String)
//  .llmModelSettings(GoogleDialogflowCxGeneratorLlmModelSettings)
//  .modelParameter(GoogleDialogflowCxGeneratorModelParameter)
//  .parent(java.lang.String)
//  .placeholders(IResolvable)
//  .placeholders(java.util.List<GoogleDialogflowCxGeneratorPlaceholders>)
//  .timeouts(GoogleDialogflowCxGeneratorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the generator, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.promptText">promptText</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText">GoogleDialogflowCxGeneratorPromptText</a></code> | prompt_text block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#id GoogleDialogflowCxGenerator#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language to create generators for the following fields: * Generator.prompt_text.text If not specified, the agent's default language is used. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings">GoogleDialogflowCxGeneratorLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.modelParameter">modelParameter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter">GoogleDialogflowCxGeneratorModelParameter</a></code> | model_parameter block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create a Generator for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.placeholders">placeholders</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders">GoogleDialogflowCxGeneratorPlaceholders</a>></code> | placeholders block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts">GoogleDialogflowCxGeneratorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable name of the generator, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#display_name GoogleDialogflowCxGenerator#display_name}

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.promptText"></a>

```java
public GoogleDialogflowCxGeneratorPromptText getPromptText();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText">GoogleDialogflowCxGeneratorPromptText</a>

prompt_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#prompt_text GoogleDialogflowCxGenerator#prompt_text}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#id GoogleDialogflowCxGenerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

The language to create generators for the following fields: * Generator.prompt_text.text If not specified, the agent's default language is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#language_code GoogleDialogflowCxGenerator#language_code}

---

##### `llmModelSettings`<sup>Optional</sup> <a name="llmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.llmModelSettings"></a>

```java
public GoogleDialogflowCxGeneratorLlmModelSettings getLlmModelSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings">GoogleDialogflowCxGeneratorLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#llm_model_settings GoogleDialogflowCxGenerator#llm_model_settings}

---

##### `modelParameter`<sup>Optional</sup> <a name="modelParameter" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.modelParameter"></a>

```java
public GoogleDialogflowCxGeneratorModelParameter getModelParameter();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter">GoogleDialogflowCxGeneratorModelParameter</a>

model_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#model_parameter GoogleDialogflowCxGenerator#model_parameter}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The agent to create a Generator for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#parent GoogleDialogflowCxGenerator#parent}

---

##### `placeholders`<sup>Optional</sup> <a name="placeholders" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.placeholders"></a>

```java
public java.lang.Object getPlaceholders();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders">GoogleDialogflowCxGeneratorPlaceholders</a>>

placeholders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#placeholders GoogleDialogflowCxGenerator#placeholders}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorConfig.property.timeouts"></a>

```java
public GoogleDialogflowCxGeneratorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts">GoogleDialogflowCxGeneratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#timeouts GoogleDialogflowCxGenerator#timeouts}

---

### GoogleDialogflowCxGeneratorLlmModelSettings <a name="GoogleDialogflowCxGeneratorLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGeneratorLlmModelSettings;

GoogleDialogflowCxGeneratorLlmModelSettings.builder()
//  .model(java.lang.String)
//  .promptText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings.property.model">model</a></code> | <code>java.lang.String</code> | The selected LLM model. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings.property.promptText">promptText</a></code> | <code>java.lang.String</code> | The custom prompt to use. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#model GoogleDialogflowCxGenerator#model}

---

##### `promptText`<sup>Optional</sup> <a name="promptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings.property.promptText"></a>

```java
public java.lang.String getPromptText();
```

- *Type:* java.lang.String

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#prompt_text GoogleDialogflowCxGenerator#prompt_text}

---

### GoogleDialogflowCxGeneratorModelParameter <a name="GoogleDialogflowCxGeneratorModelParameter" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGeneratorModelParameter;

GoogleDialogflowCxGeneratorModelParameter.builder()
//  .maxDecodeSteps(java.lang.Number)
//  .temperature(java.lang.Number)
//  .topK(java.lang.Number)
//  .topP(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.property.maxDecodeSteps">maxDecodeSteps</a></code> | <code>java.lang.Number</code> | The maximum number of tokens to generate. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | The temperature used for sampling. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.property.topK">topK</a></code> | <code>java.lang.Number</code> | If set, the sampling process in each step is limited to the topK tokens with highest probabilities. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.property.topP">topP</a></code> | <code>java.lang.Number</code> | If set, only the tokens comprising the top topP probability mass are considered. |

---

##### `maxDecodeSteps`<sup>Optional</sup> <a name="maxDecodeSteps" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.property.maxDecodeSteps"></a>

```java
public java.lang.Number getMaxDecodeSteps();
```

- *Type:* java.lang.Number

The maximum number of tokens to generate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#max_decode_steps GoogleDialogflowCxGenerator#max_decode_steps}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

The temperature used for sampling.

Temperature sampling occurs after both topP and topK have been applied.
Valid range: [0.0, 1.0] Low temperature = less random. High temperature = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#temperature GoogleDialogflowCxGenerator#temperature}

---

##### `topK`<sup>Optional</sup> <a name="topK" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.property.topK"></a>

```java
public java.lang.Number getTopK();
```

- *Type:* java.lang.Number

If set, the sampling process in each step is limited to the topK tokens with highest probabilities.

Valid range: [1, 40] or 1000+. Small topK = less random. Large topK = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#top_k GoogleDialogflowCxGenerator#top_k}

---

##### `topP`<sup>Optional</sup> <a name="topP" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

If set, only the tokens comprising the top topP probability mass are considered.

If both topP and topK are set, topP will be used for further refining candidates selected with topK.
Valid range: (0.0, 1.0]. Small topP = less random. Large topP = more random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#top_p GoogleDialogflowCxGenerator#top_p}

---

### GoogleDialogflowCxGeneratorPlaceholders <a name="GoogleDialogflowCxGeneratorPlaceholders" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGeneratorPlaceholders;

GoogleDialogflowCxGeneratorPlaceholders.builder()
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders.property.id">id</a></code> | <code>java.lang.String</code> | Unique ID used to map custom placeholder to parameters in fulfillment. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders.property.name">name</a></code> | <code>java.lang.String</code> | Custom placeholder value in the prompt text. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique ID used to map custom placeholder to parameters in fulfillment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#id GoogleDialogflowCxGenerator#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Custom placeholder value in the prompt text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#name GoogleDialogflowCxGenerator#name}

---

### GoogleDialogflowCxGeneratorPromptText <a name="GoogleDialogflowCxGeneratorPromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGeneratorPromptText;

GoogleDialogflowCxGeneratorPromptText.builder()
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText.property.text">text</a></code> | <code>java.lang.String</code> | Text input which can be used for prompt or banned phrases. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Text input which can be used for prompt or banned phrases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#text GoogleDialogflowCxGenerator#text}

---

### GoogleDialogflowCxGeneratorTimeouts <a name="GoogleDialogflowCxGeneratorTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGeneratorTimeouts;

GoogleDialogflowCxGeneratorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#create GoogleDialogflowCxGenerator#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#delete GoogleDialogflowCxGenerator#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#update GoogleDialogflowCxGenerator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#create GoogleDialogflowCxGenerator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#delete GoogleDialogflowCxGenerator#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dialogflow_cx_generator#update GoogleDialogflowCxGenerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference <a name="GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference;

new GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.resetPromptText">resetPromptText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetPromptText` <a name="resetPromptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.resetPromptText"></a>

```java
public void resetPromptText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptTextInput">promptTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptText">promptText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings">GoogleDialogflowCxGeneratorLlmModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `promptTextInput`<sup>Optional</sup> <a name="promptTextInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptTextInput"></a>

```java
public java.lang.String getPromptTextInput();
```

- *Type:* java.lang.String

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.promptText"></a>

```java
public java.lang.String getPromptText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettingsOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxGeneratorLlmModelSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorLlmModelSettings">GoogleDialogflowCxGeneratorLlmModelSettings</a>

---


### GoogleDialogflowCxGeneratorModelParameterOutputReference <a name="GoogleDialogflowCxGeneratorModelParameterOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGeneratorModelParameterOutputReference;

new GoogleDialogflowCxGeneratorModelParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resetMaxDecodeSteps">resetMaxDecodeSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resetTopK">resetTopK</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resetTopP">resetTopP</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxDecodeSteps` <a name="resetMaxDecodeSteps" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resetMaxDecodeSteps"></a>

```java
public void resetMaxDecodeSteps()
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resetTemperature"></a>

```java
public void resetTemperature()
```

##### `resetTopK` <a name="resetTopK" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resetTopK"></a>

```java
public void resetTopK()
```

##### `resetTopP` <a name="resetTopP" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.resetTopP"></a>

```java
public void resetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeStepsInput">maxDecodeStepsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.topKInput">topKInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.topPInput">topPInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeSteps">maxDecodeSteps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.topK">topK</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.topP">topP</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter">GoogleDialogflowCxGeneratorModelParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxDecodeStepsInput`<sup>Optional</sup> <a name="maxDecodeStepsInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeStepsInput"></a>

```java
public java.lang.Number getMaxDecodeStepsInput();
```

- *Type:* java.lang.Number

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.temperatureInput"></a>

```java
public java.lang.Number getTemperatureInput();
```

- *Type:* java.lang.Number

---

##### `topKInput`<sup>Optional</sup> <a name="topKInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.topKInput"></a>

```java
public java.lang.Number getTopKInput();
```

- *Type:* java.lang.Number

---

##### `topPInput`<sup>Optional</sup> <a name="topPInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.topPInput"></a>

```java
public java.lang.Number getTopPInput();
```

- *Type:* java.lang.Number

---

##### `maxDecodeSteps`<sup>Required</sup> <a name="maxDecodeSteps" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.maxDecodeSteps"></a>

```java
public java.lang.Number getMaxDecodeSteps();
```

- *Type:* java.lang.Number

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `topK`<sup>Required</sup> <a name="topK" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.topK"></a>

```java
public java.lang.Number getTopK();
```

- *Type:* java.lang.Number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameterOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxGeneratorModelParameter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorModelParameter">GoogleDialogflowCxGeneratorModelParameter</a>

---


### GoogleDialogflowCxGeneratorPlaceholdersList <a name="GoogleDialogflowCxGeneratorPlaceholdersList" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGeneratorPlaceholdersList;

new GoogleDialogflowCxGeneratorPlaceholdersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.get"></a>

```java
public GoogleDialogflowCxGeneratorPlaceholdersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders">GoogleDialogflowCxGeneratorPlaceholders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders">GoogleDialogflowCxGeneratorPlaceholders</a>>

---


### GoogleDialogflowCxGeneratorPlaceholdersOutputReference <a name="GoogleDialogflowCxGeneratorPlaceholdersOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference;

new GoogleDialogflowCxGeneratorPlaceholdersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders">GoogleDialogflowCxGeneratorPlaceholders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholdersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPlaceholders">GoogleDialogflowCxGeneratorPlaceholders</a>

---


### GoogleDialogflowCxGeneratorPromptTextOutputReference <a name="GoogleDialogflowCxGeneratorPromptTextOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGeneratorPromptTextOutputReference;

new GoogleDialogflowCxGeneratorPromptTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText">GoogleDialogflowCxGeneratorPromptText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptTextOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowCxGeneratorPromptText getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorPromptText">GoogleDialogflowCxGeneratorPromptText</a>

---


### GoogleDialogflowCxGeneratorTimeoutsOutputReference <a name="GoogleDialogflowCxGeneratorTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_cx_generator.GoogleDialogflowCxGeneratorTimeoutsOutputReference;

new GoogleDialogflowCxGeneratorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts">GoogleDialogflowCxGeneratorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerator.GoogleDialogflowCxGeneratorTimeouts">GoogleDialogflowCxGeneratorTimeouts</a>

---



