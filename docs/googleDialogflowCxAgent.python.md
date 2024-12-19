# `googleDialogflowCxAgent` Submodule <a name="`googleDialogflowCxAgent` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxAgent <a name="GoogleDialogflowCxAgent" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent google_dialogflow_cx_agent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgent(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_language_code: str,
  display_name: str,
  location: str,
  time_zone: str,
  advanced_settings: GoogleDialogflowCxAgentAdvancedSettings = None,
  avatar_uri: str = None,
  description: str = None,
  enable_spell_correction: typing.Union[bool, IResolvable] = None,
  enable_stackdriver_logging: typing.Union[bool, IResolvable] = None,
  git_integration_settings: GoogleDialogflowCxAgentGitIntegrationSettings = None,
  id: str = None,
  project: str = None,
  security_settings: str = None,
  speech_to_text_settings: GoogleDialogflowCxAgentSpeechToTextSettings = None,
  supported_language_codes: typing.List[str] = None,
  text_to_speech_settings: GoogleDialogflowCxAgentTextToSpeechSettings = None,
  timeouts: GoogleDialogflowCxAgentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the agent, unique within the location. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.location">location</a></code> | <code>str</code> | The name of the location this agent is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.advancedSettings">advanced_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings">GoogleDialogflowCxAgentAdvancedSettings</a></code> | advanced_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.avatarUri">avatar_uri</a></code> | <code>str</code> | The URI of the agent's avatar. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.enableSpellCorrection">enable_spell_correction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if automatic spell correction is enabled in detect intent requests. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.enableStackdriverLogging">enable_stackdriver_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.gitIntegrationSettings">git_integration_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings">GoogleDialogflowCxAgentGitIntegrationSettings</a></code> | git_integration_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#id GoogleDialogflowCxAgent#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#project GoogleDialogflowCxAgent#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.securitySettings">security_settings</a></code> | <code>str</code> | Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.speechToTextSettings">speech_to_text_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a></code> | speech_to_text_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.supportedLanguageCodes">supported_language_codes</a></code> | <code>typing.List[str]</code> | The list of all languages supported by this agent (except for the default_language_code). |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.textToSpeechSettings">text_to_speech_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings">GoogleDialogflowCxAgentTextToSpeechSettings</a></code> | text_to_speech_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.defaultLanguageCode"></a>

- *Type:* str

The default language of the agent as a language tag.

[See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#default_language_code GoogleDialogflowCxAgent#default_language_code}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.displayName"></a>

- *Type:* str

The human-readable name of the agent, unique within the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#display_name GoogleDialogflowCxAgent#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.location"></a>

- *Type:* str

The name of the location this agent is located in.

~> **Note:** The first time you are deploying an Agent in your project you must configure location settings.
This is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.
Another options is to use global location so you don't need to manually configure location settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#location GoogleDialogflowCxAgent#location}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.timeZone"></a>

- *Type:* str

The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#time_zone GoogleDialogflowCxAgent#time_zone}

---

##### `advanced_settings`<sup>Optional</sup> <a name="advanced_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.advancedSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings">GoogleDialogflowCxAgentAdvancedSettings</a>

advanced_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#advanced_settings GoogleDialogflowCxAgent#advanced_settings}

---

##### `avatar_uri`<sup>Optional</sup> <a name="avatar_uri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.avatarUri"></a>

- *Type:* str

The URI of the agent's avatar.

Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#avatar_uri GoogleDialogflowCxAgent#avatar_uri}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.description"></a>

- *Type:* str

The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#description GoogleDialogflowCxAgent#description}

---

##### `enable_spell_correction`<sup>Optional</sup> <a name="enable_spell_correction" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.enableSpellCorrection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if automatic spell correction is enabled in detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#enable_spell_correction GoogleDialogflowCxAgent#enable_spell_correction}

---

##### `enable_stackdriver_logging`<sup>Optional</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.enableStackdriverLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#enable_stackdriver_logging GoogleDialogflowCxAgent#enable_stackdriver_logging}

---

##### `git_integration_settings`<sup>Optional</sup> <a name="git_integration_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.gitIntegrationSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings">GoogleDialogflowCxAgentGitIntegrationSettings</a>

git_integration_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#git_integration_settings GoogleDialogflowCxAgent#git_integration_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#id GoogleDialogflowCxAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#project GoogleDialogflowCxAgent#project}.

---

##### `security_settings`<sup>Optional</sup> <a name="security_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.securitySettings"></a>

- *Type:* str

Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#security_settings GoogleDialogflowCxAgent#security_settings}

---

##### `speech_to_text_settings`<sup>Optional</sup> <a name="speech_to_text_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.speechToTextSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a>

speech_to_text_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#speech_to_text_settings GoogleDialogflowCxAgent#speech_to_text_settings}

---

##### `supported_language_codes`<sup>Optional</sup> <a name="supported_language_codes" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.supportedLanguageCodes"></a>

- *Type:* typing.List[str]

The list of all languages supported by this agent (except for the default_language_code).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#supported_language_codes GoogleDialogflowCxAgent#supported_language_codes}

---

##### `text_to_speech_settings`<sup>Optional</sup> <a name="text_to_speech_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.textToSpeechSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings">GoogleDialogflowCxAgentTextToSpeechSettings</a>

text_to_speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#text_to_speech_settings GoogleDialogflowCxAgent#text_to_speech_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#timeouts GoogleDialogflowCxAgent#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putAdvancedSettings">put_advanced_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putGitIntegrationSettings">put_git_integration_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putSpeechToTextSettings">put_speech_to_text_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTextToSpeechSettings">put_text_to_speech_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetAdvancedSettings">reset_advanced_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetAvatarUri">reset_avatar_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetEnableSpellCorrection">reset_enable_spell_correction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetEnableStackdriverLogging">reset_enable_stackdriver_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetGitIntegrationSettings">reset_git_integration_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSecuritySettings">reset_security_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSpeechToTextSettings">reset_speech_to_text_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSupportedLanguageCodes">reset_supported_language_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetTextToSpeechSettings">reset_text_to_speech_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_advanced_settings` <a name="put_advanced_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putAdvancedSettings"></a>

```python
def put_advanced_settings(
  audio_export_gcs_destination: GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination = None,
  dtmf_settings: GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings = None,
  logging_settings: GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings = None,
  speech_settings: GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings = None
) -> None
```

###### `audio_export_gcs_destination`<sup>Optional</sup> <a name="audio_export_gcs_destination" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putAdvancedSettings.parameter.audioExportGcsDestination"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

audio_export_gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#audio_export_gcs_destination GoogleDialogflowCxAgent#audio_export_gcs_destination}

---

###### `dtmf_settings`<sup>Optional</sup> <a name="dtmf_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putAdvancedSettings.parameter.dtmfSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings</a>

dtmf_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#dtmf_settings GoogleDialogflowCxAgent#dtmf_settings}

---

###### `logging_settings`<sup>Optional</sup> <a name="logging_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putAdvancedSettings.parameter.loggingSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings</a>

logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#logging_settings GoogleDialogflowCxAgent#logging_settings}

---

###### `speech_settings`<sup>Optional</sup> <a name="speech_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putAdvancedSettings.parameter.speechSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings</a>

speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#speech_settings GoogleDialogflowCxAgent#speech_settings}

---

##### `put_git_integration_settings` <a name="put_git_integration_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putGitIntegrationSettings"></a>

```python
def put_git_integration_settings(
  github_settings: GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings = None
) -> None
```

###### `github_settings`<sup>Optional</sup> <a name="github_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putGitIntegrationSettings.parameter.githubSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

github_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#github_settings GoogleDialogflowCxAgent#github_settings}

---

##### `put_speech_to_text_settings` <a name="put_speech_to_text_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putSpeechToTextSettings"></a>

```python
def put_speech_to_text_settings(
  enable_speech_adaptation: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_speech_adaptation`<sup>Optional</sup> <a name="enable_speech_adaptation" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putSpeechToTextSettings.parameter.enableSpeechAdaptation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use speech adaptation for speech recognition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#enable_speech_adaptation GoogleDialogflowCxAgent#enable_speech_adaptation}

---

##### `put_text_to_speech_settings` <a name="put_text_to_speech_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTextToSpeechSettings"></a>

```python
def put_text_to_speech_settings(
  synthesize_speech_configs: str = None
) -> None
```

###### `synthesize_speech_configs`<sup>Optional</sup> <a name="synthesize_speech_configs" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTextToSpeechSettings.parameter.synthesizeSpeechConfigs"></a>

- *Type:* str

Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig). These settings affect: * The phone gateway synthesize configuration set via Agent.text_to_speech_settings. * How speech is synthesized when invoking session APIs. 'Agent.text_to_speech_settings' only applies if 'OutputAudioConfig.synthesize_speech_config' is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#synthesize_speech_configs GoogleDialogflowCxAgent#synthesize_speech_configs}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#create GoogleDialogflowCxAgent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#delete GoogleDialogflowCxAgent#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#update GoogleDialogflowCxAgent#update}.

