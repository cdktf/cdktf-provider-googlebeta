# `googleDialogflowIntent` Submodule <a name="`googleDialogflowIntent` Submodule" id="@cdktf/provider-google-beta.googleDialogflowIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowIntent <a name="GoogleDialogflowIntent" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent google_dialogflow_intent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_intent

googleDialogflowIntent.GoogleDialogflowIntent(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  action: str = None,
  default_response_platforms: typing.List[str] = None,
  events: typing.List[str] = None,
  id: str = None,
  input_context_names: typing.List[str] = None,
  is_fallback: typing.Union[bool, IResolvable] = None,
  ml_disabled: typing.Union[bool, IResolvable] = None,
  parent_followup_intent_name: str = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  reset_contexts: typing.Union[bool, IResolvable] = None,
  timeouts: GoogleDialogflowIntentTimeouts = None,
  webhook_state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The name of this intent to be displayed on the console. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.action">action</a></code> | <code>str</code> | The name of the action associated with the intent. Note: The action name must not contain whitespaces. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.defaultResponsePlatforms">default_response_platforms</a></code> | <code>typing.List[str]</code> | The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.events">events</a></code> | <code>typing.List[str]</code> | The collection of event names that trigger the intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#id GoogleDialogflowIntent#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.inputContextNames">input_context_names</a></code> | <code>typing.List[str]</code> | The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.isFallback">is_fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether this is a fallback intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.mlDisabled">ml_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether Machine Learning is disabled for the intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.parentFollowupIntentName">parent_followup_intent_name</a></code> | <code>str</code> | The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of this intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#project GoogleDialogflowIntent#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.resetContexts">reset_contexts</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether to delete all contexts in the current session when this intent is matched. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.webhookState">webhook_state</a></code> | <code>str</code> | Indicates whether webhooks are enabled for the intent. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.displayName"></a>

- *Type:* str

The name of this intent to be displayed on the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#display_name GoogleDialogflowIntent#display_name}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.action"></a>

- *Type:* str

The name of the action associated with the intent. Note: The action name must not contain whitespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#action GoogleDialogflowIntent#action}

---

##### `default_response_platforms`<sup>Optional</sup> <a name="default_response_platforms" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.defaultResponsePlatforms"></a>

- *Type:* typing.List[str]

The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#default_response_platforms GoogleDialogflowIntent#default_response_platforms}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.events"></a>

- *Type:* typing.List[str]

The collection of event names that trigger the intent.

If the collection of input contexts is not empty, all of
the contexts must be present in the active user session for an event to trigger this intent. See the
[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#events GoogleDialogflowIntent#events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#id GoogleDialogflowIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_context_names`<sup>Optional</sup> <a name="input_context_names" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.inputContextNames"></a>

- *Type:* typing.List[str]

The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#input_context_names GoogleDialogflowIntent#input_context_names}

---

##### `is_fallback`<sup>Optional</sup> <a name="is_fallback" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.isFallback"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether this is a fallback intent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#is_fallback GoogleDialogflowIntent#is_fallback}

---

##### `ml_disabled`<sup>Optional</sup> <a name="ml_disabled" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.mlDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether Machine Learning is disabled for the intent.

Note: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML
ONLY match mode. Also, auto-markup in the UI is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#ml_disabled GoogleDialogflowIntent#ml_disabled}

---

##### `parent_followup_intent_name`<sup>Optional</sup> <a name="parent_followup_intent_name" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.parentFollowupIntentName"></a>

- *Type:* str

The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#parent_followup_intent_name GoogleDialogflowIntent#parent_followup_intent_name}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

The priority of this intent.

Higher numbers represent higher priorities.

* If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds
  to the Normal priority in the console.
* If the supplied value is negative, the intent is ignored in runtime detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#priority GoogleDialogflowIntent#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#project GoogleDialogflowIntent#project}.

---

##### `reset_contexts`<sup>Optional</sup> <a name="reset_contexts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.resetContexts"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to delete all contexts in the current session when this intent is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#reset_contexts GoogleDialogflowIntent#reset_contexts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#timeouts GoogleDialogflowIntent#timeouts}

---

##### `webhook_state`<sup>Optional</sup> <a name="webhook_state" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.webhookState"></a>

- *Type:* str

Indicates whether webhooks are enabled for the intent.

* WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.
* WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot
  filling prompt is forwarded to the webhook. Possible values: ["WEBHOOK_STATE_ENABLED", "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#webhook_state GoogleDialogflowIntent#webhook_state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetDefaultResponsePlatforms">reset_default_response_platforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetEvents">reset_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetInputContextNames">reset_input_context_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetIsFallback">reset_is_fallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetMlDisabled">reset_ml_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetParentFollowupIntentName">reset_parent_followup_intent_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetResetContexts">reset_reset_contexts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetWebhookState">reset_webhook_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#create GoogleDialogflowIntent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#delete GoogleDialogflowIntent#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#update GoogleDialogflowIntent#update}.

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_default_response_platforms` <a name="reset_default_response_platforms" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetDefaultResponsePlatforms"></a>

```python
def reset_default_response_platforms() -> None
```

##### `reset_events` <a name="reset_events" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetEvents"></a>

```python
def reset_events() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input_context_names` <a name="reset_input_context_names" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetInputContextNames"></a>

```python
def reset_input_context_names() -> None
```

##### `reset_is_fallback` <a name="reset_is_fallback" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetIsFallback"></a>

```python
def reset_is_fallback() -> None
```

##### `reset_ml_disabled` <a name="reset_ml_disabled" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetMlDisabled"></a>

```python
def reset_ml_disabled() -> None
```

##### `reset_parent_followup_intent_name` <a name="reset_parent_followup_intent_name" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetParentFollowupIntentName"></a>

```python
def reset_parent_followup_intent_name() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_reset_contexts` <a name="reset_reset_contexts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetResetContexts"></a>

```python
def reset_reset_contexts() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_webhook_state` <a name="reset_webhook_state" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetWebhookState"></a>

```python
def reset_webhook_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDialogflowIntent resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_intent

googleDialogflowIntent.GoogleDialogflowIntent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_intent

googleDialogflowIntent.GoogleDialogflowIntent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_intent

googleDialogflowIntent.GoogleDialogflowIntent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_intent

googleDialogflowIntent.GoogleDialogflowIntent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDialogflowIntent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDialogflowIntent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDialogflowIntent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowIntent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.followupIntentInfo">followup_intent_info</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList">GoogleDialogflowIntentFollowupIntentInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.rootFollowupIntentName">root_followup_intent_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference">GoogleDialogflowIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.defaultResponsePlatformsInput">default_response_platforms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.inputContextNamesInput">input_context_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.isFallbackInput">is_fallback_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.mlDisabledInput">ml_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.parentFollowupIntentNameInput">parent_followup_intent_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.resetContextsInput">reset_contexts_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.webhookStateInput">webhook_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.defaultResponsePlatforms">default_response_platforms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.inputContextNames">input_context_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.isFallback">is_fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.mlDisabled">ml_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.parentFollowupIntentName">parent_followup_intent_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.resetContexts">reset_contexts</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.webhookState">webhook_state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `followup_intent_info`<sup>Required</sup> <a name="followup_intent_info" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.followupIntentInfo"></a>

```python
followup_intent_info: GoogleDialogflowIntentFollowupIntentInfoList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList">GoogleDialogflowIntentFollowupIntentInfoList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `root_followup_intent_name`<sup>Required</sup> <a name="root_followup_intent_name" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.rootFollowupIntentName"></a>

```python
root_followup_intent_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.timeouts"></a>

```python
timeouts: GoogleDialogflowIntentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference">GoogleDialogflowIntentTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `default_response_platforms_input`<sup>Optional</sup> <a name="default_response_platforms_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.defaultResponsePlatformsInput"></a>

```python
default_response_platforms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_context_names_input`<sup>Optional</sup> <a name="input_context_names_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.inputContextNamesInput"></a>

```python
input_context_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_fallback_input`<sup>Optional</sup> <a name="is_fallback_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.isFallbackInput"></a>

```python
is_fallback_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ml_disabled_input`<sup>Optional</sup> <a name="ml_disabled_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.mlDisabledInput"></a>

```python
ml_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `parent_followup_intent_name_input`<sup>Optional</sup> <a name="parent_followup_intent_name_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.parentFollowupIntentNameInput"></a>

```python
parent_followup_intent_name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `reset_contexts_input`<sup>Optional</sup> <a name="reset_contexts_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.resetContextsInput"></a>

```python
reset_contexts_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDialogflowIntentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a>]

---

##### `webhook_state_input`<sup>Optional</sup> <a name="webhook_state_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.webhookStateInput"></a>

```python
webhook_state_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `default_response_platforms`<sup>Required</sup> <a name="default_response_platforms" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.defaultResponsePlatforms"></a>

```python
default_response_platforms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_context_names`<sup>Required</sup> <a name="input_context_names" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.inputContextNames"></a>

```python
input_context_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_fallback`<sup>Required</sup> <a name="is_fallback" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.isFallback"></a>

```python
is_fallback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ml_disabled`<sup>Required</sup> <a name="ml_disabled" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.mlDisabled"></a>

```python
ml_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `parent_followup_intent_name`<sup>Required</sup> <a name="parent_followup_intent_name" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.parentFollowupIntentName"></a>

```python
parent_followup_intent_name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `reset_contexts`<sup>Required</sup> <a name="reset_contexts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.resetContexts"></a>

```python
reset_contexts: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `webhook_state`<sup>Required</sup> <a name="webhook_state" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.webhookState"></a>

```python
webhook_state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowIntentConfig <a name="GoogleDialogflowIntentConfig" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_intent

googleDialogflowIntent.GoogleDialogflowIntentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  action: str = None,
  default_response_platforms: typing.List[str] = None,
  events: typing.List[str] = None,
  id: str = None,
  input_context_names: typing.List[str] = None,
  is_fallback: typing.Union[bool, IResolvable] = None,
  ml_disabled: typing.Union[bool, IResolvable] = None,
  parent_followup_intent_name: str = None,
  priority: typing.Union[int, float] = None,
  project: str = None,
  reset_contexts: typing.Union[bool, IResolvable] = None,
  timeouts: GoogleDialogflowIntentTimeouts = None,
  webhook_state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.displayName">display_name</a></code> | <code>str</code> | The name of this intent to be displayed on the console. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.action">action</a></code> | <code>str</code> | The name of the action associated with the intent. Note: The action name must not contain whitespaces. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.defaultResponsePlatforms">default_response_platforms</a></code> | <code>typing.List[str]</code> | The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.events">events</a></code> | <code>typing.List[str]</code> | The collection of event names that trigger the intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#id GoogleDialogflowIntent#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.inputContextNames">input_context_names</a></code> | <code>typing.List[str]</code> | The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.isFallback">is_fallback</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether this is a fallback intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.mlDisabled">ml_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether Machine Learning is disabled for the intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.parentFollowupIntentName">parent_followup_intent_name</a></code> | <code>str</code> | The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The priority of this intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#project GoogleDialogflowIntent#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.resetContexts">reset_contexts</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether to delete all contexts in the current session when this intent is matched. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.webhookState">webhook_state</a></code> | <code>str</code> | Indicates whether webhooks are enabled for the intent. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The name of this intent to be displayed on the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#display_name GoogleDialogflowIntent#display_name}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The name of the action associated with the intent. Note: The action name must not contain whitespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#action GoogleDialogflowIntent#action}

---

##### `default_response_platforms`<sup>Optional</sup> <a name="default_response_platforms" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.defaultResponsePlatforms"></a>

```python
default_response_platforms: typing.List[str]
```

- *Type:* typing.List[str]

The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#default_response_platforms GoogleDialogflowIntent#default_response_platforms}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

The collection of event names that trigger the intent.

If the collection of input contexts is not empty, all of
the contexts must be present in the active user session for an event to trigger this intent. See the
[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#events GoogleDialogflowIntent#events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#id GoogleDialogflowIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_context_names`<sup>Optional</sup> <a name="input_context_names" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.inputContextNames"></a>

```python
input_context_names: typing.List[str]
```

- *Type:* typing.List[str]

The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#input_context_names GoogleDialogflowIntent#input_context_names}

---

##### `is_fallback`<sup>Optional</sup> <a name="is_fallback" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.isFallback"></a>

```python
is_fallback: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether this is a fallback intent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#is_fallback GoogleDialogflowIntent#is_fallback}

---

##### `ml_disabled`<sup>Optional</sup> <a name="ml_disabled" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.mlDisabled"></a>

```python
ml_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether Machine Learning is disabled for the intent.

Note: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML
ONLY match mode. Also, auto-markup in the UI is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#ml_disabled GoogleDialogflowIntent#ml_disabled}

---

##### `parent_followup_intent_name`<sup>Optional</sup> <a name="parent_followup_intent_name" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.parentFollowupIntentName"></a>

```python
parent_followup_intent_name: str
```

- *Type:* str

The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#parent_followup_intent_name GoogleDialogflowIntent#parent_followup_intent_name}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The priority of this intent.

Higher numbers represent higher priorities.

* If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds
  to the Normal priority in the console.
* If the supplied value is negative, the intent is ignored in runtime detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#priority GoogleDialogflowIntent#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#project GoogleDialogflowIntent#project}.

---

##### `reset_contexts`<sup>Optional</sup> <a name="reset_contexts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.resetContexts"></a>

```python
reset_contexts: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether to delete all contexts in the current session when this intent is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#reset_contexts GoogleDialogflowIntent#reset_contexts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.timeouts"></a>

```python
timeouts: GoogleDialogflowIntentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#timeouts GoogleDialogflowIntent#timeouts}

---

##### `webhook_state`<sup>Optional</sup> <a name="webhook_state" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.webhookState"></a>

```python
webhook_state: str
```

- *Type:* str

Indicates whether webhooks are enabled for the intent.

* WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.
* WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot
  filling prompt is forwarded to the webhook. Possible values: ["WEBHOOK_STATE_ENABLED", "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#webhook_state GoogleDialogflowIntent#webhook_state}

---

### GoogleDialogflowIntentFollowupIntentInfo <a name="GoogleDialogflowIntentFollowupIntentInfo" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_intent

googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfo()
```


### GoogleDialogflowIntentTimeouts <a name="GoogleDialogflowIntentTimeouts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_intent

googleDialogflowIntent.GoogleDialogflowIntentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#create GoogleDialogflowIntent#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#delete GoogleDialogflowIntent#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#update GoogleDialogflowIntent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#create GoogleDialogflowIntent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#delete GoogleDialogflowIntent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_dialogflow_intent#update GoogleDialogflowIntent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowIntentFollowupIntentInfoList <a name="GoogleDialogflowIntentFollowupIntentInfoList" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_intent

googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowIntentFollowupIntentInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDialogflowIntentFollowupIntentInfoOutputReference <a name="GoogleDialogflowIntentFollowupIntentInfoOutputReference" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_intent

googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.followupIntentName">followup_intent_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.parentFollowupIntentName">parent_followup_intent_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfo">GoogleDialogflowIntentFollowupIntentInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `followup_intent_name`<sup>Required</sup> <a name="followup_intent_name" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.followupIntentName"></a>

```python
followup_intent_name: str
```

- *Type:* str

---

##### `parent_followup_intent_name`<sup>Required</sup> <a name="parent_followup_intent_name" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.parentFollowupIntentName"></a>

```python
parent_followup_intent_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowIntentFollowupIntentInfo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfo">GoogleDialogflowIntentFollowupIntentInfo</a>

---


### GoogleDialogflowIntentTimeoutsOutputReference <a name="GoogleDialogflowIntentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_intent

googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowIntentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a>]

---



