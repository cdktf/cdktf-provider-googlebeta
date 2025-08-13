# `googleDialogflowCxGenerativeSettings` Submodule <a name="`googleDialogflowCxGenerativeSettings` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxGenerativeSettings <a name="GoogleDialogflowCxGenerativeSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings google_dialogflow_cx_generative_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  language_code: str,
  fallback_settings: GoogleDialogflowCxGenerativeSettingsFallbackSettings = None,
  generative_safety_settings: GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings = None,
  id: str = None,
  knowledge_connector_settings: GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings = None,
  llm_model_settings: GoogleDialogflowCxGenerativeSettingsLlmModelSettings = None,
  parent: str = None,
  timeouts: GoogleDialogflowCxGenerativeSettingsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.languageCode">language_code</a></code> | <code>str</code> | Language for this settings. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.fallbackSettings">fallback_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a></code> | fallback_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.generativeSafetySettings">generative_safety_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | generative_safety_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#id GoogleDialogflowCxGenerativeSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.knowledgeConnectorSettings">knowledge_connector_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | knowledge_connector_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.llmModelSettings">llm_model_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.languageCode"></a>

- *Type:* str

Language for this settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#language_code GoogleDialogflowCxGenerativeSettings#language_code}

---

##### `fallback_settings`<sup>Optional</sup> <a name="fallback_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.fallbackSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

fallback_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#fallback_settings GoogleDialogflowCxGenerativeSettings#fallback_settings}

---

##### `generative_safety_settings`<sup>Optional</sup> <a name="generative_safety_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.generativeSafetySettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

generative_safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#generative_safety_settings GoogleDialogflowCxGenerativeSettings#generative_safety_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#id GoogleDialogflowCxGenerativeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `knowledge_connector_settings`<sup>Optional</sup> <a name="knowledge_connector_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.knowledgeConnectorSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

knowledge_connector_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#knowledge_connector_settings GoogleDialogflowCxGenerativeSettings#knowledge_connector_settings}

---

##### `llm_model_settings`<sup>Optional</sup> <a name="llm_model_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.llmModelSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#llm_model_settings GoogleDialogflowCxGenerativeSettings#llm_model_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.parent"></a>

- *Type:* str

The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#parent GoogleDialogflowCxGenerativeSettings#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#timeouts GoogleDialogflowCxGenerativeSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putFallbackSettings">put_fallback_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putGenerativeSafetySettings">put_generative_safety_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings">put_knowledge_connector_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putLlmModelSettings">put_llm_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetFallbackSettings">reset_fallback_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetGenerativeSafetySettings">reset_generative_safety_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetKnowledgeConnectorSettings">reset_knowledge_connector_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetLlmModelSettings">reset_llm_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_fallback_settings` <a name="put_fallback_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putFallbackSettings"></a>

```python
def put_fallback_settings(
  prompt_templates: typing.Union[IResolvable, typing.List[GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates]] = None,
  selected_prompt: str = None
) -> None
```

###### `prompt_templates`<sup>Optional</sup> <a name="prompt_templates" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putFallbackSettings.parameter.promptTemplates"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>]]

prompt_templates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#prompt_templates GoogleDialogflowCxGenerativeSettings#prompt_templates}

---

###### `selected_prompt`<sup>Optional</sup> <a name="selected_prompt" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putFallbackSettings.parameter.selectedPrompt"></a>

- *Type:* str

Display name of the selected prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#selected_prompt GoogleDialogflowCxGenerativeSettings#selected_prompt}

---

##### `put_generative_safety_settings` <a name="put_generative_safety_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putGenerativeSafetySettings"></a>

```python
def put_generative_safety_settings(
  banned_phrases: typing.Union[IResolvable, typing.List[GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases]] = None,
  default_banned_phrase_match_strategy: str = None
) -> None
```

###### `banned_phrases`<sup>Optional</sup> <a name="banned_phrases" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putGenerativeSafetySettings.parameter.bannedPhrases"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>]]

banned_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#banned_phrases GoogleDialogflowCxGenerativeSettings#banned_phrases}