---

##### `reset_advanced_settings` <a name="reset_advanced_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetAdvancedSettings"></a>

```python
def reset_advanced_settings() -> None
```

##### `reset_avatar_uri` <a name="reset_avatar_uri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetAvatarUri"></a>

```python
def reset_avatar_uri() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_spell_correction` <a name="reset_enable_spell_correction" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetEnableSpellCorrection"></a>

```python
def reset_enable_spell_correction() -> None
```

##### `reset_enable_stackdriver_logging` <a name="reset_enable_stackdriver_logging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetEnableStackdriverLogging"></a>

```python
def reset_enable_stackdriver_logging() -> None
```

##### `reset_git_integration_settings` <a name="reset_git_integration_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetGitIntegrationSettings"></a>

```python
def reset_git_integration_settings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_security_settings` <a name="reset_security_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSecuritySettings"></a>

```python
def reset_security_settings() -> None
```

##### `reset_speech_to_text_settings` <a name="reset_speech_to_text_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSpeechToTextSettings"></a>

```python
def reset_speech_to_text_settings() -> None
```

##### `reset_supported_language_codes` <a name="reset_supported_language_codes" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetSupportedLanguageCodes"></a>

```python
def reset_supported_language_codes() -> None
```

##### `reset_text_to_speech_settings` <a name="reset_text_to_speech_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetTextToSpeechSettings"></a>

```python
def reset_text_to_speech_settings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxAgent resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDialogflowCxAgent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDialogflowCxAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDialogflowCxAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.advancedSettings">advanced_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference">GoogleDialogflowCxAgentAdvancedSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.gitIntegrationSettings">git_integration_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference">GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.speechToTextSettings">speech_to_text_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference">GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.startFlow">start_flow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.textToSpeechSettings">text_to_speech_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference">GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference">GoogleDialogflowCxAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.advancedSettingsInput">advanced_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings">GoogleDialogflowCxAgentAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.avatarUriInput">avatar_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.defaultLanguageCodeInput">default_language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableSpellCorrectionInput">enable_spell_correction_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableStackdriverLoggingInput">enable_stackdriver_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.gitIntegrationSettingsInput">git_integration_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings">GoogleDialogflowCxAgentGitIntegrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.securitySettingsInput">security_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.speechToTextSettingsInput">speech_to_text_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.supportedLanguageCodesInput">supported_language_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.textToSpeechSettingsInput">text_to_speech_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings">GoogleDialogflowCxAgentTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.avatarUri">avatar_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableSpellCorrection">enable_spell_correction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableStackdriverLogging">enable_stackdriver_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.securitySettings">security_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.supportedLanguageCodes">supported_language_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `advanced_settings`<sup>Required</sup> <a name="advanced_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.advancedSettings"></a>

```python
advanced_settings: GoogleDialogflowCxAgentAdvancedSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference">GoogleDialogflowCxAgentAdvancedSettingsOutputReference</a>

---

##### `git_integration_settings`<sup>Required</sup> <a name="git_integration_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.gitIntegrationSettings"></a>

```python
git_integration_settings: GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference">GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `speech_to_text_settings`<sup>Required</sup> <a name="speech_to_text_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.speechToTextSettings"></a>

```python
speech_to_text_settings: GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference">GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference</a>

---

##### `start_flow`<sup>Required</sup> <a name="start_flow" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.startFlow"></a>

```python
start_flow: str
```

- *Type:* str

---

##### `text_to_speech_settings`<sup>Required</sup> <a name="text_to_speech_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.textToSpeechSettings"></a>

```python
text_to_speech_settings: GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference">GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCxAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference">GoogleDialogflowCxAgentTimeoutsOutputReference</a>

---

##### `advanced_settings_input`<sup>Optional</sup> <a name="advanced_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.advancedSettingsInput"></a>

```python
advanced_settings_input: GoogleDialogflowCxAgentAdvancedSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings">GoogleDialogflowCxAgentAdvancedSettings</a>

---

##### `avatar_uri_input`<sup>Optional</sup> <a name="avatar_uri_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.avatarUriInput"></a>

```python
avatar_uri_input: str
```

- *Type:* str

---

##### `default_language_code_input`<sup>Optional</sup> <a name="default_language_code_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.defaultLanguageCodeInput"></a>

```python
default_language_code_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enable_spell_correction_input`<sup>Optional</sup> <a name="enable_spell_correction_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableSpellCorrectionInput"></a>

```python
enable_spell_correction_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_stackdriver_logging_input`<sup>Optional</sup> <a name="enable_stackdriver_logging_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableStackdriverLoggingInput"></a>

```python
enable_stackdriver_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `git_integration_settings_input`<sup>Optional</sup> <a name="git_integration_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.gitIntegrationSettingsInput"></a>

```python
git_integration_settings_input: GoogleDialogflowCxAgentGitIntegrationSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings">GoogleDialogflowCxAgentGitIntegrationSettings</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `security_settings_input`<sup>Optional</sup> <a name="security_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.securitySettingsInput"></a>

```python
security_settings_input: str
```

- *Type:* str

---

##### `speech_to_text_settings_input`<sup>Optional</sup> <a name="speech_to_text_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.speechToTextSettingsInput"></a>

```python
speech_to_text_settings_input: GoogleDialogflowCxAgentSpeechToTextSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a>

---

##### `supported_language_codes_input`<sup>Optional</sup> <a name="supported_language_codes_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.supportedLanguageCodesInput"></a>

```python
supported_language_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `text_to_speech_settings_input`<sup>Optional</sup> <a name="text_to_speech_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.textToSpeechSettingsInput"></a>

```python
text_to_speech_settings_input: GoogleDialogflowCxAgentTextToSpeechSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings">GoogleDialogflowCxAgentTextToSpeechSettings</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDialogflowCxAgentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `avatar_uri`<sup>Required</sup> <a name="avatar_uri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.avatarUri"></a>

```python
avatar_uri: str
```

- *Type:* str

---

##### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.defaultLanguageCode"></a>

```python
default_language_code: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_spell_correction`<sup>Required</sup> <a name="enable_spell_correction" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableSpellCorrection"></a>

```python
enable_spell_correction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_stackdriver_logging`<sup>Required</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.enableStackdriverLogging"></a>

```python
enable_stackdriver_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `security_settings`<sup>Required</sup> <a name="security_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.securitySettings"></a>

```python
security_settings: str
```

- *Type:* str

---

##### `supported_language_codes`<sup>Required</sup> <a name="supported_language_codes" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.supportedLanguageCodes"></a>

```python
supported_language_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxAgentAdvancedSettings <a name="GoogleDialogflowCxAgentAdvancedSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings(
  audio_export_gcs_destination: GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination = None,
  dtmf_settings: GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings = None,
  logging_settings: GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings = None,
  speech_settings: GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.property.audioExportGcsDestination">audio_export_gcs_destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a></code> | audio_export_gcs_destination block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.property.dtmfSettings">dtmf_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings</a></code> | dtmf_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.property.loggingSettings">logging_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings</a></code> | logging_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.property.speechSettings">speech_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings</a></code> | speech_settings block. |

---

##### `audio_export_gcs_destination`<sup>Optional</sup> <a name="audio_export_gcs_destination" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.property.audioExportGcsDestination"></a>

```python
audio_export_gcs_destination: GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

audio_export_gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#audio_export_gcs_destination GoogleDialogflowCxAgent#audio_export_gcs_destination}

---

##### `dtmf_settings`<sup>Optional</sup> <a name="dtmf_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.property.dtmfSettings"></a>

```python
dtmf_settings: GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings</a>

dtmf_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#dtmf_settings GoogleDialogflowCxAgent#dtmf_settings}

---

##### `logging_settings`<sup>Optional</sup> <a name="logging_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.property.loggingSettings"></a>

```python
logging_settings: GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings</a>

logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#logging_settings GoogleDialogflowCxAgent#logging_settings}

---

##### `speech_settings`<sup>Optional</sup> <a name="speech_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings.property.speechSettings"></a>

```python
speech_settings: GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings</a>

speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#speech_settings GoogleDialogflowCxAgent#speech_settings}

---

### GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination <a name="GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination(
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination.property.uri">uri</a></code> | <code>str</code> | The Google Cloud Storage URI for the exported objects. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination.property.uri"></a>

```python
uri: str
```

- *Type:* str

The Google Cloud Storage URI for the exported objects.

Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.
Format: gs://bucket/object-name-or-prefix

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#uri GoogleDialogflowCxAgent#uri}

---

### GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings <a name="GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings(
  enabled: typing.Union[bool, IResolvable] = None,
  finish_digit: str = None,
  max_digits: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, incoming audio is processed for DTMF (dual tone multi frequency) events. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings.property.finishDigit">finish_digit</a></code> | <code>str</code> | The digit that terminates a DTMF digit sequence. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings.property.maxDigits">max_digits</a></code> | <code>typing.Union[int, float]</code> | Max length of DTMF digits. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, incoming audio is processed for DTMF (dual tone multi frequency) events.

For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#enabled GoogleDialogflowCxAgent#enabled}

---

##### `finish_digit`<sup>Optional</sup> <a name="finish_digit" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings.property.finishDigit"></a>

```python
finish_digit: str
```

- *Type:* str

The digit that terminates a DTMF digit sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#finish_digit GoogleDialogflowCxAgent#finish_digit}

---

##### `max_digits`<sup>Optional</sup> <a name="max_digits" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings.property.maxDigits"></a>

```python
max_digits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max length of DTMF digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#max_digits GoogleDialogflowCxAgent#max_digits}

---

### GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings <a name="GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings(
  enable_consent_based_redaction: typing.Union[bool, IResolvable] = None,
  enable_interaction_logging: typing.Union[bool, IResolvable] = None,
  enable_stackdriver_logging: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings.property.enableConsentBasedRedaction">enable_consent_based_redaction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables consent-based end-user input redaction, if true, a pre-defined session parameter **$session.params.conversation-redaction** will be used to determine if the utterance should be redacted. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings.property.enableInteractionLogging">enable_interaction_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables DF Interaction logging. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings.property.enableStackdriverLogging">enable_stackdriver_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables Google Cloud Logging. |