---

###### `default_banned_phrase_match_strategy`<sup>Optional</sup> <a name="default_banned_phrase_match_strategy" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putGenerativeSafetySettings.parameter.defaultBannedPhraseMatchStrategy"></a>

- *Type:* str

Optional. Default phrase match strategy for banned phrases. See [PhraseMatchStrategy](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/GenerativeSettings#phrasematchstrategy) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#default_banned_phrase_match_strategy GoogleDialogflowCxGenerativeSettings#default_banned_phrase_match_strategy}

---

##### `put_knowledge_connector_settings` <a name="put_knowledge_connector_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings"></a>

```python
def put_knowledge_connector_settings(
  agent: str = None,
  agent_identity: str = None,
  agent_scope: str = None,
  business: str = None,
  business_description: str = None,
  disable_data_store_fallback: typing.Union[bool, IResolvable] = None
) -> None
```

###### `agent`<sup>Optional</sup> <a name="agent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings.parameter.agent"></a>

- *Type:* str

Name of the virtual agent. Used for LLM prompt. Can be left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#agent GoogleDialogflowCxGenerativeSettings#agent}

---

###### `agent_identity`<sup>Optional</sup> <a name="agent_identity" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings.parameter.agentIdentity"></a>

- *Type:* str

Identity of the agent, e.g. "virtual agent", "AI assistant".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#agent_identity GoogleDialogflowCxGenerativeSettings#agent_identity}

---

###### `agent_scope`<sup>Optional</sup> <a name="agent_scope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings.parameter.agentScope"></a>

- *Type:* str

Agent scope, e.g. "Example company website", "internal Example company website for employees", "manual of car owner".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#agent_scope GoogleDialogflowCxGenerativeSettings#agent_scope}

---

###### `business`<sup>Optional</sup> <a name="business" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings.parameter.business"></a>

- *Type:* str

Name of the company, organization or other entity that the agent represents.

Used for knowledge connector LLM prompt and for knowledge search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#business GoogleDialogflowCxGenerativeSettings#business}

---

###### `business_description`<sup>Optional</sup> <a name="business_description" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings.parameter.businessDescription"></a>

- *Type:* str

Company description, used for LLM prompt, e.g. "a family company selling freshly roasted coffee beans".''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#business_description GoogleDialogflowCxGenerativeSettings#business_description}

---

###### `disable_data_store_fallback`<sup>Optional</sup> <a name="disable_data_store_fallback" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings.parameter.disableDataStoreFallback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable fallback to Data Store search results (in case the LLM couldn't pick a proper answer).

Per default the feature is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#disable_data_store_fallback GoogleDialogflowCxGenerativeSettings#disable_data_store_fallback}

---

##### `put_llm_model_settings` <a name="put_llm_model_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putLlmModelSettings"></a>

```python
def put_llm_model_settings(
  model: str = None,
  prompt_text: str = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putLlmModelSettings.parameter.model"></a>

- *Type:* str

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#model GoogleDialogflowCxGenerativeSettings#model}

---

###### `prompt_text`<sup>Optional</sup> <a name="prompt_text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putLlmModelSettings.parameter.promptText"></a>

- *Type:* str

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#prompt_text GoogleDialogflowCxGenerativeSettings#prompt_text}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#create GoogleDialogflowCxGenerativeSettings#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#delete GoogleDialogflowCxGenerativeSettings#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#update GoogleDialogflowCxGenerativeSettings#update}.

---

##### `reset_fallback_settings` <a name="reset_fallback_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetFallbackSettings"></a>

```python
def reset_fallback_settings() -> None
```

##### `reset_generative_safety_settings` <a name="reset_generative_safety_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetGenerativeSafetySettings"></a>

```python
def reset_generative_safety_settings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_knowledge_connector_settings` <a name="reset_knowledge_connector_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetKnowledgeConnectorSettings"></a>

```python
def reset_knowledge_connector_settings() -> None
```

##### `reset_llm_model_settings` <a name="reset_llm_model_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetLlmModelSettings"></a>

```python
def reset_llm_model_settings() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxGenerativeSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDialogflowCxGenerativeSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDialogflowCxGenerativeSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDialogflowCxGenerativeSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxGenerativeSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fallbackSettings">fallback_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.generativeSafetySettings">generative_safety_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.knowledgeConnectorSettings">knowledge_connector_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.llmModelSettings">llm_model_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference">GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fallbackSettingsInput">fallback_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.generativeSafetySettingsInput">generative_safety_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.knowledgeConnectorSettingsInput">knowledge_connector_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.llmModelSettingsInput">llm_model_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fallback_settings`<sup>Required</sup> <a name="fallback_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fallbackSettings"></a>

```python
fallback_settings: GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference</a>

---

##### `generative_safety_settings`<sup>Required</sup> <a name="generative_safety_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.generativeSafetySettings"></a>

```python
generative_safety_settings: GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference</a>

---

##### `knowledge_connector_settings`<sup>Required</sup> <a name="knowledge_connector_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.knowledgeConnectorSettings"></a>

```python
knowledge_connector_settings: GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference</a>

---

##### `llm_model_settings`<sup>Required</sup> <a name="llm_model_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.llmModelSettings"></a>

```python
llm_model_settings: GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference">GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference</a>

---

##### `fallback_settings_input`<sup>Optional</sup> <a name="fallback_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fallbackSettingsInput"></a>

```python
fallback_settings_input: GoogleDialogflowCxGenerativeSettingsFallbackSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

---

##### `generative_safety_settings_input`<sup>Optional</sup> <a name="generative_safety_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.generativeSafetySettingsInput"></a>

```python
generative_safety_settings_input: GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `knowledge_connector_settings_input`<sup>Optional</sup> <a name="knowledge_connector_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.knowledgeConnectorSettingsInput"></a>

```python
knowledge_connector_settings_input: GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `llm_model_settings_input`<sup>Optional</sup> <a name="llm_model_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.llmModelSettingsInput"></a>

```python
llm_model_settings_input: GoogleDialogflowCxGenerativeSettingsLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDialogflowCxGenerativeSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxGenerativeSettingsConfig <a name="GoogleDialogflowCxGenerativeSettingsConfig" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  language_code: str,
  fallback_settings: GoogleDialogflowCxGenerativeSettingsFallbackSettings = None,
  generative_safety_settings: GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings = None,
  id: str = None,
  knowledge_connector_settings: GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings = None,
  llm_model_settings: GoogleDialogflowCxGenerativeSettingsLlmModelSettings = None,
  parent: str = None,
  timeouts: GoogleDialogflowCxGenerativeSettingsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.languageCode">language_code</a></code> | <code>str</code> | Language for this settings. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.fallbackSettings">fallback_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a></code> | fallback_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.generativeSafetySettings">generative_safety_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | generative_safety_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#id GoogleDialogflowCxGenerativeSettings#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.knowledgeConnectorSettings">knowledge_connector_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | knowledge_connector_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.llmModelSettings">llm_model_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.parent">parent</a></code> | <code>str</code> | The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

Language for this settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#language_code GoogleDialogflowCxGenerativeSettings#language_code}

---

##### `fallback_settings`<sup>Optional</sup> <a name="fallback_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.fallbackSettings"></a>

```python
fallback_settings: GoogleDialogflowCxGenerativeSettingsFallbackSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

fallback_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#fallback_settings GoogleDialogflowCxGenerativeSettings#fallback_settings}

---

##### `generative_safety_settings`<sup>Optional</sup> <a name="generative_safety_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.generativeSafetySettings"></a>

```python
generative_safety_settings: GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

generative_safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#generative_safety_settings GoogleDialogflowCxGenerativeSettings#generative_safety_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#id GoogleDialogflowCxGenerativeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `knowledge_connector_settings`<sup>Optional</sup> <a name="knowledge_connector_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.knowledgeConnectorSettings"></a>

```python
knowledge_connector_settings: GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

knowledge_connector_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#knowledge_connector_settings GoogleDialogflowCxGenerativeSettings#knowledge_connector_settings}

---

##### `llm_model_settings`<sup>Optional</sup> <a name="llm_model_settings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.llmModelSettings"></a>

```python
llm_model_settings: GoogleDialogflowCxGenerativeSettingsLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#llm_model_settings GoogleDialogflowCxGenerativeSettings#llm_model_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#parent GoogleDialogflowCxGenerativeSettings#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCxGenerativeSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#timeouts GoogleDialogflowCxGenerativeSettings#timeouts}

---

### GoogleDialogflowCxGenerativeSettingsFallbackSettings <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings(
  prompt_templates: typing.Union[IResolvable, typing.List[GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates]] = None,
  selected_prompt: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.property.promptTemplates">prompt_templates</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>]]</code> | prompt_templates block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.property.selectedPrompt">selected_prompt</a></code> | <code>str</code> | Display name of the selected prompt. |

---

##### `prompt_templates`<sup>Optional</sup> <a name="prompt_templates" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.property.promptTemplates"></a>

```python
prompt_templates: typing.Union[IResolvable, typing.List[GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>]]

prompt_templates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#prompt_templates GoogleDialogflowCxGenerativeSettings#prompt_templates}

---

##### `selected_prompt`<sup>Optional</sup> <a name="selected_prompt" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.property.selectedPrompt"></a>

```python
selected_prompt: str
```

- *Type:* str

Display name of the selected prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#selected_prompt GoogleDialogflowCxGenerativeSettings#selected_prompt}

---

### GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates(
  display_name: str = None,
  frozen: typing.Union[bool, IResolvable] = None,
  prompt_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.displayName">display_name</a></code> | <code>str</code> | Prompt name. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.frozen">frozen</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the flag is true, the prompt is frozen and cannot be modified by users. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.promptText">prompt_text</a></code> | <code>str</code> | Prompt text that is sent to a LLM on no-match default, placeholders are filled downstream. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Prompt name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#display_name GoogleDialogflowCxGenerativeSettings#display_name}

---

##### `frozen`<sup>Optional</sup> <a name="frozen" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.frozen"></a>

```python
frozen: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the flag is true, the prompt is frozen and cannot be modified by users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#frozen GoogleDialogflowCxGenerativeSettings#frozen}

---

##### `prompt_text`<sup>Optional</sup> <a name="prompt_text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.promptText"></a>

```python
prompt_text: str
```

- *Type:* str

Prompt text that is sent to a LLM on no-match default, placeholders are filled downstream.

For example: "Here is a conversation $conversation, a response is: "

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#prompt_text GoogleDialogflowCxGenerativeSettings#prompt_text}

---

### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings(
  banned_phrases: typing.Union[IResolvable, typing.List[GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases]] = None,
  default_banned_phrase_match_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.property.bannedPhrases">banned_phrases</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>]]</code> | banned_phrases block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.property.defaultBannedPhraseMatchStrategy">default_banned_phrase_match_strategy</a></code> | <code>str</code> | Optional. Default phrase match strategy for banned phrases. See [PhraseMatchStrategy](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/GenerativeSettings#phrasematchstrategy) for valid values. |

---

##### `banned_phrases`<sup>Optional</sup> <a name="banned_phrases" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.property.bannedPhrases"></a>

```python
banned_phrases: typing.Union[IResolvable, typing.List[GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>]]

banned_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#banned_phrases GoogleDialogflowCxGenerativeSettings#banned_phrases}

---

##### `default_banned_phrase_match_strategy`<sup>Optional</sup> <a name="default_banned_phrase_match_strategy" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.property.defaultBannedPhraseMatchStrategy"></a>

```python
default_banned_phrase_match_strategy: str
```

- *Type:* str

Optional. Default phrase match strategy for banned phrases. See [PhraseMatchStrategy](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/GenerativeSettings#phrasematchstrategy) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#default_banned_phrase_match_strategy GoogleDialogflowCxGenerativeSettings#default_banned_phrase_match_strategy}

---

### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases(
  language_code: str,
  text: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.languageCode">language_code</a></code> | <code>str</code> | Language code of the phrase. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.text">text</a></code> | <code>str</code> | Text input which can be used for prompt or banned phrases. |

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

Language code of the phrase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#language_code GoogleDialogflowCxGenerativeSettings#language_code}

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.text"></a>

```python
text: str
```

- *Type:* str

Text input which can be used for prompt or banned phrases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#text GoogleDialogflowCxGenerativeSettings#text}

---

### GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings <a name="GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings(
  agent: str = None,
  agent_identity: str = None,
  agent_scope: str = None,
  business: str = None,
  business_description: str = None,
  disable_data_store_fallback: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agent">agent</a></code> | <code>str</code> | Name of the virtual agent. Used for LLM prompt. Can be left empty. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentIdentity">agent_identity</a></code> | <code>str</code> | Identity of the agent, e.g. "virtual agent", "AI assistant". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentScope">agent_scope</a></code> | <code>str</code> | Agent scope, e.g. "Example company website", "internal Example company website for employees", "manual of car owner". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.business">business</a></code> | <code>str</code> | Name of the company, organization or other entity that the agent represents. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.businessDescription">business_description</a></code> | <code>str</code> | Company description, used for LLM prompt, e.g. "a family company selling freshly roasted coffee beans".''. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.disableDataStoreFallback">disable_data_store_fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to disable fallback to Data Store search results (in case the LLM couldn't pick a proper answer). |

---

##### `agent`<sup>Optional</sup> <a name="agent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agent"></a>

```python
agent: str
```

- *Type:* str

Name of the virtual agent. Used for LLM prompt. Can be left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#agent GoogleDialogflowCxGenerativeSettings#agent}

---

##### `agent_identity`<sup>Optional</sup> <a name="agent_identity" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentIdentity"></a>

```python
agent_identity: str
```

- *Type:* str

Identity of the agent, e.g. "virtual agent", "AI assistant".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#agent_identity GoogleDialogflowCxGenerativeSettings#agent_identity}

---

##### `agent_scope`<sup>Optional</sup> <a name="agent_scope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentScope"></a>

```python
agent_scope: str
```

- *Type:* str

Agent scope, e.g. "Example company website", "internal Example company website for employees", "manual of car owner".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#agent_scope GoogleDialogflowCxGenerativeSettings#agent_scope}

---

##### `business`<sup>Optional</sup> <a name="business" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.business"></a>

```python
business: str
```

- *Type:* str

Name of the company, organization or other entity that the agent represents.

Used for knowledge connector LLM prompt and for knowledge search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#business GoogleDialogflowCxGenerativeSettings#business}

---

##### `business_description`<sup>Optional</sup> <a name="business_description" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.businessDescription"></a>

```python
business_description: str
```

- *Type:* str

Company description, used for LLM prompt, e.g. "a family company selling freshly roasted coffee beans".''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#business_description GoogleDialogflowCxGenerativeSettings#business_description}

---

##### `disable_data_store_fallback`<sup>Optional</sup> <a name="disable_data_store_fallback" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.disableDataStoreFallback"></a>

```python
disable_data_store_fallback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable fallback to Data Store search results (in case the LLM couldn't pick a proper answer).

Per default the feature is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#disable_data_store_fallback GoogleDialogflowCxGenerativeSettings#disable_data_store_fallback}

---

### GoogleDialogflowCxGenerativeSettingsLlmModelSettings <a name="GoogleDialogflowCxGenerativeSettingsLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings(
  model: str = None,
  prompt_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.property.model">model</a></code> | <code>str</code> | The selected LLM model. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.property.promptText">prompt_text</a></code> | <code>str</code> | The custom prompt to use. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.property.model"></a>

```python
model: str
```

- *Type:* str

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#model GoogleDialogflowCxGenerativeSettings#model}

---

##### `prompt_text`<sup>Optional</sup> <a name="prompt_text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.property.promptText"></a>

```python
prompt_text: str
```

- *Type:* str

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#prompt_text GoogleDialogflowCxGenerativeSettings#prompt_text}

---

### GoogleDialogflowCxGenerativeSettingsTimeouts <a name="GoogleDialogflowCxGenerativeSettingsTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#create GoogleDialogflowCxGenerativeSettings#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#delete GoogleDialogflowCxGenerativeSettings#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#update GoogleDialogflowCxGenerativeSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#create GoogleDialogflowCxGenerativeSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#delete GoogleDialogflowCxGenerativeSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_generative_settings#update GoogleDialogflowCxGenerativeSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.putPromptTemplates">put_prompt_templates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetPromptTemplates">reset_prompt_templates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetSelectedPrompt">reset_selected_prompt</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_prompt_templates` <a name="put_prompt_templates" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.putPromptTemplates"></a>

```python
def put_prompt_templates(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.putPromptTemplates.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>]]

---

##### `reset_prompt_templates` <a name="reset_prompt_templates" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetPromptTemplates"></a>

```python
def reset_prompt_templates() -> None
```

##### `reset_selected_prompt` <a name="reset_selected_prompt" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetSelectedPrompt"></a>

```python
def reset_selected_prompt() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplates">prompt_templates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplatesInput">prompt_templates_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPromptInput">selected_prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPrompt">selected_prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prompt_templates`<sup>Required</sup> <a name="prompt_templates" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplates"></a>

```python
prompt_templates: GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList</a>

---

##### `prompt_templates_input`<sup>Optional</sup> <a name="prompt_templates_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplatesInput"></a>

```python
prompt_templates_input: typing.Union[IResolvable, typing.List[GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>]]

---

##### `selected_prompt_input`<sup>Optional</sup> <a name="selected_prompt_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPromptInput"></a>

```python
selected_prompt_input: str
```

- *Type:* str

---

##### `selected_prompt`<sup>Required</sup> <a name="selected_prompt" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPrompt"></a>

```python
selected_prompt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxGenerativeSettingsFallbackSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

---


### GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>]]

---


### GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetFrozen">reset_frozen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetPromptText">reset_prompt_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_frozen` <a name="reset_frozen" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetFrozen"></a>

```python
def reset_frozen() -> None
```

##### `reset_prompt_text` <a name="reset_prompt_text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetPromptText"></a>

```python
def reset_prompt_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozenInput">frozen_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptTextInput">prompt_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozen">frozen</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptText">prompt_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `frozen_input`<sup>Optional</sup> <a name="frozen_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozenInput"></a>

```python
frozen_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prompt_text_input`<sup>Optional</sup> <a name="prompt_text_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptTextInput"></a>

```python
prompt_text_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `frozen`<sup>Required</sup> <a name="frozen" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozen"></a>

```python
frozen: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prompt_text`<sup>Required</sup> <a name="prompt_text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptText"></a>

```python
prompt_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>]

---


### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>]]

---


### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>]

---


### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.putBannedPhrases">put_banned_phrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetBannedPhrases">reset_banned_phrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetDefaultBannedPhraseMatchStrategy">reset_default_banned_phrase_match_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_banned_phrases` <a name="put_banned_phrases" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.putBannedPhrases"></a>

```python
def put_banned_phrases(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.putBannedPhrases.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>]]

---

##### `reset_banned_phrases` <a name="reset_banned_phrases" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetBannedPhrases"></a>

```python
def reset_banned_phrases() -> None
```

##### `reset_default_banned_phrase_match_strategy` <a name="reset_default_banned_phrase_match_strategy" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetDefaultBannedPhraseMatchStrategy"></a>

```python
def reset_default_banned_phrase_match_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrases">banned_phrases</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrasesInput">banned_phrases_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategyInput">default_banned_phrase_match_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategy">default_banned_phrase_match_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `banned_phrases`<sup>Required</sup> <a name="banned_phrases" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrases"></a>

```python
banned_phrases: GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList</a>

---

##### `banned_phrases_input`<sup>Optional</sup> <a name="banned_phrases_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrasesInput"></a>

```python
banned_phrases_input: typing.Union[IResolvable, typing.List[GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>]]

---

##### `default_banned_phrase_match_strategy_input`<sup>Optional</sup> <a name="default_banned_phrase_match_strategy_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategyInput"></a>

```python
default_banned_phrase_match_strategy_input: str
```

- *Type:* str

---

##### `default_banned_phrase_match_strategy`<sup>Required</sup> <a name="default_banned_phrase_match_strategy" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategy"></a>

```python
default_banned_phrase_match_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

---


### GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgent">reset_agent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentIdentity">reset_agent_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentScope">reset_agent_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusiness">reset_business</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusinessDescription">reset_business_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetDisableDataStoreFallback">reset_disable_data_store_fallback</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_agent` <a name="reset_agent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgent"></a>

```python
def reset_agent() -> None
```

##### `reset_agent_identity` <a name="reset_agent_identity" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentIdentity"></a>

```python
def reset_agent_identity() -> None
```

##### `reset_agent_scope` <a name="reset_agent_scope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentScope"></a>

```python
def reset_agent_scope() -> None
```

##### `reset_business` <a name="reset_business" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusiness"></a>

```python
def reset_business() -> None
```

##### `reset_business_description` <a name="reset_business_description" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusinessDescription"></a>

```python
def reset_business_description() -> None
```

##### `reset_disable_data_store_fallback` <a name="reset_disable_data_store_fallback" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetDisableDataStoreFallback"></a>

```python
def reset_disable_data_store_fallback() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentityInput">agent_identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentInput">agent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScopeInput">agent_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescriptionInput">business_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessInput">business_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallbackInput">disable_data_store_fallback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agent">agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentity">agent_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScope">agent_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.business">business</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescription">business_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallback">disable_data_store_fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_identity_input`<sup>Optional</sup> <a name="agent_identity_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentityInput"></a>

```python
agent_identity_input: str
```

- *Type:* str

---

##### `agent_input`<sup>Optional</sup> <a name="agent_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentInput"></a>

```python
agent_input: str
```

- *Type:* str

---

##### `agent_scope_input`<sup>Optional</sup> <a name="agent_scope_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScopeInput"></a>

```python
agent_scope_input: str
```

- *Type:* str

---

##### `business_description_input`<sup>Optional</sup> <a name="business_description_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescriptionInput"></a>

```python
business_description_input: str
```

- *Type:* str

---

##### `business_input`<sup>Optional</sup> <a name="business_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessInput"></a>

```python
business_input: str
```

- *Type:* str

---

##### `disable_data_store_fallback_input`<sup>Optional</sup> <a name="disable_data_store_fallback_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallbackInput"></a>

```python
disable_data_store_fallback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agent"></a>

```python
agent: str
```

- *Type:* str

---

##### `agent_identity`<sup>Required</sup> <a name="agent_identity" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentity"></a>

```python
agent_identity: str
```

- *Type:* str

---

##### `agent_scope`<sup>Required</sup> <a name="agent_scope" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScope"></a>

```python
agent_scope: str
```

- *Type:* str

---

##### `business`<sup>Required</sup> <a name="business" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.business"></a>

```python
business: str
```

- *Type:* str

---

##### `business_description`<sup>Required</sup> <a name="business_description" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescription"></a>

```python
business_description: str
```

- *Type:* str

---

##### `disable_data_store_fallback`<sup>Required</sup> <a name="disable_data_store_fallback" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallback"></a>

```python
disable_data_store_fallback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

---


### GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetPromptText">reset_prompt_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_prompt_text` <a name="reset_prompt_text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetPromptText"></a>

```python
def reset_prompt_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptTextInput">prompt_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptText">prompt_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `prompt_text_input`<sup>Optional</sup> <a name="prompt_text_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptTextInput"></a>

```python
prompt_text_input: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `prompt_text`<sup>Required</sup> <a name="prompt_text" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptText"></a>

```python
prompt_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxGenerativeSettingsLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

---


### GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_generative_settings

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxGenerativeSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>]

---