---

##### `enable_consent_based_redaction`<sup>Optional</sup> <a name="enable_consent_based_redaction" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings.property.enableConsentBasedRedaction"></a>

```python
enable_consent_based_redaction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables consent-based end-user input redaction, if true, a pre-defined session parameter **$session.params.conversation-redaction** will be used to determine if the utterance should be redacted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#enable_consent_based_redaction GoogleDialogflowCxAgent#enable_consent_based_redaction}

---

##### `enable_interaction_logging`<sup>Optional</sup> <a name="enable_interaction_logging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings.property.enableInteractionLogging"></a>

```python
enable_interaction_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables DF Interaction logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#enable_interaction_logging GoogleDialogflowCxAgent#enable_interaction_logging}

---

##### `enable_stackdriver_logging`<sup>Optional</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings.property.enableStackdriverLogging"></a>

```python
enable_stackdriver_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Google Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#enable_stackdriver_logging GoogleDialogflowCxAgent#enable_stackdriver_logging}

---

### GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings <a name="GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings(
  endpointer_sensitivity: typing.Union[int, float] = None,
  models: typing.Mapping[str] = None,
  no_speech_timeout: str = None,
  use_timeout_based_endpointing: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.property.endpointerSensitivity">endpointer_sensitivity</a></code> | <code>typing.Union[int, float]</code> | Sensitivity of the speech model that detects the end of speech. Scale from 0 to 100. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.property.models">models</a></code> | <code>typing.Mapping[str]</code> | Mapping from language to Speech-to-Text model. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.property.noSpeechTimeout">no_speech_timeout</a></code> | <code>str</code> | Timeout before detecting no speech. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.property.useTimeoutBasedEndpointing">use_timeout_based_endpointing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use timeout based endpointing, interpreting endpointer sensitivy as seconds of timeout value. |

---

##### `endpointer_sensitivity`<sup>Optional</sup> <a name="endpointer_sensitivity" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.property.endpointerSensitivity"></a>

```python
endpointer_sensitivity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sensitivity of the speech model that detects the end of speech. Scale from 0 to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#endpointer_sensitivity GoogleDialogflowCxAgent#endpointer_sensitivity}

---

##### `models`<sup>Optional</sup> <a name="models" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.property.models"></a>

```python
models: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping from language to Speech-to-Text model.

The mapped Speech-to-Text model will be selected for requests from its corresponding language. For more information, see [Speech models](https://cloud.google.com/dialogflow/cx/docs/concept/speech-models).
An object containing a list of **"key": value** pairs. Example: **{ "name": "wrench", "mass": "1.3kg", "count": "3" }**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#models GoogleDialogflowCxAgent#models}

---

##### `no_speech_timeout`<sup>Optional</sup> <a name="no_speech_timeout" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.property.noSpeechTimeout"></a>

```python
no_speech_timeout: str
```

- *Type:* str

Timeout before detecting no speech. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#no_speech_timeout GoogleDialogflowCxAgent#no_speech_timeout}

---

##### `use_timeout_based_endpointing`<sup>Optional</sup> <a name="use_timeout_based_endpointing" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings.property.useTimeoutBasedEndpointing"></a>

```python
use_timeout_based_endpointing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use timeout based endpointing, interpreting endpointer sensitivy as seconds of timeout value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#use_timeout_based_endpointing GoogleDialogflowCxAgent#use_timeout_based_endpointing}

---

### GoogleDialogflowCxAgentConfig <a name="GoogleDialogflowCxAgentConfig" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_language_code: str,
  display_name: str,
  location: str,
  time_zone: str,
  advanced_settings: GoogleDialogflowCxAgentAdvancedSettings = None,
  avatar_uri: str = None,
  description: str = None,
  enable_spell_correction: typing.Union[bool, IResolvable] = None,
  enable_stackdriver_logging: typing.Union[bool, IResolvable] = None,
  git_integration_settings: GoogleDialogflowCxAgentGitIntegrationSettings = None,
  id: str = None,
  project: str = None,
  security_settings: str = None,
  speech_to_text_settings: GoogleDialogflowCxAgentSpeechToTextSettings = None,
  supported_language_codes: typing.List[str] = None,
  text_to_speech_settings: GoogleDialogflowCxAgentTextToSpeechSettings = None,
  timeouts: GoogleDialogflowCxAgentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the agent, unique within the location. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.location">location</a></code> | <code>str</code> | The name of the location this agent is located in. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.timeZone">time_zone</a></code> | <code>str</code> | The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.advancedSettings">advanced_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings">GoogleDialogflowCxAgentAdvancedSettings</a></code> | advanced_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.avatarUri">avatar_uri</a></code> | <code>str</code> | The URI of the agent's avatar. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.description">description</a></code> | <code>str</code> | The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.enableSpellCorrection">enable_spell_correction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates if automatic spell correction is enabled in detect intent requests. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.enableStackdriverLogging">enable_stackdriver_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.gitIntegrationSettings">git_integration_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings">GoogleDialogflowCxAgentGitIntegrationSettings</a></code> | git_integration_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#id GoogleDialogflowCxAgent#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#project GoogleDialogflowCxAgent#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.securitySettings">security_settings</a></code> | <code>str</code> | Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.speechToTextSettings">speech_to_text_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a></code> | speech_to_text_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.supportedLanguageCodes">supported_language_codes</a></code> | <code>typing.List[str]</code> | The list of all languages supported by this agent (except for the default_language_code). |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.textToSpeechSettings">text_to_speech_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings">GoogleDialogflowCxAgentTextToSpeechSettings</a></code> | text_to_speech_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.defaultLanguageCode"></a>

```python
default_language_code: str
```

- *Type:* str

The default language of the agent as a language tag.

[See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#default_language_code GoogleDialogflowCxAgent#default_language_code}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable name of the agent, unique within the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#display_name GoogleDialogflowCxAgent#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The name of the location this agent is located in.

~> **Note:** The first time you are deploying an Agent in your project you must configure location settings.
This is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.
Another options is to use global location so you don't need to manually configure location settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#location GoogleDialogflowCxAgent#location}

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#time_zone GoogleDialogflowCxAgent#time_zone}

---

##### `advanced_settings`<sup>Optional</sup> <a name="advanced_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.advancedSettings"></a>

```python
advanced_settings: GoogleDialogflowCxAgentAdvancedSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings">GoogleDialogflowCxAgentAdvancedSettings</a>

advanced_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#advanced_settings GoogleDialogflowCxAgent#advanced_settings}

---

##### `avatar_uri`<sup>Optional</sup> <a name="avatar_uri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.avatarUri"></a>

```python
avatar_uri: str
```

- *Type:* str

The URI of the agent's avatar.

Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#avatar_uri GoogleDialogflowCxAgent#avatar_uri}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#description GoogleDialogflowCxAgent#description}

---

##### `enable_spell_correction`<sup>Optional</sup> <a name="enable_spell_correction" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.enableSpellCorrection"></a>

```python
enable_spell_correction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates if automatic spell correction is enabled in detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#enable_spell_correction GoogleDialogflowCxAgent#enable_spell_correction}

---

##### `enable_stackdriver_logging`<sup>Optional</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.enableStackdriverLogging"></a>

```python
enable_stackdriver_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#enable_stackdriver_logging GoogleDialogflowCxAgent#enable_stackdriver_logging}

---

##### `git_integration_settings`<sup>Optional</sup> <a name="git_integration_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.gitIntegrationSettings"></a>

```python
git_integration_settings: GoogleDialogflowCxAgentGitIntegrationSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings">GoogleDialogflowCxAgentGitIntegrationSettings</a>

git_integration_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#git_integration_settings GoogleDialogflowCxAgent#git_integration_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#id GoogleDialogflowCxAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#project GoogleDialogflowCxAgent#project}.

---

##### `security_settings`<sup>Optional</sup> <a name="security_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.securitySettings"></a>

```python
security_settings: str
```

- *Type:* str

Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#security_settings GoogleDialogflowCxAgent#security_settings}

---

##### `speech_to_text_settings`<sup>Optional</sup> <a name="speech_to_text_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.speechToTextSettings"></a>

```python
speech_to_text_settings: GoogleDialogflowCxAgentSpeechToTextSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a>

speech_to_text_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#speech_to_text_settings GoogleDialogflowCxAgent#speech_to_text_settings}

---

##### `supported_language_codes`<sup>Optional</sup> <a name="supported_language_codes" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.supportedLanguageCodes"></a>

```python
supported_language_codes: typing.List[str]
```

- *Type:* typing.List[str]

The list of all languages supported by this agent (except for the default_language_code).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#supported_language_codes GoogleDialogflowCxAgent#supported_language_codes}

---

##### `text_to_speech_settings`<sup>Optional</sup> <a name="text_to_speech_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.textToSpeechSettings"></a>

```python
text_to_speech_settings: GoogleDialogflowCxAgentTextToSpeechSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings">GoogleDialogflowCxAgentTextToSpeechSettings</a>

text_to_speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#text_to_speech_settings GoogleDialogflowCxAgent#text_to_speech_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentConfig.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCxAgentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#timeouts GoogleDialogflowCxAgent#timeouts}

---

### GoogleDialogflowCxAgentGitIntegrationSettings <a name="GoogleDialogflowCxAgentGitIntegrationSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings(
  github_settings: GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings.property.githubSettings">github_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings</a></code> | github_settings block. |

---

##### `github_settings`<sup>Optional</sup> <a name="github_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings.property.githubSettings"></a>

```python
github_settings: GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

github_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#github_settings GoogleDialogflowCxAgent#github_settings}

---

### GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings <a name="GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings(
  access_token: str = None,
  branches: typing.List[str] = None,
  display_name: str = None,
  repository_uri: str = None,
  tracking_branch: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.accessToken">access_token</a></code> | <code>str</code> | The access token used to authenticate the access to the GitHub repository. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.branches">branches</a></code> | <code>typing.List[str]</code> | A list of branches configured to be used from Dialogflow. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.displayName">display_name</a></code> | <code>str</code> | The unique repository display name for the GitHub repository. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.repositoryUri">repository_uri</a></code> | <code>str</code> | The GitHub repository URI related to the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.trackingBranch">tracking_branch</a></code> | <code>str</code> | The branch of the GitHub repository tracked for this agent. |

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

The access token used to authenticate the access to the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#access_token GoogleDialogflowCxAgent#access_token}

---

##### `branches`<sup>Optional</sup> <a name="branches" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.branches"></a>

```python
branches: typing.List[str]
```

- *Type:* typing.List[str]

A list of branches configured to be used from Dialogflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#branches GoogleDialogflowCxAgent#branches}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The unique repository display name for the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#display_name GoogleDialogflowCxAgent#display_name}

---

##### `repository_uri`<sup>Optional</sup> <a name="repository_uri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.repositoryUri"></a>

```python
repository_uri: str
```

- *Type:* str

The GitHub repository URI related to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#repository_uri GoogleDialogflowCxAgent#repository_uri}

---

##### `tracking_branch`<sup>Optional</sup> <a name="tracking_branch" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings.property.trackingBranch"></a>

```python
tracking_branch: str
```

- *Type:* str

The branch of the GitHub repository tracked for this agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#tracking_branch GoogleDialogflowCxAgent#tracking_branch}

---

### GoogleDialogflowCxAgentSpeechToTextSettings <a name="GoogleDialogflowCxAgentSpeechToTextSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings(
  enable_speech_adaptation: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings.property.enableSpeechAdaptation">enable_speech_adaptation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to use speech adaptation for speech recognition. |

---

##### `enable_speech_adaptation`<sup>Optional</sup> <a name="enable_speech_adaptation" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings.property.enableSpeechAdaptation"></a>

```python
enable_speech_adaptation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to use speech adaptation for speech recognition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#enable_speech_adaptation GoogleDialogflowCxAgent#enable_speech_adaptation}

---

### GoogleDialogflowCxAgentTextToSpeechSettings <a name="GoogleDialogflowCxAgentTextToSpeechSettings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings(
  synthesize_speech_configs: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings.property.synthesizeSpeechConfigs">synthesize_speech_configs</a></code> | <code>str</code> | Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig). These settings affect: * The phone gateway synthesize configuration set via Agent.text_to_speech_settings. * How speech is synthesized when invoking session APIs. 'Agent.text_to_speech_settings' only applies if 'OutputAudioConfig.synthesize_speech_config' is not specified. |

---

##### `synthesize_speech_configs`<sup>Optional</sup> <a name="synthesize_speech_configs" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings.property.synthesizeSpeechConfigs"></a>

```python
synthesize_speech_configs: str
```

- *Type:* str

Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig). These settings affect: * The phone gateway synthesize configuration set via Agent.text_to_speech_settings. * How speech is synthesized when invoking session APIs. 'Agent.text_to_speech_settings' only applies if 'OutputAudioConfig.synthesize_speech_config' is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#synthesize_speech_configs GoogleDialogflowCxAgent#synthesize_speech_configs}

---

### GoogleDialogflowCxAgentTimeouts <a name="GoogleDialogflowCxAgentTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#create GoogleDialogflowCxAgent#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#delete GoogleDialogflowCxAgent#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#update GoogleDialogflowCxAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#create GoogleDialogflowCxAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#delete GoogleDialogflowCxAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#update GoogleDialogflowCxAgent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference <a name="GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

---


### GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference <a name="GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetFinishDigit">reset_finish_digit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetMaxDigits">reset_max_digits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_finish_digit` <a name="reset_finish_digit" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetFinishDigit"></a>

```python
def reset_finish_digit() -> None
```

##### `reset_max_digits` <a name="reset_max_digits" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetMaxDigits"></a>

```python
def reset_max_digits() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigitInput">finish_digit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigitsInput">max_digits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigit">finish_digit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigits">max_digits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `finish_digit_input`<sup>Optional</sup> <a name="finish_digit_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigitInput"></a>

```python
finish_digit_input: str
```

- *Type:* str

---

##### `max_digits_input`<sup>Optional</sup> <a name="max_digits_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigitsInput"></a>

```python
max_digits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `finish_digit`<sup>Required</sup> <a name="finish_digit" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigit"></a>

```python
finish_digit: str
```

- *Type:* str

---

##### `max_digits`<sup>Required</sup> <a name="max_digits" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigits"></a>

```python
max_digits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings</a>

---


### GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference <a name="GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resetEnableConsentBasedRedaction">reset_enable_consent_based_redaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resetEnableInteractionLogging">reset_enable_interaction_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resetEnableStackdriverLogging">reset_enable_stackdriver_logging</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_consent_based_redaction` <a name="reset_enable_consent_based_redaction" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resetEnableConsentBasedRedaction"></a>

```python
def reset_enable_consent_based_redaction() -> None
```

##### `reset_enable_interaction_logging` <a name="reset_enable_interaction_logging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resetEnableInteractionLogging"></a>

```python
def reset_enable_interaction_logging() -> None
```

##### `reset_enable_stackdriver_logging` <a name="reset_enable_stackdriver_logging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.resetEnableStackdriverLogging"></a>

```python
def reset_enable_stackdriver_logging() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableConsentBasedRedactionInput">enable_consent_based_redaction_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableInteractionLoggingInput">enable_interaction_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableStackdriverLoggingInput">enable_stackdriver_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableConsentBasedRedaction">enable_consent_based_redaction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableInteractionLogging">enable_interaction_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableStackdriverLogging">enable_stackdriver_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_consent_based_redaction_input`<sup>Optional</sup> <a name="enable_consent_based_redaction_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableConsentBasedRedactionInput"></a>

```python
enable_consent_based_redaction_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_interaction_logging_input`<sup>Optional</sup> <a name="enable_interaction_logging_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableInteractionLoggingInput"></a>

```python
enable_interaction_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_stackdriver_logging_input`<sup>Optional</sup> <a name="enable_stackdriver_logging_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableStackdriverLoggingInput"></a>

```python
enable_stackdriver_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_consent_based_redaction`<sup>Required</sup> <a name="enable_consent_based_redaction" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableConsentBasedRedaction"></a>

```python
enable_consent_based_redaction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_interaction_logging`<sup>Required</sup> <a name="enable_interaction_logging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableInteractionLogging"></a>

```python
enable_interaction_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_stackdriver_logging`<sup>Required</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.enableStackdriverLogging"></a>

```python
enable_stackdriver_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings</a>

---


### GoogleDialogflowCxAgentAdvancedSettingsOutputReference <a name="GoogleDialogflowCxAgentAdvancedSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putAudioExportGcsDestination">put_audio_export_gcs_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings">put_dtmf_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putLoggingSettings">put_logging_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putSpeechSettings">put_speech_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resetAudioExportGcsDestination">reset_audio_export_gcs_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resetDtmfSettings">reset_dtmf_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resetLoggingSettings">reset_logging_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resetSpeechSettings">reset_speech_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audio_export_gcs_destination` <a name="put_audio_export_gcs_destination" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putAudioExportGcsDestination"></a>

```python
def put_audio_export_gcs_destination(
  uri: str = None
) -> None
```

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putAudioExportGcsDestination.parameter.uri"></a>

- *Type:* str

The Google Cloud Storage URI for the exported objects.

Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.
Format: gs://bucket/object-name-or-prefix

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#uri GoogleDialogflowCxAgent#uri}

---

##### `put_dtmf_settings` <a name="put_dtmf_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings"></a>

```python
def put_dtmf_settings(
  enabled: typing.Union[bool, IResolvable] = None,
  finish_digit: str = None,
  max_digits: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, incoming audio is processed for DTMF (dual tone multi frequency) events.

For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#enabled GoogleDialogflowCxAgent#enabled}

---

###### `finish_digit`<sup>Optional</sup> <a name="finish_digit" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings.parameter.finishDigit"></a>

- *Type:* str

The digit that terminates a DTMF digit sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#finish_digit GoogleDialogflowCxAgent#finish_digit}

---

###### `max_digits`<sup>Optional</sup> <a name="max_digits" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings.parameter.maxDigits"></a>

- *Type:* typing.Union[int, float]

Max length of DTMF digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#max_digits GoogleDialogflowCxAgent#max_digits}

---

##### `put_logging_settings` <a name="put_logging_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putLoggingSettings"></a>

```python
def put_logging_settings(
  enable_consent_based_redaction: typing.Union[bool, IResolvable] = None,
  enable_interaction_logging: typing.Union[bool, IResolvable] = None,
  enable_stackdriver_logging: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_consent_based_redaction`<sup>Optional</sup> <a name="enable_consent_based_redaction" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putLoggingSettings.parameter.enableConsentBasedRedaction"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables consent-based end-user input redaction, if true, a pre-defined session parameter **$session.params.conversation-redaction** will be used to determine if the utterance should be redacted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#enable_consent_based_redaction GoogleDialogflowCxAgent#enable_consent_based_redaction}

---

###### `enable_interaction_logging`<sup>Optional</sup> <a name="enable_interaction_logging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putLoggingSettings.parameter.enableInteractionLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables DF Interaction logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#enable_interaction_logging GoogleDialogflowCxAgent#enable_interaction_logging}

---

###### `enable_stackdriver_logging`<sup>Optional</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putLoggingSettings.parameter.enableStackdriverLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Google Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#enable_stackdriver_logging GoogleDialogflowCxAgent#enable_stackdriver_logging}

---

##### `put_speech_settings` <a name="put_speech_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putSpeechSettings"></a>

```python
def put_speech_settings(
  endpointer_sensitivity: typing.Union[int, float] = None,
  models: typing.Mapping[str] = None,
  no_speech_timeout: str = None,
  use_timeout_based_endpointing: typing.Union[bool, IResolvable] = None
) -> None
```

###### `endpointer_sensitivity`<sup>Optional</sup> <a name="endpointer_sensitivity" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putSpeechSettings.parameter.endpointerSensitivity"></a>

- *Type:* typing.Union[int, float]

Sensitivity of the speech model that detects the end of speech. Scale from 0 to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#endpointer_sensitivity GoogleDialogflowCxAgent#endpointer_sensitivity}

---

###### `models`<sup>Optional</sup> <a name="models" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putSpeechSettings.parameter.models"></a>

- *Type:* typing.Mapping[str]

Mapping from language to Speech-to-Text model.

The mapped Speech-to-Text model will be selected for requests from its corresponding language. For more information, see [Speech models](https://cloud.google.com/dialogflow/cx/docs/concept/speech-models).
An object containing a list of **"key": value** pairs. Example: **{ "name": "wrench", "mass": "1.3kg", "count": "3" }**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#models GoogleDialogflowCxAgent#models}

---

###### `no_speech_timeout`<sup>Optional</sup> <a name="no_speech_timeout" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putSpeechSettings.parameter.noSpeechTimeout"></a>

- *Type:* str

Timeout before detecting no speech. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#no_speech_timeout GoogleDialogflowCxAgent#no_speech_timeout}

---

###### `use_timeout_based_endpointing`<sup>Optional</sup> <a name="use_timeout_based_endpointing" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.putSpeechSettings.parameter.useTimeoutBasedEndpointing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use timeout based endpointing, interpreting endpointer sensitivy as seconds of timeout value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#use_timeout_based_endpointing GoogleDialogflowCxAgent#use_timeout_based_endpointing}

---

##### `reset_audio_export_gcs_destination` <a name="reset_audio_export_gcs_destination" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resetAudioExportGcsDestination"></a>

```python
def reset_audio_export_gcs_destination() -> None
```

##### `reset_dtmf_settings` <a name="reset_dtmf_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resetDtmfSettings"></a>

```python
def reset_dtmf_settings() -> None
```

##### `reset_logging_settings` <a name="reset_logging_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resetLoggingSettings"></a>

```python
def reset_logging_settings() -> None
```

##### `reset_speech_settings` <a name="reset_speech_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.resetSpeechSettings"></a>

```python
def reset_speech_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestination">audio_export_gcs_destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettings">dtmf_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.loggingSettings">logging_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.speechSettings">speech_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestinationInput">audio_export_gcs_destination_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettingsInput">dtmf_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.loggingSettingsInput">logging_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.speechSettingsInput">speech_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings">GoogleDialogflowCxAgentAdvancedSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_export_gcs_destination`<sup>Required</sup> <a name="audio_export_gcs_destination" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestination"></a>

```python
audio_export_gcs_destination: GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference</a>

---

##### `dtmf_settings`<sup>Required</sup> <a name="dtmf_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettings"></a>

```python
dtmf_settings: GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference</a>

---

##### `logging_settings`<sup>Required</sup> <a name="logging_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.loggingSettings"></a>

```python
logging_settings: GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference</a>

---

##### `speech_settings`<sup>Required</sup> <a name="speech_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.speechSettings"></a>

```python
speech_settings: GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference</a>

---

##### `audio_export_gcs_destination_input`<sup>Optional</sup> <a name="audio_export_gcs_destination_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestinationInput"></a>

```python
audio_export_gcs_destination_input: GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

---

##### `dtmf_settings_input`<sup>Optional</sup> <a name="dtmf_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettingsInput"></a>

```python
dtmf_settings_input: GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings">GoogleDialogflowCxAgentAdvancedSettingsDtmfSettings</a>

---

##### `logging_settings_input`<sup>Optional</sup> <a name="logging_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.loggingSettingsInput"></a>

```python
logging_settings_input: GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings">GoogleDialogflowCxAgentAdvancedSettingsLoggingSettings</a>

---

##### `speech_settings_input`<sup>Optional</sup> <a name="speech_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.speechSettingsInput"></a>

```python
speech_settings_input: GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxAgentAdvancedSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettings">GoogleDialogflowCxAgentAdvancedSettings</a>

---


### GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference <a name="GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resetEndpointerSensitivity">reset_endpointer_sensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resetModels">reset_models</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resetNoSpeechTimeout">reset_no_speech_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resetUseTimeoutBasedEndpointing">reset_use_timeout_based_endpointing</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpointer_sensitivity` <a name="reset_endpointer_sensitivity" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resetEndpointerSensitivity"></a>

```python
def reset_endpointer_sensitivity() -> None
```

##### `reset_models` <a name="reset_models" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resetModels"></a>

```python
def reset_models() -> None
```

##### `reset_no_speech_timeout` <a name="reset_no_speech_timeout" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resetNoSpeechTimeout"></a>

```python
def reset_no_speech_timeout() -> None
```

##### `reset_use_timeout_based_endpointing` <a name="reset_use_timeout_based_endpointing" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.resetUseTimeoutBasedEndpointing"></a>

```python
def reset_use_timeout_based_endpointing() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.endpointerSensitivityInput">endpointer_sensitivity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.modelsInput">models_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.noSpeechTimeoutInput">no_speech_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.useTimeoutBasedEndpointingInput">use_timeout_based_endpointing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.endpointerSensitivity">endpointer_sensitivity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.models">models</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.noSpeechTimeout">no_speech_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.useTimeoutBasedEndpointing">use_timeout_based_endpointing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpointer_sensitivity_input`<sup>Optional</sup> <a name="endpointer_sensitivity_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.endpointerSensitivityInput"></a>

```python
endpointer_sensitivity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `models_input`<sup>Optional</sup> <a name="models_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.modelsInput"></a>

```python
models_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `no_speech_timeout_input`<sup>Optional</sup> <a name="no_speech_timeout_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.noSpeechTimeoutInput"></a>

```python
no_speech_timeout_input: str
```

- *Type:* str

---

##### `use_timeout_based_endpointing_input`<sup>Optional</sup> <a name="use_timeout_based_endpointing_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.useTimeoutBasedEndpointingInput"></a>

```python
use_timeout_based_endpointing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpointer_sensitivity`<sup>Required</sup> <a name="endpointer_sensitivity" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.endpointerSensitivity"></a>

```python
endpointer_sensitivity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.models"></a>

```python
models: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `no_speech_timeout`<sup>Required</sup> <a name="no_speech_timeout" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.noSpeechTimeout"></a>

```python
no_speech_timeout: str
```

- *Type:* str

---

##### `use_timeout_based_endpointing`<sup>Required</sup> <a name="use_timeout_based_endpointing" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.useTimeoutBasedEndpointing"></a>

```python
use_timeout_based_endpointing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings">GoogleDialogflowCxAgentAdvancedSettingsSpeechSettings</a>

---


### GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference <a name="GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetBranches">reset_branches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetRepositoryUri">reset_repository_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetTrackingBranch">reset_tracking_branch</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_token` <a name="reset_access_token" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_branches` <a name="reset_branches" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetBranches"></a>

```python
def reset_branches() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_repository_uri` <a name="reset_repository_uri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetRepositoryUri"></a>

```python
def reset_repository_uri() -> None
```

##### `reset_tracking_branch` <a name="reset_tracking_branch" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetTrackingBranch"></a>

```python
def reset_tracking_branch() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branchesInput">branches_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUriInput">repository_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranchInput">tracking_branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branches">branches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUri">repository_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranch">tracking_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `branches_input`<sup>Optional</sup> <a name="branches_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branchesInput"></a>

```python
branches_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `repository_uri_input`<sup>Optional</sup> <a name="repository_uri_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUriInput"></a>

```python
repository_uri_input: str
```

- *Type:* str

---

##### `tracking_branch_input`<sup>Optional</sup> <a name="tracking_branch_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranchInput"></a>

```python
tracking_branch_input: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branches"></a>

```python
branches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `repository_uri`<sup>Required</sup> <a name="repository_uri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUri"></a>

```python
repository_uri: str
```

- *Type:* str

---

##### `tracking_branch`<sup>Required</sup> <a name="tracking_branch" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranch"></a>

```python
tracking_branch: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

---


### GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference <a name="GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings">put_github_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.resetGithubSettings">reset_github_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_github_settings` <a name="put_github_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings"></a>

```python
def put_github_settings(
  access_token: str = None,
  branches: typing.List[str] = None,
  display_name: str = None,
  repository_uri: str = None,
  tracking_branch: str = None
) -> None
```

###### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings.parameter.accessToken"></a>

- *Type:* str

The access token used to authenticate the access to the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#access_token GoogleDialogflowCxAgent#access_token}

---

###### `branches`<sup>Optional</sup> <a name="branches" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings.parameter.branches"></a>

- *Type:* typing.List[str]

A list of branches configured to be used from Dialogflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#branches GoogleDialogflowCxAgent#branches}

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings.parameter.displayName"></a>

- *Type:* str

The unique repository display name for the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#display_name GoogleDialogflowCxAgent#display_name}

---

###### `repository_uri`<sup>Optional</sup> <a name="repository_uri" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings.parameter.repositoryUri"></a>

- *Type:* str

The GitHub repository URI related to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#repository_uri GoogleDialogflowCxAgent#repository_uri}

---

###### `tracking_branch`<sup>Optional</sup> <a name="tracking_branch" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings.parameter.trackingBranch"></a>

- *Type:* str

The branch of the GitHub repository tracked for this agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_cx_agent#tracking_branch GoogleDialogflowCxAgent#tracking_branch}

---

##### `reset_github_settings` <a name="reset_github_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.resetGithubSettings"></a>

```python
def reset_github_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettings">github_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettingsInput">github_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings">GoogleDialogflowCxAgentGitIntegrationSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `github_settings`<sup>Required</sup> <a name="github_settings" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettings"></a>

```python
github_settings: GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference</a>

---

##### `github_settings_input`<sup>Optional</sup> <a name="github_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettingsInput"></a>

```python
github_settings_input: GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings">GoogleDialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxAgentGitIntegrationSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentGitIntegrationSettings">GoogleDialogflowCxAgentGitIntegrationSettings</a>

---


### GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference <a name="GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.resetEnableSpeechAdaptation">reset_enable_speech_adaptation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_speech_adaptation` <a name="reset_enable_speech_adaptation" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.resetEnableSpeechAdaptation"></a>

```python
def reset_enable_speech_adaptation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptationInput">enable_speech_adaptation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptation">enable_speech_adaptation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_speech_adaptation_input`<sup>Optional</sup> <a name="enable_speech_adaptation_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptationInput"></a>

```python
enable_speech_adaptation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_speech_adaptation`<sup>Required</sup> <a name="enable_speech_adaptation" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptation"></a>

```python
enable_speech_adaptation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxAgentSpeechToTextSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentSpeechToTextSettings">GoogleDialogflowCxAgentSpeechToTextSettings</a>

---


### GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference <a name="GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs">reset_synthesize_speech_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_synthesize_speech_configs` <a name="reset_synthesize_speech_configs" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs"></a>

```python
def reset_synthesize_speech_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput">synthesize_speech_configs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs">synthesize_speech_configs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings">GoogleDialogflowCxAgentTextToSpeechSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `synthesize_speech_configs_input`<sup>Optional</sup> <a name="synthesize_speech_configs_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput"></a>

```python
synthesize_speech_configs_input: str
```

- *Type:* str

---

##### `synthesize_speech_configs`<sup>Required</sup> <a name="synthesize_speech_configs" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs"></a>

```python
synthesize_speech_configs: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxAgentTextToSpeechSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTextToSpeechSettings">GoogleDialogflowCxAgentTextToSpeechSettings</a>

---


### GoogleDialogflowCxAgentTimeoutsOutputReference <a name="GoogleDialogflowCxAgentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_agent

googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxAgentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxAgent.GoogleDialogflowCxAgentTimeouts">GoogleDialogflowCxAgentTimeouts</a>]

---



