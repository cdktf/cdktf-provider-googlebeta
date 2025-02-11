# `googleDialogflowCxFlow` Submodule <a name="`googleDialogflowCxFlow` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxFlow <a name="GoogleDialogflowCxFlow" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow google_dialogflow_cx_flow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlow(
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
  advanced_settings: GoogleDialogflowCxFlowAdvancedSettings = None,
  description: str = None,
  event_handlers: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlers]] = None,
  id: str = None,
  is_default_start_flow: typing.Union[bool, IResolvable] = None,
  language_code: str = None,
  nlu_settings: GoogleDialogflowCxFlowNluSettings = None,
  parent: str = None,
  timeouts: GoogleDialogflowCxFlowTimeouts = None,
  transition_route_groups: typing.List[str] = None,
  transition_routes: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutes]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the flow. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.advancedSettings">advanced_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings">GoogleDialogflowCxFlowAdvancedSettings</a></code> | advanced_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.eventHandlers">event_handlers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers">GoogleDialogflowCxFlowEventHandlers</a>]]</code> | event_handlers block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#id GoogleDialogflowCxFlow#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.isDefaultStartFlow">is_default_start_flow</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Marks this as the [Default Start Flow](https://cloud.google.com/dialogflow/cx/docs/concept/flow#start) for an agent. When you create an agent, the Default Start Flow is created automatically. The Default Start Flow cannot be deleted; deleting the 'google_dialogflow_cx_flow' resource does nothing to the underlying GCP resources. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.languageCode">language_code</a></code> | <code>str</code> | The language of the following fields in flow: Flow.event_handlers.trigger_fulfillment.messages Flow.event_handlers.trigger_fulfillment.conditional_cases Flow.transition_routes.trigger_fulfillment.messages Flow.transition_routes.trigger_fulfillment.conditional_cases If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.nluSettings">nlu_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings">GoogleDialogflowCxFlowNluSettings</a></code> | nlu_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts">GoogleDialogflowCxFlowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.transitionRouteGroups">transition_route_groups</a></code> | <code>typing.List[str]</code> | A flow's transition route group serve two purposes: They are responsible for matching the user's first utterances in the flow. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.transitionRoutes">transition_routes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes">GoogleDialogflowCxFlowTransitionRoutes</a>]]</code> | transition_routes block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.displayName"></a>

- *Type:* str

The human-readable name of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#display_name GoogleDialogflowCxFlow#display_name}

---

##### `advanced_settings`<sup>Optional</sup> <a name="advanced_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.advancedSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings">GoogleDialogflowCxFlowAdvancedSettings</a>

advanced_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#advanced_settings GoogleDialogflowCxFlow#advanced_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.description"></a>

- *Type:* str

The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#description GoogleDialogflowCxFlow#description}

---

##### `event_handlers`<sup>Optional</sup> <a name="event_handlers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.eventHandlers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers">GoogleDialogflowCxFlowEventHandlers</a>]]

event_handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#event_handlers GoogleDialogflowCxFlow#event_handlers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#id GoogleDialogflowCxFlow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_default_start_flow`<sup>Optional</sup> <a name="is_default_start_flow" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.isDefaultStartFlow"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Marks this as the [Default Start Flow](https://cloud.google.com/dialogflow/cx/docs/concept/flow#start) for an agent. When you create an agent, the Default Start Flow is created automatically. The Default Start Flow cannot be deleted; deleting the 'google_dialogflow_cx_flow' resource does nothing to the underlying GCP resources.

~> Avoid having multiple 'google_dialogflow_cx_flow' resources linked to the same agent with 'is_default_start_flow = true' because they will compete to control a single Default Start Flow resource in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#is_default_start_flow GoogleDialogflowCxFlow#is_default_start_flow}

---

##### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.languageCode"></a>

- *Type:* str

The language of the following fields in flow: Flow.event_handlers.trigger_fulfillment.messages Flow.event_handlers.trigger_fulfillment.conditional_cases Flow.transition_routes.trigger_fulfillment.messages Flow.transition_routes.trigger_fulfillment.conditional_cases If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#language_code GoogleDialogflowCxFlow#language_code}

---

##### `nlu_settings`<sup>Optional</sup> <a name="nlu_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.nluSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings">GoogleDialogflowCxFlowNluSettings</a>

nlu_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#nlu_settings GoogleDialogflowCxFlow#nlu_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.parent"></a>

- *Type:* str

The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#parent GoogleDialogflowCxFlow#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts">GoogleDialogflowCxFlowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#timeouts GoogleDialogflowCxFlow#timeouts}

---

##### `transition_route_groups`<sup>Optional</sup> <a name="transition_route_groups" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.transitionRouteGroups"></a>

- *Type:* typing.List[str]

A flow's transition route group serve two purposes: They are responsible for matching the user's first utterances in the flow.

They are inherited by every page's [transition route groups][Page.transition_route_groups]. Transition route groups defined in the page have higher priority than those defined in the flow.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#transition_route_groups GoogleDialogflowCxFlow#transition_route_groups}

---

##### `transition_routes`<sup>Optional</sup> <a name="transition_routes" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.Initializer.parameter.transitionRoutes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes">GoogleDialogflowCxFlowTransitionRoutes</a>]]

transition_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#transition_routes GoogleDialogflowCxFlow#transition_routes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putAdvancedSettings">put_advanced_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putEventHandlers">put_event_handlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putNluSettings">put_nlu_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putTransitionRoutes">put_transition_routes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetAdvancedSettings">reset_advanced_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetEventHandlers">reset_event_handlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetIsDefaultStartFlow">reset_is_default_start_flow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetLanguageCode">reset_language_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetNluSettings">reset_nlu_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetTransitionRouteGroups">reset_transition_route_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetTransitionRoutes">reset_transition_routes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_advanced_settings` <a name="put_advanced_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putAdvancedSettings"></a>

```python
def put_advanced_settings(
  audio_export_gcs_destination: GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination = None,
  dtmf_settings: GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings = None,
  logging_settings: GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings = None,
  speech_settings: GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings = None
) -> None
```

###### `audio_export_gcs_destination`<sup>Optional</sup> <a name="audio_export_gcs_destination" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putAdvancedSettings.parameter.audioExportGcsDestination"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination</a>

audio_export_gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#audio_export_gcs_destination GoogleDialogflowCxFlow#audio_export_gcs_destination}

---

###### `dtmf_settings`<sup>Optional</sup> <a name="dtmf_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putAdvancedSettings.parameter.dtmfSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings">GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings</a>

dtmf_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#dtmf_settings GoogleDialogflowCxFlow#dtmf_settings}

---

###### `logging_settings`<sup>Optional</sup> <a name="logging_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putAdvancedSettings.parameter.loggingSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings">GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings</a>

logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#logging_settings GoogleDialogflowCxFlow#logging_settings}

---

###### `speech_settings`<sup>Optional</sup> <a name="speech_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putAdvancedSettings.parameter.speechSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings">GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings</a>

speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#speech_settings GoogleDialogflowCxFlow#speech_settings}

---

##### `put_event_handlers` <a name="put_event_handlers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putEventHandlers"></a>

```python
def put_event_handlers(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putEventHandlers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers">GoogleDialogflowCxFlowEventHandlers</a>]]

---

##### `put_nlu_settings` <a name="put_nlu_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putNluSettings"></a>

```python
def put_nlu_settings(
  classification_threshold: typing.Union[int, float] = None,
  model_training_mode: str = None,
  model_type: str = None
) -> None
```

###### `classification_threshold`<sup>Optional</sup> <a name="classification_threshold" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putNluSettings.parameter.classificationThreshold"></a>

- *Type:* typing.Union[int, float]

To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold.

If the returned score value is less than the threshold value, then a no-match event will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#classification_threshold GoogleDialogflowCxFlow#classification_threshold}

---

###### `model_training_mode`<sup>Optional</sup> <a name="model_training_mode" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putNluSettings.parameter.modelTrainingMode"></a>

- *Type:* str

Indicates NLU model training mode.

* MODEL_TRAINING_MODE_AUTOMATIC: NLU model training is automatically triggered when a flow gets modified. User can also manually trigger model training in this mode.
* MODEL_TRAINING_MODE_MANUAL: User needs to manually trigger NLU model training. Best for large flows whose models take long time to train. Possible values: ["MODEL_TRAINING_MODE_AUTOMATIC", "MODEL_TRAINING_MODE_MANUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#model_training_mode GoogleDialogflowCxFlow#model_training_mode}

---

###### `model_type`<sup>Optional</sup> <a name="model_type" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putNluSettings.parameter.modelType"></a>

- *Type:* str

Indicates the type of NLU model.

* MODEL_TYPE_STANDARD: Use standard NLU model.
* MODEL_TYPE_ADVANCED: Use advanced NLU model. Possible values: ["MODEL_TYPE_STANDARD", "MODEL_TYPE_ADVANCED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#model_type GoogleDialogflowCxFlow#model_type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#create GoogleDialogflowCxFlow#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#delete GoogleDialogflowCxFlow#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#update GoogleDialogflowCxFlow#update}.

---

##### `put_transition_routes` <a name="put_transition_routes" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putTransitionRoutes"></a>

```python
def put_transition_routes(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.putTransitionRoutes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes">GoogleDialogflowCxFlowTransitionRoutes</a>]]

---

##### `reset_advanced_settings` <a name="reset_advanced_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetAdvancedSettings"></a>

```python
def reset_advanced_settings() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_event_handlers` <a name="reset_event_handlers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetEventHandlers"></a>

```python
def reset_event_handlers() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_default_start_flow` <a name="reset_is_default_start_flow" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetIsDefaultStartFlow"></a>

```python
def reset_is_default_start_flow() -> None
```

##### `reset_language_code` <a name="reset_language_code" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetLanguageCode"></a>

```python
def reset_language_code() -> None
```

##### `reset_nlu_settings` <a name="reset_nlu_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetNluSettings"></a>

```python
def reset_nlu_settings() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transition_route_groups` <a name="reset_transition_route_groups" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetTransitionRouteGroups"></a>

```python
def reset_transition_route_groups() -> None
```

##### `reset_transition_routes` <a name="reset_transition_routes" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.resetTransitionRoutes"></a>

```python
def reset_transition_routes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxFlow resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDialogflowCxFlow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDialogflowCxFlow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDialogflowCxFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.advancedSettings">advanced_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference">GoogleDialogflowCxFlowAdvancedSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.eventHandlers">event_handlers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList">GoogleDialogflowCxFlowEventHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.nluSettings">nlu_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference">GoogleDialogflowCxFlowNluSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference">GoogleDialogflowCxFlowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.transitionRoutes">transition_routes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList">GoogleDialogflowCxFlowTransitionRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.advancedSettingsInput">advanced_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings">GoogleDialogflowCxFlowAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.eventHandlersInput">event_handlers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers">GoogleDialogflowCxFlowEventHandlers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.isDefaultStartFlowInput">is_default_start_flow_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.nluSettingsInput">nlu_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings">GoogleDialogflowCxFlowNluSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts">GoogleDialogflowCxFlowTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.transitionRouteGroupsInput">transition_route_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.transitionRoutesInput">transition_routes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes">GoogleDialogflowCxFlowTransitionRoutes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.isDefaultStartFlow">is_default_start_flow</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.transitionRouteGroups">transition_route_groups</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `advanced_settings`<sup>Required</sup> <a name="advanced_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.advancedSettings"></a>

```python
advanced_settings: GoogleDialogflowCxFlowAdvancedSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference">GoogleDialogflowCxFlowAdvancedSettingsOutputReference</a>

---

##### `event_handlers`<sup>Required</sup> <a name="event_handlers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.eventHandlers"></a>

```python
event_handlers: GoogleDialogflowCxFlowEventHandlersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList">GoogleDialogflowCxFlowEventHandlersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nlu_settings`<sup>Required</sup> <a name="nlu_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.nluSettings"></a>

```python
nlu_settings: GoogleDialogflowCxFlowNluSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference">GoogleDialogflowCxFlowNluSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCxFlowTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference">GoogleDialogflowCxFlowTimeoutsOutputReference</a>

---

##### `transition_routes`<sup>Required</sup> <a name="transition_routes" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.transitionRoutes"></a>

```python
transition_routes: GoogleDialogflowCxFlowTransitionRoutesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList">GoogleDialogflowCxFlowTransitionRoutesList</a>

---

##### `advanced_settings_input`<sup>Optional</sup> <a name="advanced_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.advancedSettingsInput"></a>

```python
advanced_settings_input: GoogleDialogflowCxFlowAdvancedSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings">GoogleDialogflowCxFlowAdvancedSettings</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `event_handlers_input`<sup>Optional</sup> <a name="event_handlers_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.eventHandlersInput"></a>

```python
event_handlers_input: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers">GoogleDialogflowCxFlowEventHandlers</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_default_start_flow_input`<sup>Optional</sup> <a name="is_default_start_flow_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.isDefaultStartFlowInput"></a>

```python
is_default_start_flow_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `nlu_settings_input`<sup>Optional</sup> <a name="nlu_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.nluSettingsInput"></a>

```python
nlu_settings_input: GoogleDialogflowCxFlowNluSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings">GoogleDialogflowCxFlowNluSettings</a>

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDialogflowCxFlowTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts">GoogleDialogflowCxFlowTimeouts</a>]

---

##### `transition_route_groups_input`<sup>Optional</sup> <a name="transition_route_groups_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.transitionRouteGroupsInput"></a>

```python
transition_route_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `transition_routes_input`<sup>Optional</sup> <a name="transition_routes_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.transitionRoutesInput"></a>

```python
transition_routes_input: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes">GoogleDialogflowCxFlowTransitionRoutes</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default_start_flow`<sup>Required</sup> <a name="is_default_start_flow" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.isDefaultStartFlow"></a>

```python
is_default_start_flow: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `transition_route_groups`<sup>Required</sup> <a name="transition_route_groups" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.transitionRouteGroups"></a>

```python
transition_route_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxFlowAdvancedSettings <a name="GoogleDialogflowCxFlowAdvancedSettings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings(
  audio_export_gcs_destination: GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination = None,
  dtmf_settings: GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings = None,
  logging_settings: GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings = None,
  speech_settings: GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings.property.audioExportGcsDestination">audio_export_gcs_destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination</a></code> | audio_export_gcs_destination block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings.property.dtmfSettings">dtmf_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings">GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings</a></code> | dtmf_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings.property.loggingSettings">logging_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings">GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings</a></code> | logging_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings.property.speechSettings">speech_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings">GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings</a></code> | speech_settings block. |

---

##### `audio_export_gcs_destination`<sup>Optional</sup> <a name="audio_export_gcs_destination" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings.property.audioExportGcsDestination"></a>

```python
audio_export_gcs_destination: GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination</a>

audio_export_gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#audio_export_gcs_destination GoogleDialogflowCxFlow#audio_export_gcs_destination}

---

##### `dtmf_settings`<sup>Optional</sup> <a name="dtmf_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings.property.dtmfSettings"></a>

```python
dtmf_settings: GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings">GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings</a>

dtmf_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#dtmf_settings GoogleDialogflowCxFlow#dtmf_settings}

---

##### `logging_settings`<sup>Optional</sup> <a name="logging_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings.property.loggingSettings"></a>

```python
logging_settings: GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings">GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings</a>

logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#logging_settings GoogleDialogflowCxFlow#logging_settings}

---

##### `speech_settings`<sup>Optional</sup> <a name="speech_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings.property.speechSettings"></a>

```python
speech_settings: GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings">GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings</a>

speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#speech_settings GoogleDialogflowCxFlow#speech_settings}

---

### GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination <a name="GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination(
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination.property.uri">uri</a></code> | <code>str</code> | The Google Cloud Storage URI for the exported objects. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination.property.uri"></a>

```python
uri: str
```

- *Type:* str

The Google Cloud Storage URI for the exported objects.

Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.
Format: gs://bucket/object-name-or-prefix

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#uri GoogleDialogflowCxFlow#uri}

---

### GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings <a name="GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings(
  enabled: typing.Union[bool, IResolvable] = None,
  finish_digit: str = None,
  max_digits: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, incoming audio is processed for DTMF (dual tone multi frequency) events. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings.property.finishDigit">finish_digit</a></code> | <code>str</code> | The digit that terminates a DTMF digit sequence. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings.property.maxDigits">max_digits</a></code> | <code>typing.Union[int, float]</code> | Max length of DTMF digits. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, incoming audio is processed for DTMF (dual tone multi frequency) events.

For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#enabled GoogleDialogflowCxFlow#enabled}

---

##### `finish_digit`<sup>Optional</sup> <a name="finish_digit" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings.property.finishDigit"></a>

```python
finish_digit: str
```

- *Type:* str

The digit that terminates a DTMF digit sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#finish_digit GoogleDialogflowCxFlow#finish_digit}

---

##### `max_digits`<sup>Optional</sup> <a name="max_digits" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings.property.maxDigits"></a>

```python
max_digits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max length of DTMF digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#max_digits GoogleDialogflowCxFlow#max_digits}

---

### GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings <a name="GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings(
  enable_consent_based_redaction: typing.Union[bool, IResolvable] = None,
  enable_interaction_logging: typing.Union[bool, IResolvable] = None,
  enable_stackdriver_logging: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings.property.enableConsentBasedRedaction">enable_consent_based_redaction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables consent-based end-user input redaction, if true, a pre-defined session parameter **$session.params.conversation-redaction** will be used to determine if the utterance should be redacted. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings.property.enableInteractionLogging">enable_interaction_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables DF Interaction logging. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings.property.enableStackdriverLogging">enable_stackdriver_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables Google Cloud Logging. |

---

##### `enable_consent_based_redaction`<sup>Optional</sup> <a name="enable_consent_based_redaction" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings.property.enableConsentBasedRedaction"></a>

```python
enable_consent_based_redaction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables consent-based end-user input redaction, if true, a pre-defined session parameter **$session.params.conversation-redaction** will be used to determine if the utterance should be redacted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#enable_consent_based_redaction GoogleDialogflowCxFlow#enable_consent_based_redaction}

---

##### `enable_interaction_logging`<sup>Optional</sup> <a name="enable_interaction_logging" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings.property.enableInteractionLogging"></a>

```python
enable_interaction_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables DF Interaction logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#enable_interaction_logging GoogleDialogflowCxFlow#enable_interaction_logging}

---

##### `enable_stackdriver_logging`<sup>Optional</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings.property.enableStackdriverLogging"></a>

```python
enable_stackdriver_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Google Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#enable_stackdriver_logging GoogleDialogflowCxFlow#enable_stackdriver_logging}

---

### GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings <a name="GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings(
  endpointer_sensitivity: typing.Union[int, float] = None,
  models: typing.Mapping[str] = None,
  no_speech_timeout: str = None,
  use_timeout_based_endpointing: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings.property.endpointerSensitivity">endpointer_sensitivity</a></code> | <code>typing.Union[int, float]</code> | Sensitivity of the speech model that detects the end of speech. Scale from 0 to 100. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings.property.models">models</a></code> | <code>typing.Mapping[str]</code> | Mapping from language to Speech-to-Text model. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings.property.noSpeechTimeout">no_speech_timeout</a></code> | <code>str</code> | Timeout before detecting no speech. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings.property.useTimeoutBasedEndpointing">use_timeout_based_endpointing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use timeout based endpointing, interpreting endpointer sensitivity as seconds of timeout value. |

---

##### `endpointer_sensitivity`<sup>Optional</sup> <a name="endpointer_sensitivity" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings.property.endpointerSensitivity"></a>

```python
endpointer_sensitivity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Sensitivity of the speech model that detects the end of speech. Scale from 0 to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#endpointer_sensitivity GoogleDialogflowCxFlow#endpointer_sensitivity}

---

##### `models`<sup>Optional</sup> <a name="models" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings.property.models"></a>

```python
models: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Mapping from language to Speech-to-Text model.

The mapped Speech-to-Text model will be selected for requests from its corresponding language. For more information, see [Speech models](https://cloud.google.com/dialogflow/cx/docs/concept/speech-models).
An object containing a list of **"key": value** pairs. Example: **{ "name": "wrench", "mass": "1.3kg", "count": "3" }**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#models GoogleDialogflowCxFlow#models}

---

##### `no_speech_timeout`<sup>Optional</sup> <a name="no_speech_timeout" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings.property.noSpeechTimeout"></a>

```python
no_speech_timeout: str
```

- *Type:* str

Timeout before detecting no speech. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#no_speech_timeout GoogleDialogflowCxFlow#no_speech_timeout}

---

##### `use_timeout_based_endpointing`<sup>Optional</sup> <a name="use_timeout_based_endpointing" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings.property.useTimeoutBasedEndpointing"></a>

```python
use_timeout_based_endpointing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use timeout based endpointing, interpreting endpointer sensitivity as seconds of timeout value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#use_timeout_based_endpointing GoogleDialogflowCxFlow#use_timeout_based_endpointing}

---

### GoogleDialogflowCxFlowConfig <a name="GoogleDialogflowCxFlowConfig" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  advanced_settings: GoogleDialogflowCxFlowAdvancedSettings = None,
  description: str = None,
  event_handlers: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlers]] = None,
  id: str = None,
  is_default_start_flow: typing.Union[bool, IResolvable] = None,
  language_code: str = None,
  nlu_settings: GoogleDialogflowCxFlowNluSettings = None,
  parent: str = None,
  timeouts: GoogleDialogflowCxFlowTimeouts = None,
  transition_route_groups: typing.List[str] = None,
  transition_routes: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutes]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the flow. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.advancedSettings">advanced_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings">GoogleDialogflowCxFlowAdvancedSettings</a></code> | advanced_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.description">description</a></code> | <code>str</code> | The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.eventHandlers">event_handlers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers">GoogleDialogflowCxFlowEventHandlers</a>]]</code> | event_handlers block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#id GoogleDialogflowCxFlow#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.isDefaultStartFlow">is_default_start_flow</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Marks this as the [Default Start Flow](https://cloud.google.com/dialogflow/cx/docs/concept/flow#start) for an agent. When you create an agent, the Default Start Flow is created automatically. The Default Start Flow cannot be deleted; deleting the 'google_dialogflow_cx_flow' resource does nothing to the underlying GCP resources. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.languageCode">language_code</a></code> | <code>str</code> | The language of the following fields in flow: Flow.event_handlers.trigger_fulfillment.messages Flow.event_handlers.trigger_fulfillment.conditional_cases Flow.transition_routes.trigger_fulfillment.messages Flow.transition_routes.trigger_fulfillment.conditional_cases If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.nluSettings">nlu_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings">GoogleDialogflowCxFlowNluSettings</a></code> | nlu_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.parent">parent</a></code> | <code>str</code> | The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts">GoogleDialogflowCxFlowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.transitionRouteGroups">transition_route_groups</a></code> | <code>typing.List[str]</code> | A flow's transition route group serve two purposes: They are responsible for matching the user's first utterances in the flow. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.transitionRoutes">transition_routes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes">GoogleDialogflowCxFlowTransitionRoutes</a>]]</code> | transition_routes block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable name of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#display_name GoogleDialogflowCxFlow#display_name}

---

##### `advanced_settings`<sup>Optional</sup> <a name="advanced_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.advancedSettings"></a>

```python
advanced_settings: GoogleDialogflowCxFlowAdvancedSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings">GoogleDialogflowCxFlowAdvancedSettings</a>

advanced_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#advanced_settings GoogleDialogflowCxFlow#advanced_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#description GoogleDialogflowCxFlow#description}

---

##### `event_handlers`<sup>Optional</sup> <a name="event_handlers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.eventHandlers"></a>

```python
event_handlers: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers">GoogleDialogflowCxFlowEventHandlers</a>]]

event_handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#event_handlers GoogleDialogflowCxFlow#event_handlers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#id GoogleDialogflowCxFlow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_default_start_flow`<sup>Optional</sup> <a name="is_default_start_flow" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.isDefaultStartFlow"></a>

```python
is_default_start_flow: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Marks this as the [Default Start Flow](https://cloud.google.com/dialogflow/cx/docs/concept/flow#start) for an agent. When you create an agent, the Default Start Flow is created automatically. The Default Start Flow cannot be deleted; deleting the 'google_dialogflow_cx_flow' resource does nothing to the underlying GCP resources.

~> Avoid having multiple 'google_dialogflow_cx_flow' resources linked to the same agent with 'is_default_start_flow = true' because they will compete to control a single Default Start Flow resource in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#is_default_start_flow GoogleDialogflowCxFlow#is_default_start_flow}

---

##### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

The language of the following fields in flow: Flow.event_handlers.trigger_fulfillment.messages Flow.event_handlers.trigger_fulfillment.conditional_cases Flow.transition_routes.trigger_fulfillment.messages Flow.transition_routes.trigger_fulfillment.conditional_cases If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#language_code GoogleDialogflowCxFlow#language_code}

---

##### `nlu_settings`<sup>Optional</sup> <a name="nlu_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.nluSettings"></a>

```python
nlu_settings: GoogleDialogflowCxFlowNluSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings">GoogleDialogflowCxFlowNluSettings</a>

nlu_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#nlu_settings GoogleDialogflowCxFlow#nlu_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#parent GoogleDialogflowCxFlow#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCxFlowTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts">GoogleDialogflowCxFlowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#timeouts GoogleDialogflowCxFlow#timeouts}

---

##### `transition_route_groups`<sup>Optional</sup> <a name="transition_route_groups" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.transitionRouteGroups"></a>

```python
transition_route_groups: typing.List[str]
```

- *Type:* typing.List[str]

A flow's transition route group serve two purposes: They are responsible for matching the user's first utterances in the flow.

They are inherited by every page's [transition route groups][Page.transition_route_groups]. Transition route groups defined in the page have higher priority than those defined in the flow.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#transition_route_groups GoogleDialogflowCxFlow#transition_route_groups}

---

##### `transition_routes`<sup>Optional</sup> <a name="transition_routes" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowConfig.property.transitionRoutes"></a>

```python
transition_routes: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes">GoogleDialogflowCxFlowTransitionRoutes</a>]]

transition_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#transition_routes GoogleDialogflowCxFlow#transition_routes}

---

### GoogleDialogflowCxFlowEventHandlers <a name="GoogleDialogflowCxFlowEventHandlers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers(
  event: str = None,
  target_flow: str = None,
  target_page: str = None,
  trigger_fulfillment: GoogleDialogflowCxFlowEventHandlersTriggerFulfillment = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers.property.event">event</a></code> | <code>str</code> | The name of the event to handle. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers.property.targetFlow">target_flow</a></code> | <code>str</code> | The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers.property.targetPage">target_page</a></code> | <code>str</code> | The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers.property.triggerFulfillment">trigger_fulfillment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment">GoogleDialogflowCxFlowEventHandlersTriggerFulfillment</a></code> | trigger_fulfillment block. |

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers.property.event"></a>

```python
event: str
```

- *Type:* str

The name of the event to handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#event GoogleDialogflowCxFlow#event}

---

##### `target_flow`<sup>Optional</sup> <a name="target_flow" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers.property.targetFlow"></a>

```python
target_flow: str
```

- *Type:* str

The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#target_flow GoogleDialogflowCxFlow#target_flow}

---

##### `target_page`<sup>Optional</sup> <a name="target_page" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers.property.targetPage"></a>

```python
target_page: str
```

- *Type:* str

The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#target_page GoogleDialogflowCxFlow#target_page}

---

##### `trigger_fulfillment`<sup>Optional</sup> <a name="trigger_fulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers.property.triggerFulfillment"></a>

```python
trigger_fulfillment: GoogleDialogflowCxFlowEventHandlersTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment">GoogleDialogflowCxFlowEventHandlersTriggerFulfillment</a>

trigger_fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#trigger_fulfillment GoogleDialogflowCxFlow#trigger_fulfillment}

---

### GoogleDialogflowCxFlowEventHandlersTriggerFulfillment <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment(
  conditional_cases: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases]] = None,
  messages: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages]] = None,
  return_partial_responses: typing.Union[bool, IResolvable] = None,
  set_parameter_actions: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions]] = None,
  tag: str = None,
  webhook: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment.property.conditionalCases">conditional_cases</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>]]</code> | conditional_cases block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment.property.messages">messages</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>]]</code> | messages block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment.property.returnPartialResponses">return_partial_responses</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment.property.setParameterActions">set_parameter_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>]]</code> | set_parameter_actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment.property.tag">tag</a></code> | <code>str</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment.property.webhook">webhook</a></code> | <code>str</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `conditional_cases`<sup>Optional</sup> <a name="conditional_cases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment.property.conditionalCases"></a>

```python
conditional_cases: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>]]

conditional_cases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#conditional_cases GoogleDialogflowCxFlow#conditional_cases}

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment.property.messages"></a>

```python
messages: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>]]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#messages GoogleDialogflowCxFlow#messages}

---

##### `return_partial_responses`<sup>Optional</sup> <a name="return_partial_responses" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment.property.returnPartialResponses"></a>

```python
return_partial_responses: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#return_partial_responses GoogleDialogflowCxFlow#return_partial_responses}

---

##### `set_parameter_actions`<sup>Optional</sup> <a name="set_parameter_actions" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment.property.setParameterActions"></a>

```python
set_parameter_actions: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>]]

set_parameter_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#set_parameter_actions GoogleDialogflowCxFlow#set_parameter_actions}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment.property.tag"></a>

```python
tag: str
```

- *Type:* str

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#tag GoogleDialogflowCxFlow#tag}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment.property.webhook"></a>

```python
webhook: str
```

- *Type:* str

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#webhook GoogleDialogflowCxFlow#webhook}

---

### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases(
  cases: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases.property.cases">cases</a></code> | <code>str</code> | A JSON encoded list of cascading if-else conditions. |

---

##### `cases`<sup>Optional</sup> <a name="cases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases.property.cases"></a>

```python
cases: str
```

- *Type:* str

A JSON encoded list of cascading if-else conditions.

Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#cases GoogleDialogflowCxFlow#cases}

---

### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages(
  channel: str = None,
  conversation_success: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess = None,
  live_agent_handoff: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff = None,
  output_audio_text: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText = None,
  payload: str = None,
  play_audio: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio = None,
  telephony_transfer_call: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall = None,
  text: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.channel">channel</a></code> | <code>str</code> | The channel which the response is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.conversationSuccess">conversation_success</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess</a></code> | conversation_success block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.liveAgentHandoff">live_agent_handoff</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff</a></code> | live_agent_handoff block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.outputAudioText">output_audio_text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText</a></code> | output_audio_text block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.payload">payload</a></code> | <code>str</code> | A custom, platform-specific payload. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.playAudio">play_audio</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio</a></code> | play_audio block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.telephonyTransferCall">telephony_transfer_call</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall</a></code> | telephony_transfer_call block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.text">text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a></code> | text block. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.channel"></a>

```python
channel: str
```

- *Type:* str

The channel which the response is associated with.

Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#channel GoogleDialogflowCxFlow#channel}

---

##### `conversation_success`<sup>Optional</sup> <a name="conversation_success" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.conversationSuccess"></a>

```python
conversation_success: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess</a>

conversation_success block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#conversation_success GoogleDialogflowCxFlow#conversation_success}

---

##### `live_agent_handoff`<sup>Optional</sup> <a name="live_agent_handoff" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.liveAgentHandoff"></a>

```python
live_agent_handoff: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff</a>

live_agent_handoff block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#live_agent_handoff GoogleDialogflowCxFlow#live_agent_handoff}

---

##### `output_audio_text`<sup>Optional</sup> <a name="output_audio_text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.outputAudioText"></a>

```python
output_audio_text: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText</a>

output_audio_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#output_audio_text GoogleDialogflowCxFlow#output_audio_text}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.payload"></a>

```python
payload: str
```

- *Type:* str

A custom, platform-specific payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#payload GoogleDialogflowCxFlow#payload}

---

##### `play_audio`<sup>Optional</sup> <a name="play_audio" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.playAudio"></a>

```python
play_audio: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio</a>

play_audio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#play_audio GoogleDialogflowCxFlow#play_audio}

---

##### `telephony_transfer_call`<sup>Optional</sup> <a name="telephony_transfer_call" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.telephonyTransferCall"></a>

```python
telephony_transfer_call: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall</a>

telephony_transfer_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#telephony_transfer_call GoogleDialogflowCxFlow#telephony_transfer_call}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.text"></a>

```python
text: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#text GoogleDialogflowCxFlow#text}

---

### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess(
  metadata: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess.property.metadata">metadata</a></code> | <code>str</code> | Custom metadata. Dialogflow doesn't impose any structure on this. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

Custom metadata. Dialogflow doesn't impose any structure on this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#metadata GoogleDialogflowCxFlow#metadata}

---

### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff(
  metadata: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff.property.metadata">metadata</a></code> | <code>str</code> | Custom metadata. Dialogflow doesn't impose any structure on this. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

Custom metadata. Dialogflow doesn't impose any structure on this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#metadata GoogleDialogflowCxFlow#metadata}

---

### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText(
  ssml: str = None,
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText.property.ssml">ssml</a></code> | <code>str</code> | The SSML text to be synthesized. For more information, see SSML. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText.property.text">text</a></code> | <code>str</code> | The raw text to be synthesized. |

---

##### `ssml`<sup>Optional</sup> <a name="ssml" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText.property.ssml"></a>

```python
ssml: str
```

- *Type:* str

The SSML text to be synthesized. For more information, see SSML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#ssml GoogleDialogflowCxFlow#ssml}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText.property.text"></a>

```python
text: str
```

- *Type:* str

The raw text to be synthesized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#text GoogleDialogflowCxFlow#text}

---

### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio(
  audio_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio.property.audioUri">audio_uri</a></code> | <code>str</code> | URI of the audio clip. |

---

##### `audio_uri`<sup>Required</sup> <a name="audio_uri" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio.property.audioUri"></a>

```python
audio_uri: str
```

- *Type:* str

URI of the audio clip.

Dialogflow does not impose any validation on this value. It is specific to the client that reads it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#audio_uri GoogleDialogflowCxFlow#audio_uri}

---

### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall(
  phone_number: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall.property.phoneNumber">phone_number</a></code> | <code>str</code> | Transfer the call to a phone number in E.164 format. |

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Transfer the call to a phone number in E.164 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#phone_number GoogleDialogflowCxFlow#phone_number}

---

### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText(
  text: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText.property.text">text</a></code> | <code>typing.List[str]</code> | A collection of text responses. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText.property.text"></a>

```python
text: typing.List[str]
```

- *Type:* typing.List[str]

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#text GoogleDialogflowCxFlow#text}

---

### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions(
  parameter: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions.property.parameter">parameter</a></code> | <code>str</code> | Display name of the parameter. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions.property.value">value</a></code> | <code>str</code> | The new JSON-encoded value of the parameter. A null value clears the parameter. |

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions.property.parameter"></a>

```python
parameter: str
```

- *Type:* str

Display name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#parameter GoogleDialogflowCxFlow#parameter}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions.property.value"></a>

```python
value: str
```

- *Type:* str

The new JSON-encoded value of the parameter. A null value clears the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#value GoogleDialogflowCxFlow#value}

---

### GoogleDialogflowCxFlowNluSettings <a name="GoogleDialogflowCxFlowNluSettings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings(
  classification_threshold: typing.Union[int, float] = None,
  model_training_mode: str = None,
  model_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings.property.classificationThreshold">classification_threshold</a></code> | <code>typing.Union[int, float]</code> | To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings.property.modelTrainingMode">model_training_mode</a></code> | <code>str</code> | Indicates NLU model training mode. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings.property.modelType">model_type</a></code> | <code>str</code> | Indicates the type of NLU model. |

---

##### `classification_threshold`<sup>Optional</sup> <a name="classification_threshold" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings.property.classificationThreshold"></a>

```python
classification_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold.

If the returned score value is less than the threshold value, then a no-match event will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#classification_threshold GoogleDialogflowCxFlow#classification_threshold}

---

##### `model_training_mode`<sup>Optional</sup> <a name="model_training_mode" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings.property.modelTrainingMode"></a>

```python
model_training_mode: str
```

- *Type:* str

Indicates NLU model training mode.

* MODEL_TRAINING_MODE_AUTOMATIC: NLU model training is automatically triggered when a flow gets modified. User can also manually trigger model training in this mode.
* MODEL_TRAINING_MODE_MANUAL: User needs to manually trigger NLU model training. Best for large flows whose models take long time to train. Possible values: ["MODEL_TRAINING_MODE_AUTOMATIC", "MODEL_TRAINING_MODE_MANUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#model_training_mode GoogleDialogflowCxFlow#model_training_mode}

---

##### `model_type`<sup>Optional</sup> <a name="model_type" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

Indicates the type of NLU model.

* MODEL_TYPE_STANDARD: Use standard NLU model.
* MODEL_TYPE_ADVANCED: Use advanced NLU model. Possible values: ["MODEL_TYPE_STANDARD", "MODEL_TYPE_ADVANCED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#model_type GoogleDialogflowCxFlow#model_type}

---

### GoogleDialogflowCxFlowTimeouts <a name="GoogleDialogflowCxFlowTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#create GoogleDialogflowCxFlow#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#delete GoogleDialogflowCxFlow#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#update GoogleDialogflowCxFlow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#create GoogleDialogflowCxFlow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#delete GoogleDialogflowCxFlow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#update GoogleDialogflowCxFlow#update}.

---

### GoogleDialogflowCxFlowTransitionRoutes <a name="GoogleDialogflowCxFlowTransitionRoutes" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes(
  condition: str = None,
  intent: str = None,
  target_flow: str = None,
  target_page: str = None,
  trigger_fulfillment: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes.property.condition">condition</a></code> | <code>str</code> | The condition to evaluate against form parameters or session parameters. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes.property.intent">intent</a></code> | <code>str</code> | The unique identifier of an Intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes.property.targetFlow">target_flow</a></code> | <code>str</code> | The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes.property.targetPage">target_page</a></code> | <code>str</code> | The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes.property.triggerFulfillment">trigger_fulfillment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment</a></code> | trigger_fulfillment block. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes.property.condition"></a>

```python
condition: str
```

- *Type:* str

The condition to evaluate against form parameters or session parameters.

At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#condition GoogleDialogflowCxFlow#condition}

---

##### `intent`<sup>Optional</sup> <a name="intent" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes.property.intent"></a>

```python
intent: str
```

- *Type:* str

The unique identifier of an Intent.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#intent GoogleDialogflowCxFlow#intent}

---

##### `target_flow`<sup>Optional</sup> <a name="target_flow" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes.property.targetFlow"></a>

```python
target_flow: str
```

- *Type:* str

The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#target_flow GoogleDialogflowCxFlow#target_flow}

---

##### `target_page`<sup>Optional</sup> <a name="target_page" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes.property.targetPage"></a>

```python
target_page: str
```

- *Type:* str

The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#target_page GoogleDialogflowCxFlow#target_page}

---

##### `trigger_fulfillment`<sup>Optional</sup> <a name="trigger_fulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes.property.triggerFulfillment"></a>

```python
trigger_fulfillment: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment</a>

trigger_fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#trigger_fulfillment GoogleDialogflowCxFlow#trigger_fulfillment}

---

### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment(
  conditional_cases: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases]] = None,
  messages: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages]] = None,
  return_partial_responses: typing.Union[bool, IResolvable] = None,
  set_parameter_actions: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions]] = None,
  tag: str = None,
  webhook: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment.property.conditionalCases">conditional_cases</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>]]</code> | conditional_cases block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment.property.messages">messages</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>]]</code> | messages block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment.property.returnPartialResponses">return_partial_responses</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment.property.setParameterActions">set_parameter_actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>]]</code> | set_parameter_actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment.property.tag">tag</a></code> | <code>str</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment.property.webhook">webhook</a></code> | <code>str</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `conditional_cases`<sup>Optional</sup> <a name="conditional_cases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment.property.conditionalCases"></a>

```python
conditional_cases: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>]]

conditional_cases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#conditional_cases GoogleDialogflowCxFlow#conditional_cases}

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment.property.messages"></a>

```python
messages: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>]]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#messages GoogleDialogflowCxFlow#messages}

---

##### `return_partial_responses`<sup>Optional</sup> <a name="return_partial_responses" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment.property.returnPartialResponses"></a>

```python
return_partial_responses: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#return_partial_responses GoogleDialogflowCxFlow#return_partial_responses}

---

##### `set_parameter_actions`<sup>Optional</sup> <a name="set_parameter_actions" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment.property.setParameterActions"></a>

```python
set_parameter_actions: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>]]

set_parameter_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#set_parameter_actions GoogleDialogflowCxFlow#set_parameter_actions}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment.property.tag"></a>

```python
tag: str
```

- *Type:* str

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#tag GoogleDialogflowCxFlow#tag}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment.property.webhook"></a>

```python
webhook: str
```

- *Type:* str

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#webhook GoogleDialogflowCxFlow#webhook}

---

### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases(
  cases: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases.property.cases">cases</a></code> | <code>str</code> | A JSON encoded list of cascading if-else conditions. |

---

##### `cases`<sup>Optional</sup> <a name="cases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases.property.cases"></a>

```python
cases: str
```

- *Type:* str

A JSON encoded list of cascading if-else conditions.

Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#cases GoogleDialogflowCxFlow#cases}

---

### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages(
  channel: str = None,
  conversation_success: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess = None,
  live_agent_handoff: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff = None,
  output_audio_text: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText = None,
  payload: str = None,
  play_audio: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio = None,
  telephony_transfer_call: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall = None,
  text: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.channel">channel</a></code> | <code>str</code> | The channel which the response is associated with. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.conversationSuccess">conversation_success</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess</a></code> | conversation_success block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.liveAgentHandoff">live_agent_handoff</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff</a></code> | live_agent_handoff block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.outputAudioText">output_audio_text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText</a></code> | output_audio_text block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.payload">payload</a></code> | <code>str</code> | A custom, platform-specific payload. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.playAudio">play_audio</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio</a></code> | play_audio block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.telephonyTransferCall">telephony_transfer_call</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall</a></code> | telephony_transfer_call block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.text">text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a></code> | text block. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.channel"></a>

```python
channel: str
```

- *Type:* str

The channel which the response is associated with.

Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#channel GoogleDialogflowCxFlow#channel}

---

##### `conversation_success`<sup>Optional</sup> <a name="conversation_success" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.conversationSuccess"></a>

```python
conversation_success: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess</a>

conversation_success block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#conversation_success GoogleDialogflowCxFlow#conversation_success}

---

##### `live_agent_handoff`<sup>Optional</sup> <a name="live_agent_handoff" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.liveAgentHandoff"></a>

```python
live_agent_handoff: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff</a>

live_agent_handoff block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#live_agent_handoff GoogleDialogflowCxFlow#live_agent_handoff}

---

##### `output_audio_text`<sup>Optional</sup> <a name="output_audio_text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.outputAudioText"></a>

```python
output_audio_text: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText</a>

output_audio_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#output_audio_text GoogleDialogflowCxFlow#output_audio_text}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.payload"></a>

```python
payload: str
```

- *Type:* str

A custom, platform-specific payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#payload GoogleDialogflowCxFlow#payload}

---

##### `play_audio`<sup>Optional</sup> <a name="play_audio" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.playAudio"></a>

```python
play_audio: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio</a>

play_audio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#play_audio GoogleDialogflowCxFlow#play_audio}

---

##### `telephony_transfer_call`<sup>Optional</sup> <a name="telephony_transfer_call" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.telephonyTransferCall"></a>

```python
telephony_transfer_call: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall</a>

telephony_transfer_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#telephony_transfer_call GoogleDialogflowCxFlow#telephony_transfer_call}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.text"></a>

```python
text: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#text GoogleDialogflowCxFlow#text}

---

### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess(
  metadata: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess.property.metadata">metadata</a></code> | <code>str</code> | Custom metadata. Dialogflow doesn't impose any structure on this. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

Custom metadata. Dialogflow doesn't impose any structure on this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#metadata GoogleDialogflowCxFlow#metadata}

---

### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff(
  metadata: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff.property.metadata">metadata</a></code> | <code>str</code> | Custom metadata. Dialogflow doesn't impose any structure on this. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

Custom metadata. Dialogflow doesn't impose any structure on this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#metadata GoogleDialogflowCxFlow#metadata}

---

### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText(
  ssml: str = None,
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText.property.ssml">ssml</a></code> | <code>str</code> | The SSML text to be synthesized. For more information, see SSML. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText.property.text">text</a></code> | <code>str</code> | The raw text to be synthesized. |

---

##### `ssml`<sup>Optional</sup> <a name="ssml" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText.property.ssml"></a>

```python
ssml: str
```

- *Type:* str

The SSML text to be synthesized. For more information, see SSML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#ssml GoogleDialogflowCxFlow#ssml}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText.property.text"></a>

```python
text: str
```

- *Type:* str

The raw text to be synthesized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#text GoogleDialogflowCxFlow#text}

---

### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio(
  audio_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio.property.audioUri">audio_uri</a></code> | <code>str</code> | URI of the audio clip. |

---

##### `audio_uri`<sup>Required</sup> <a name="audio_uri" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio.property.audioUri"></a>

```python
audio_uri: str
```

- *Type:* str

URI of the audio clip.

Dialogflow does not impose any validation on this value. It is specific to the client that reads it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#audio_uri GoogleDialogflowCxFlow#audio_uri}

---

### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall(
  phone_number: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall.property.phoneNumber">phone_number</a></code> | <code>str</code> | Transfer the call to a phone number in E.164 format. |

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Transfer the call to a phone number in E.164 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#phone_number GoogleDialogflowCxFlow#phone_number}

---

### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText(
  text: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText.property.text">text</a></code> | <code>typing.List[str]</code> | A collection of text responses. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText.property.text"></a>

```python
text: typing.List[str]
```

- *Type:* typing.List[str]

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#text GoogleDialogflowCxFlow#text}

---

### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions(
  parameter: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions.property.parameter">parameter</a></code> | <code>str</code> | Display name of the parameter. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions.property.value">value</a></code> | <code>str</code> | The new JSON-encoded value of the parameter. A null value clears the parameter. |

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions.property.parameter"></a>

```python
parameter: str
```

- *Type:* str

Display name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#parameter GoogleDialogflowCxFlow#parameter}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions.property.value"></a>

```python
value: str
```

- *Type:* str

The new JSON-encoded value of the parameter. A null value clears the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#value GoogleDialogflowCxFlow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference <a name="GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination</a>

---


### GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference <a name="GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resetFinishDigit">reset_finish_digit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resetMaxDigits">reset_max_digits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_finish_digit` <a name="reset_finish_digit" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resetFinishDigit"></a>

```python
def reset_finish_digit() -> None
```

##### `reset_max_digits` <a name="reset_max_digits" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resetMaxDigits"></a>

```python
def reset_max_digits() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.finishDigitInput">finish_digit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.maxDigitsInput">max_digits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.finishDigit">finish_digit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.maxDigits">max_digits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings">GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `finish_digit_input`<sup>Optional</sup> <a name="finish_digit_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.finishDigitInput"></a>

```python
finish_digit_input: str
```

- *Type:* str

---

##### `max_digits_input`<sup>Optional</sup> <a name="max_digits_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.maxDigitsInput"></a>

```python
max_digits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `finish_digit`<sup>Required</sup> <a name="finish_digit" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.finishDigit"></a>

```python
finish_digit: str
```

- *Type:* str

---

##### `max_digits`<sup>Required</sup> <a name="max_digits" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.maxDigits"></a>

```python
max_digits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings">GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings</a>

---


### GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference <a name="GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.resetEnableConsentBasedRedaction">reset_enable_consent_based_redaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.resetEnableInteractionLogging">reset_enable_interaction_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.resetEnableStackdriverLogging">reset_enable_stackdriver_logging</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_consent_based_redaction` <a name="reset_enable_consent_based_redaction" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.resetEnableConsentBasedRedaction"></a>

```python
def reset_enable_consent_based_redaction() -> None
```

##### `reset_enable_interaction_logging` <a name="reset_enable_interaction_logging" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.resetEnableInteractionLogging"></a>

```python
def reset_enable_interaction_logging() -> None
```

##### `reset_enable_stackdriver_logging` <a name="reset_enable_stackdriver_logging" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.resetEnableStackdriverLogging"></a>

```python
def reset_enable_stackdriver_logging() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.enableConsentBasedRedactionInput">enable_consent_based_redaction_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.enableInteractionLoggingInput">enable_interaction_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.enableStackdriverLoggingInput">enable_stackdriver_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.enableConsentBasedRedaction">enable_consent_based_redaction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.enableInteractionLogging">enable_interaction_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.enableStackdriverLogging">enable_stackdriver_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings">GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_consent_based_redaction_input`<sup>Optional</sup> <a name="enable_consent_based_redaction_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.enableConsentBasedRedactionInput"></a>

```python
enable_consent_based_redaction_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_interaction_logging_input`<sup>Optional</sup> <a name="enable_interaction_logging_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.enableInteractionLoggingInput"></a>

```python
enable_interaction_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_stackdriver_logging_input`<sup>Optional</sup> <a name="enable_stackdriver_logging_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.enableStackdriverLoggingInput"></a>

```python
enable_stackdriver_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_consent_based_redaction`<sup>Required</sup> <a name="enable_consent_based_redaction" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.enableConsentBasedRedaction"></a>

```python
enable_consent_based_redaction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_interaction_logging`<sup>Required</sup> <a name="enable_interaction_logging" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.enableInteractionLogging"></a>

```python
enable_interaction_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_stackdriver_logging`<sup>Required</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.enableStackdriverLogging"></a>

```python
enable_stackdriver_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings">GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings</a>

---


### GoogleDialogflowCxFlowAdvancedSettingsOutputReference <a name="GoogleDialogflowCxFlowAdvancedSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putAudioExportGcsDestination">put_audio_export_gcs_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putDtmfSettings">put_dtmf_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putLoggingSettings">put_logging_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putSpeechSettings">put_speech_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.resetAudioExportGcsDestination">reset_audio_export_gcs_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.resetDtmfSettings">reset_dtmf_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.resetLoggingSettings">reset_logging_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.resetSpeechSettings">reset_speech_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audio_export_gcs_destination` <a name="put_audio_export_gcs_destination" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putAudioExportGcsDestination"></a>

```python
def put_audio_export_gcs_destination(
  uri: str = None
) -> None
```

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putAudioExportGcsDestination.parameter.uri"></a>

- *Type:* str

The Google Cloud Storage URI for the exported objects.

Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.
Format: gs://bucket/object-name-or-prefix

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#uri GoogleDialogflowCxFlow#uri}

---

##### `put_dtmf_settings` <a name="put_dtmf_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putDtmfSettings"></a>

```python
def put_dtmf_settings(
  enabled: typing.Union[bool, IResolvable] = None,
  finish_digit: str = None,
  max_digits: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putDtmfSettings.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, incoming audio is processed for DTMF (dual tone multi frequency) events.

For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#enabled GoogleDialogflowCxFlow#enabled}

---

###### `finish_digit`<sup>Optional</sup> <a name="finish_digit" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putDtmfSettings.parameter.finishDigit"></a>

- *Type:* str

The digit that terminates a DTMF digit sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#finish_digit GoogleDialogflowCxFlow#finish_digit}

---

###### `max_digits`<sup>Optional</sup> <a name="max_digits" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putDtmfSettings.parameter.maxDigits"></a>

- *Type:* typing.Union[int, float]

Max length of DTMF digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#max_digits GoogleDialogflowCxFlow#max_digits}

---

##### `put_logging_settings` <a name="put_logging_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putLoggingSettings"></a>

```python
def put_logging_settings(
  enable_consent_based_redaction: typing.Union[bool, IResolvable] = None,
  enable_interaction_logging: typing.Union[bool, IResolvable] = None,
  enable_stackdriver_logging: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_consent_based_redaction`<sup>Optional</sup> <a name="enable_consent_based_redaction" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putLoggingSettings.parameter.enableConsentBasedRedaction"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables consent-based end-user input redaction, if true, a pre-defined session parameter **$session.params.conversation-redaction** will be used to determine if the utterance should be redacted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#enable_consent_based_redaction GoogleDialogflowCxFlow#enable_consent_based_redaction}

---

###### `enable_interaction_logging`<sup>Optional</sup> <a name="enable_interaction_logging" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putLoggingSettings.parameter.enableInteractionLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables DF Interaction logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#enable_interaction_logging GoogleDialogflowCxFlow#enable_interaction_logging}

---

###### `enable_stackdriver_logging`<sup>Optional</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putLoggingSettings.parameter.enableStackdriverLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables Google Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#enable_stackdriver_logging GoogleDialogflowCxFlow#enable_stackdriver_logging}

---

##### `put_speech_settings` <a name="put_speech_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putSpeechSettings"></a>

```python
def put_speech_settings(
  endpointer_sensitivity: typing.Union[int, float] = None,
  models: typing.Mapping[str] = None,
  no_speech_timeout: str = None,
  use_timeout_based_endpointing: typing.Union[bool, IResolvable] = None
) -> None
```

###### `endpointer_sensitivity`<sup>Optional</sup> <a name="endpointer_sensitivity" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putSpeechSettings.parameter.endpointerSensitivity"></a>

- *Type:* typing.Union[int, float]

Sensitivity of the speech model that detects the end of speech. Scale from 0 to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#endpointer_sensitivity GoogleDialogflowCxFlow#endpointer_sensitivity}

---

###### `models`<sup>Optional</sup> <a name="models" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putSpeechSettings.parameter.models"></a>

- *Type:* typing.Mapping[str]

Mapping from language to Speech-to-Text model.

The mapped Speech-to-Text model will be selected for requests from its corresponding language. For more information, see [Speech models](https://cloud.google.com/dialogflow/cx/docs/concept/speech-models).
An object containing a list of **"key": value** pairs. Example: **{ "name": "wrench", "mass": "1.3kg", "count": "3" }**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#models GoogleDialogflowCxFlow#models}

---

###### `no_speech_timeout`<sup>Optional</sup> <a name="no_speech_timeout" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putSpeechSettings.parameter.noSpeechTimeout"></a>

- *Type:* str

Timeout before detecting no speech. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#no_speech_timeout GoogleDialogflowCxFlow#no_speech_timeout}

---

###### `use_timeout_based_endpointing`<sup>Optional</sup> <a name="use_timeout_based_endpointing" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.putSpeechSettings.parameter.useTimeoutBasedEndpointing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use timeout based endpointing, interpreting endpointer sensitivity as seconds of timeout value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#use_timeout_based_endpointing GoogleDialogflowCxFlow#use_timeout_based_endpointing}

---

##### `reset_audio_export_gcs_destination` <a name="reset_audio_export_gcs_destination" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.resetAudioExportGcsDestination"></a>

```python
def reset_audio_export_gcs_destination() -> None
```

##### `reset_dtmf_settings` <a name="reset_dtmf_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.resetDtmfSettings"></a>

```python
def reset_dtmf_settings() -> None
```

##### `reset_logging_settings` <a name="reset_logging_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.resetLoggingSettings"></a>

```python
def reset_logging_settings() -> None
```

##### `reset_speech_settings` <a name="reset_speech_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.resetSpeechSettings"></a>

```python
def reset_speech_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.audioExportGcsDestination">audio_export_gcs_destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference">GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.dtmfSettings">dtmf_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference">GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.loggingSettings">logging_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference">GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.speechSettings">speech_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference">GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.audioExportGcsDestinationInput">audio_export_gcs_destination_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.dtmfSettingsInput">dtmf_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings">GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.loggingSettingsInput">logging_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings">GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.speechSettingsInput">speech_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings">GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings">GoogleDialogflowCxFlowAdvancedSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_export_gcs_destination`<sup>Required</sup> <a name="audio_export_gcs_destination" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.audioExportGcsDestination"></a>

```python
audio_export_gcs_destination: GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference">GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference</a>

---

##### `dtmf_settings`<sup>Required</sup> <a name="dtmf_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.dtmfSettings"></a>

```python
dtmf_settings: GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference">GoogleDialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference</a>

---

##### `logging_settings`<sup>Required</sup> <a name="logging_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.loggingSettings"></a>

```python
logging_settings: GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference">GoogleDialogflowCxFlowAdvancedSettingsLoggingSettingsOutputReference</a>

---

##### `speech_settings`<sup>Required</sup> <a name="speech_settings" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.speechSettings"></a>

```python
speech_settings: GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference">GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference</a>

---

##### `audio_export_gcs_destination_input`<sup>Optional</sup> <a name="audio_export_gcs_destination_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.audioExportGcsDestinationInput"></a>

```python
audio_export_gcs_destination_input: GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination">GoogleDialogflowCxFlowAdvancedSettingsAudioExportGcsDestination</a>

---

##### `dtmf_settings_input`<sup>Optional</sup> <a name="dtmf_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.dtmfSettingsInput"></a>

```python
dtmf_settings_input: GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings">GoogleDialogflowCxFlowAdvancedSettingsDtmfSettings</a>

---

##### `logging_settings_input`<sup>Optional</sup> <a name="logging_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.loggingSettingsInput"></a>

```python
logging_settings_input: GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings">GoogleDialogflowCxFlowAdvancedSettingsLoggingSettings</a>

---

##### `speech_settings_input`<sup>Optional</sup> <a name="speech_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.speechSettingsInput"></a>

```python
speech_settings_input: GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings">GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowAdvancedSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettings">GoogleDialogflowCxFlowAdvancedSettings</a>

---


### GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference <a name="GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.resetEndpointerSensitivity">reset_endpointer_sensitivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.resetModels">reset_models</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.resetNoSpeechTimeout">reset_no_speech_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.resetUseTimeoutBasedEndpointing">reset_use_timeout_based_endpointing</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpointer_sensitivity` <a name="reset_endpointer_sensitivity" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.resetEndpointerSensitivity"></a>

```python
def reset_endpointer_sensitivity() -> None
```

##### `reset_models` <a name="reset_models" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.resetModels"></a>

```python
def reset_models() -> None
```

##### `reset_no_speech_timeout` <a name="reset_no_speech_timeout" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.resetNoSpeechTimeout"></a>

```python
def reset_no_speech_timeout() -> None
```

##### `reset_use_timeout_based_endpointing` <a name="reset_use_timeout_based_endpointing" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.resetUseTimeoutBasedEndpointing"></a>

```python
def reset_use_timeout_based_endpointing() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.endpointerSensitivityInput">endpointer_sensitivity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.modelsInput">models_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.noSpeechTimeoutInput">no_speech_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.useTimeoutBasedEndpointingInput">use_timeout_based_endpointing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.endpointerSensitivity">endpointer_sensitivity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.models">models</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.noSpeechTimeout">no_speech_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.useTimeoutBasedEndpointing">use_timeout_based_endpointing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings">GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpointer_sensitivity_input`<sup>Optional</sup> <a name="endpointer_sensitivity_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.endpointerSensitivityInput"></a>

```python
endpointer_sensitivity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `models_input`<sup>Optional</sup> <a name="models_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.modelsInput"></a>

```python
models_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `no_speech_timeout_input`<sup>Optional</sup> <a name="no_speech_timeout_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.noSpeechTimeoutInput"></a>

```python
no_speech_timeout_input: str
```

- *Type:* str

---

##### `use_timeout_based_endpointing_input`<sup>Optional</sup> <a name="use_timeout_based_endpointing_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.useTimeoutBasedEndpointingInput"></a>

```python
use_timeout_based_endpointing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpointer_sensitivity`<sup>Required</sup> <a name="endpointer_sensitivity" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.endpointerSensitivity"></a>

```python
endpointer_sensitivity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.models"></a>

```python
models: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `no_speech_timeout`<sup>Required</sup> <a name="no_speech_timeout" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.noSpeechTimeout"></a>

```python
no_speech_timeout: str
```

- *Type:* str

---

##### `use_timeout_based_endpointing`<sup>Required</sup> <a name="use_timeout_based_endpointing" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.useTimeoutBasedEndpointing"></a>

```python
use_timeout_based_endpointing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings">GoogleDialogflowCxFlowAdvancedSettingsSpeechSettings</a>

---


### GoogleDialogflowCxFlowEventHandlersList <a name="GoogleDialogflowCxFlowEventHandlersList" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxFlowEventHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers">GoogleDialogflowCxFlowEventHandlers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers">GoogleDialogflowCxFlowEventHandlers</a>]]

---


### GoogleDialogflowCxFlowEventHandlersOutputReference <a name="GoogleDialogflowCxFlowEventHandlersOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.putTriggerFulfillment">put_trigger_fulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.resetEvent">reset_event</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.resetTargetFlow">reset_target_flow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.resetTargetPage">reset_target_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.resetTriggerFulfillment">reset_trigger_fulfillment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_trigger_fulfillment` <a name="put_trigger_fulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.putTriggerFulfillment"></a>

```python
def put_trigger_fulfillment(
  conditional_cases: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases]] = None,
  messages: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages]] = None,
  return_partial_responses: typing.Union[bool, IResolvable] = None,
  set_parameter_actions: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions]] = None,
  tag: str = None,
  webhook: str = None
) -> None
```

###### `conditional_cases`<sup>Optional</sup> <a name="conditional_cases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.putTriggerFulfillment.parameter.conditionalCases"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>]]

conditional_cases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#conditional_cases GoogleDialogflowCxFlow#conditional_cases}

---

###### `messages`<sup>Optional</sup> <a name="messages" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.putTriggerFulfillment.parameter.messages"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>]]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#messages GoogleDialogflowCxFlow#messages}

---

###### `return_partial_responses`<sup>Optional</sup> <a name="return_partial_responses" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.putTriggerFulfillment.parameter.returnPartialResponses"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#return_partial_responses GoogleDialogflowCxFlow#return_partial_responses}

---

###### `set_parameter_actions`<sup>Optional</sup> <a name="set_parameter_actions" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.putTriggerFulfillment.parameter.setParameterActions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>]]

set_parameter_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#set_parameter_actions GoogleDialogflowCxFlow#set_parameter_actions}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.putTriggerFulfillment.parameter.tag"></a>

- *Type:* str

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#tag GoogleDialogflowCxFlow#tag}

---

###### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.putTriggerFulfillment.parameter.webhook"></a>

- *Type:* str

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#webhook GoogleDialogflowCxFlow#webhook}

---

##### `reset_event` <a name="reset_event" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.resetEvent"></a>

```python
def reset_event() -> None
```

##### `reset_target_flow` <a name="reset_target_flow" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.resetTargetFlow"></a>

```python
def reset_target_flow() -> None
```

##### `reset_target_page` <a name="reset_target_page" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.resetTargetPage"></a>

```python
def reset_target_page() -> None
```

##### `reset_trigger_fulfillment` <a name="reset_trigger_fulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.resetTriggerFulfillment"></a>

```python
def reset_trigger_fulfillment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.triggerFulfillment">trigger_fulfillment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.eventInput">event_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.targetFlowInput">target_flow_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.targetPageInput">target_page_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.triggerFulfillmentInput">trigger_fulfillment_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment">GoogleDialogflowCxFlowEventHandlersTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.event">event</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.targetFlow">target_flow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.targetPage">target_page</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers">GoogleDialogflowCxFlowEventHandlers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `trigger_fulfillment`<sup>Required</sup> <a name="trigger_fulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.triggerFulfillment"></a>

```python
trigger_fulfillment: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference</a>

---

##### `event_input`<sup>Optional</sup> <a name="event_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.eventInput"></a>

```python
event_input: str
```

- *Type:* str

---

##### `target_flow_input`<sup>Optional</sup> <a name="target_flow_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.targetFlowInput"></a>

```python
target_flow_input: str
```

- *Type:* str

---

##### `target_page_input`<sup>Optional</sup> <a name="target_page_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.targetPageInput"></a>

```python
target_page_input: str
```

- *Type:* str

---

##### `trigger_fulfillment_input`<sup>Optional</sup> <a name="trigger_fulfillment_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.triggerFulfillmentInput"></a>

```python
trigger_fulfillment_input: GoogleDialogflowCxFlowEventHandlersTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment">GoogleDialogflowCxFlowEventHandlersTriggerFulfillment</a>

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.event"></a>

```python
event: str
```

- *Type:* str

---

##### `target_flow`<sup>Required</sup> <a name="target_flow" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.targetFlow"></a>

```python
target_flow: str
```

- *Type:* str

---

##### `target_page`<sup>Required</sup> <a name="target_page" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.targetPage"></a>

```python
target_page: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxFlowEventHandlers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlers">GoogleDialogflowCxFlowEventHandlers</a>]

---


### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>]]

---


### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.resetCases">reset_cases</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cases` <a name="reset_cases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.resetCases"></a>

```python
def reset_cases() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.casesInput">cases_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.cases">cases</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cases_input`<sup>Optional</sup> <a name="cases_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.casesInput"></a>

```python
cases_input: str
```

- *Type:* str

---

##### `cases`<sup>Required</sup> <a name="cases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.cases"></a>

```python
cases: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>]

---


### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess</a>

---


### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>]]

---


### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff</a>

---


### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.resetSsml">reset_ssml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ssml` <a name="reset_ssml" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.resetSsml"></a>

```python
def reset_ssml() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.allowPlaybackInterruption">allow_playback_interruption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.ssmlInput">ssml_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.ssml">ssml</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_playback_interruption`<sup>Required</sup> <a name="allow_playback_interruption" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.allowPlaybackInterruption"></a>

```python
allow_playback_interruption: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ssml_input`<sup>Optional</sup> <a name="ssml_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.ssmlInput"></a>

```python
ssml_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `ssml`<sup>Required</sup> <a name="ssml" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.ssml"></a>

```python
ssml: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText</a>

---


### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putConversationSuccess">put_conversation_success</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putLiveAgentHandoff">put_live_agent_handoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putOutputAudioText">put_output_audio_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putPlayAudio">put_play_audio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putTelephonyTransferCall">put_telephony_transfer_call</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putText">put_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetConversationSuccess">reset_conversation_success</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetLiveAgentHandoff">reset_live_agent_handoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetOutputAudioText">reset_output_audio_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetPayload">reset_payload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetPlayAudio">reset_play_audio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetTelephonyTransferCall">reset_telephony_transfer_call</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conversation_success` <a name="put_conversation_success" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putConversationSuccess"></a>

```python
def put_conversation_success(
  metadata: str = None
) -> None
```

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putConversationSuccess.parameter.metadata"></a>

- *Type:* str

Custom metadata. Dialogflow doesn't impose any structure on this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#metadata GoogleDialogflowCxFlow#metadata}

---

##### `put_live_agent_handoff` <a name="put_live_agent_handoff" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putLiveAgentHandoff"></a>

```python
def put_live_agent_handoff(
  metadata: str = None
) -> None
```

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putLiveAgentHandoff.parameter.metadata"></a>

- *Type:* str

Custom metadata. Dialogflow doesn't impose any structure on this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#metadata GoogleDialogflowCxFlow#metadata}

---

##### `put_output_audio_text` <a name="put_output_audio_text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putOutputAudioText"></a>

```python
def put_output_audio_text(
  ssml: str = None,
  text: str = None
) -> None
```

###### `ssml`<sup>Optional</sup> <a name="ssml" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putOutputAudioText.parameter.ssml"></a>

- *Type:* str

The SSML text to be synthesized. For more information, see SSML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#ssml GoogleDialogflowCxFlow#ssml}

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putOutputAudioText.parameter.text"></a>

- *Type:* str

The raw text to be synthesized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#text GoogleDialogflowCxFlow#text}

---

##### `put_play_audio` <a name="put_play_audio" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putPlayAudio"></a>

```python
def put_play_audio(
  audio_uri: str
) -> None
```

###### `audio_uri`<sup>Required</sup> <a name="audio_uri" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putPlayAudio.parameter.audioUri"></a>

- *Type:* str

URI of the audio clip.

Dialogflow does not impose any validation on this value. It is specific to the client that reads it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#audio_uri GoogleDialogflowCxFlow#audio_uri}

---

##### `put_telephony_transfer_call` <a name="put_telephony_transfer_call" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putTelephonyTransferCall"></a>

```python
def put_telephony_transfer_call(
  phone_number: str
) -> None
```

###### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putTelephonyTransferCall.parameter.phoneNumber"></a>

- *Type:* str

Transfer the call to a phone number in E.164 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#phone_number GoogleDialogflowCxFlow#phone_number}

---

##### `put_text` <a name="put_text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putText"></a>

```python
def put_text(
  text: typing.List[str] = None
) -> None
```

###### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putText.parameter.text"></a>

- *Type:* typing.List[str]

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#text GoogleDialogflowCxFlow#text}

---

##### `reset_channel` <a name="reset_channel" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_conversation_success` <a name="reset_conversation_success" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetConversationSuccess"></a>

```python
def reset_conversation_success() -> None
```

##### `reset_live_agent_handoff` <a name="reset_live_agent_handoff" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetLiveAgentHandoff"></a>

```python
def reset_live_agent_handoff() -> None
```

##### `reset_output_audio_text` <a name="reset_output_audio_text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetOutputAudioText"></a>

```python
def reset_output_audio_text() -> None
```

##### `reset_payload` <a name="reset_payload" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetPayload"></a>

```python
def reset_payload() -> None
```

##### `reset_play_audio` <a name="reset_play_audio" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetPlayAudio"></a>

```python
def reset_play_audio() -> None
```

##### `reset_telephony_transfer_call` <a name="reset_telephony_transfer_call" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetTelephonyTransferCall"></a>

```python
def reset_telephony_transfer_call() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.conversationSuccess">conversation_success</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.liveAgentHandoff">live_agent_handoff</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.outputAudioText">output_audio_text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.playAudio">play_audio</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.telephonyTransferCall">telephony_transfer_call</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.conversationSuccessInput">conversation_success_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.liveAgentHandoffInput">live_agent_handoff_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.outputAudioTextInput">output_audio_text_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.payloadInput">payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.playAudioInput">play_audio_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.telephonyTransferCallInput">telephony_transfer_call_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.textInput">text_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.payload">payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conversation_success`<sup>Required</sup> <a name="conversation_success" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.conversationSuccess"></a>

```python
conversation_success: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference</a>

---

##### `live_agent_handoff`<sup>Required</sup> <a name="live_agent_handoff" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.liveAgentHandoff"></a>

```python
live_agent_handoff: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference</a>

---

##### `output_audio_text`<sup>Required</sup> <a name="output_audio_text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.outputAudioText"></a>

```python
output_audio_text: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference</a>

---

##### `play_audio`<sup>Required</sup> <a name="play_audio" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.playAudio"></a>

```python
play_audio: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference</a>

---

##### `telephony_transfer_call`<sup>Required</sup> <a name="telephony_transfer_call" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.telephonyTransferCall"></a>

```python
telephony_transfer_call: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.text"></a>

```python
text: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference</a>

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `conversation_success_input`<sup>Optional</sup> <a name="conversation_success_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.conversationSuccessInput"></a>

```python
conversation_success_input: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess</a>

---

##### `live_agent_handoff_input`<sup>Optional</sup> <a name="live_agent_handoff_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.liveAgentHandoffInput"></a>

```python
live_agent_handoff_input: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff</a>

---

##### `output_audio_text_input`<sup>Optional</sup> <a name="output_audio_text_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.outputAudioTextInput"></a>

```python
output_audio_text_input: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText</a>

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.payloadInput"></a>

```python
payload_input: str
```

- *Type:* str

---

##### `play_audio_input`<sup>Optional</sup> <a name="play_audio_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.playAudioInput"></a>

```python
play_audio_input: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio</a>

---

##### `telephony_transfer_call_input`<sup>Optional</sup> <a name="telephony_transfer_call_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.telephonyTransferCallInput"></a>

```python
telephony_transfer_call_input: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall</a>

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.textInput"></a>

```python
text_input: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.payload"></a>

```python
payload: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>]

---


### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.allowPlaybackInterruption">allow_playback_interruption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.audioUriInput">audio_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.audioUri">audio_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_playback_interruption`<sup>Required</sup> <a name="allow_playback_interruption" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.allowPlaybackInterruption"></a>

```python
allow_playback_interruption: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `audio_uri_input`<sup>Optional</sup> <a name="audio_uri_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.audioUriInput"></a>

```python
audio_uri_input: str
```

- *Type:* str

---

##### `audio_uri`<sup>Required</sup> <a name="audio_uri" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.audioUri"></a>

```python
audio_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio</a>

---


### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall</a>

---


### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_text` <a name="reset_text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption">allow_playback_interruption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.textInput">text_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.text">text</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_playback_interruption`<sup>Required</sup> <a name="allow_playback_interruption" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption"></a>

```python
allow_playback_interruption: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.textInput"></a>

```python
text_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.text"></a>

```python
text: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a>

---


### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putConditionalCases">put_conditional_cases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putMessages">put_messages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putSetParameterActions">put_set_parameter_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetConditionalCases">reset_conditional_cases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetMessages">reset_messages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetReturnPartialResponses">reset_return_partial_responses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetSetParameterActions">reset_set_parameter_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetWebhook">reset_webhook</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditional_cases` <a name="put_conditional_cases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putConditionalCases"></a>

```python
def put_conditional_cases(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putConditionalCases.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>]]

---

##### `put_messages` <a name="put_messages" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putMessages"></a>

```python
def put_messages(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>]]

---

##### `put_set_parameter_actions` <a name="put_set_parameter_actions" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putSetParameterActions"></a>

```python
def put_set_parameter_actions(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putSetParameterActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>]]

---

##### `reset_conditional_cases` <a name="reset_conditional_cases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetConditionalCases"></a>

```python
def reset_conditional_cases() -> None
```

##### `reset_messages` <a name="reset_messages" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetMessages"></a>

```python
def reset_messages() -> None
```

##### `reset_return_partial_responses` <a name="reset_return_partial_responses" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetReturnPartialResponses"></a>

```python
def reset_return_partial_responses() -> None
```

##### `reset_set_parameter_actions` <a name="reset_set_parameter_actions" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetSetParameterActions"></a>

```python
def reset_set_parameter_actions() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_webhook` <a name="reset_webhook" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetWebhook"></a>

```python
def reset_webhook() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.conditionalCases">conditional_cases</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.messages">messages</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.setParameterActions">set_parameter_actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.conditionalCasesInput">conditional_cases_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.messagesInput">messages_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponsesInput">return_partial_responses_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.setParameterActionsInput">set_parameter_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.webhookInput">webhook_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponses">return_partial_responses</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.webhook">webhook</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment">GoogleDialogflowCxFlowEventHandlersTriggerFulfillment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditional_cases`<sup>Required</sup> <a name="conditional_cases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.conditionalCases"></a>

```python
conditional_cases: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList</a>

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.messages"></a>

```python
messages: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList</a>

---

##### `set_parameter_actions`<sup>Required</sup> <a name="set_parameter_actions" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.setParameterActions"></a>

```python
set_parameter_actions: GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList</a>

---

##### `conditional_cases_input`<sup>Optional</sup> <a name="conditional_cases_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.conditionalCasesInput"></a>

```python
conditional_cases_input: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>]]

---

##### `messages_input`<sup>Optional</sup> <a name="messages_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.messagesInput"></a>

```python
messages_input: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>]]

---

##### `return_partial_responses_input`<sup>Optional</sup> <a name="return_partial_responses_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponsesInput"></a>

```python
return_partial_responses_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `set_parameter_actions_input`<sup>Optional</sup> <a name="set_parameter_actions_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.setParameterActionsInput"></a>

```python
set_parameter_actions_input: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>]]

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `webhook_input`<sup>Optional</sup> <a name="webhook_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.webhookInput"></a>

```python
webhook_input: str
```

- *Type:* str

---

##### `return_partial_responses`<sup>Required</sup> <a name="return_partial_responses" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponses"></a>

```python
return_partial_responses: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.webhook"></a>

```python
webhook: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowEventHandlersTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillment">GoogleDialogflowCxFlowEventHandlersTriggerFulfillment</a>

---


### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>]]

---


### GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference <a name="GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.resetParameter">reset_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameter` <a name="reset_parameter" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.resetParameter"></a>

```python
def reset_parameter() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.parameterInput">parameter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.parameter">parameter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.parameterInput"></a>

```python
parameter_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.parameter"></a>

```python
parameter: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>]

---


### GoogleDialogflowCxFlowNluSettingsOutputReference <a name="GoogleDialogflowCxFlowNluSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.resetClassificationThreshold">reset_classification_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.resetModelTrainingMode">reset_model_training_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.resetModelType">reset_model_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_classification_threshold` <a name="reset_classification_threshold" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.resetClassificationThreshold"></a>

```python
def reset_classification_threshold() -> None
```

##### `reset_model_training_mode` <a name="reset_model_training_mode" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.resetModelTrainingMode"></a>

```python
def reset_model_training_mode() -> None
```

##### `reset_model_type` <a name="reset_model_type" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.resetModelType"></a>

```python
def reset_model_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.classificationThresholdInput">classification_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.modelTrainingModeInput">model_training_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.modelTypeInput">model_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.classificationThreshold">classification_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.modelTrainingMode">model_training_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.modelType">model_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings">GoogleDialogflowCxFlowNluSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classification_threshold_input`<sup>Optional</sup> <a name="classification_threshold_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.classificationThresholdInput"></a>

```python
classification_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_training_mode_input`<sup>Optional</sup> <a name="model_training_mode_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.modelTrainingModeInput"></a>

```python
model_training_mode_input: str
```

- *Type:* str

---

##### `model_type_input`<sup>Optional</sup> <a name="model_type_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.modelTypeInput"></a>

```python
model_type_input: str
```

- *Type:* str

---

##### `classification_threshold`<sup>Required</sup> <a name="classification_threshold" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.classificationThreshold"></a>

```python
classification_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_training_mode`<sup>Required</sup> <a name="model_training_mode" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.modelTrainingMode"></a>

```python
model_training_mode: str
```

- *Type:* str

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowNluSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowNluSettings">GoogleDialogflowCxFlowNluSettings</a>

---


### GoogleDialogflowCxFlowTimeoutsOutputReference <a name="GoogleDialogflowCxFlowTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts">GoogleDialogflowCxFlowTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxFlowTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTimeouts">GoogleDialogflowCxFlowTimeouts</a>]

---


### GoogleDialogflowCxFlowTransitionRoutesList <a name="GoogleDialogflowCxFlowTransitionRoutesList" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxFlowTransitionRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes">GoogleDialogflowCxFlowTransitionRoutes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes">GoogleDialogflowCxFlowTransitionRoutes</a>]]

---


### GoogleDialogflowCxFlowTransitionRoutesOutputReference <a name="GoogleDialogflowCxFlowTransitionRoutesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.putTriggerFulfillment">put_trigger_fulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.resetIntent">reset_intent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.resetTargetFlow">reset_target_flow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.resetTargetPage">reset_target_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.resetTriggerFulfillment">reset_trigger_fulfillment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_trigger_fulfillment` <a name="put_trigger_fulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.putTriggerFulfillment"></a>

```python
def put_trigger_fulfillment(
  conditional_cases: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases]] = None,
  messages: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages]] = None,
  return_partial_responses: typing.Union[bool, IResolvable] = None,
  set_parameter_actions: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions]] = None,
  tag: str = None,
  webhook: str = None
) -> None
```

###### `conditional_cases`<sup>Optional</sup> <a name="conditional_cases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.putTriggerFulfillment.parameter.conditionalCases"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>]]

conditional_cases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#conditional_cases GoogleDialogflowCxFlow#conditional_cases}

---

###### `messages`<sup>Optional</sup> <a name="messages" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.putTriggerFulfillment.parameter.messages"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>]]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#messages GoogleDialogflowCxFlow#messages}

---

###### `return_partial_responses`<sup>Optional</sup> <a name="return_partial_responses" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.putTriggerFulfillment.parameter.returnPartialResponses"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#return_partial_responses GoogleDialogflowCxFlow#return_partial_responses}

---

###### `set_parameter_actions`<sup>Optional</sup> <a name="set_parameter_actions" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.putTriggerFulfillment.parameter.setParameterActions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>]]

set_parameter_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#set_parameter_actions GoogleDialogflowCxFlow#set_parameter_actions}

---

###### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.putTriggerFulfillment.parameter.tag"></a>

- *Type:* str

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#tag GoogleDialogflowCxFlow#tag}

---

###### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.putTriggerFulfillment.parameter.webhook"></a>

- *Type:* str

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#webhook GoogleDialogflowCxFlow#webhook}

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_intent` <a name="reset_intent" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.resetIntent"></a>

```python
def reset_intent() -> None
```

##### `reset_target_flow` <a name="reset_target_flow" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.resetTargetFlow"></a>

```python
def reset_target_flow() -> None
```

##### `reset_target_page` <a name="reset_target_page" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.resetTargetPage"></a>

```python
def reset_target_page() -> None
```

##### `reset_trigger_fulfillment` <a name="reset_trigger_fulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.resetTriggerFulfillment"></a>

```python
def reset_trigger_fulfillment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.triggerFulfillment">trigger_fulfillment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.intentInput">intent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.targetFlowInput">target_flow_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.targetPageInput">target_page_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.triggerFulfillmentInput">trigger_fulfillment_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.intent">intent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.targetFlow">target_flow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.targetPage">target_page</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes">GoogleDialogflowCxFlowTransitionRoutes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `trigger_fulfillment`<sup>Required</sup> <a name="trigger_fulfillment" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.triggerFulfillment"></a>

```python
trigger_fulfillment: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `intent_input`<sup>Optional</sup> <a name="intent_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.intentInput"></a>

```python
intent_input: str
```

- *Type:* str

---

##### `target_flow_input`<sup>Optional</sup> <a name="target_flow_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.targetFlowInput"></a>

```python
target_flow_input: str
```

- *Type:* str

---

##### `target_page_input`<sup>Optional</sup> <a name="target_page_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.targetPageInput"></a>

```python
target_page_input: str
```

- *Type:* str

---

##### `trigger_fulfillment_input`<sup>Optional</sup> <a name="trigger_fulfillment_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.triggerFulfillmentInput"></a>

```python
trigger_fulfillment_input: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.intent"></a>

```python
intent: str
```

- *Type:* str

---

##### `target_flow`<sup>Required</sup> <a name="target_flow" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.targetFlow"></a>

```python
target_flow: str
```

- *Type:* str

---

##### `target_page`<sup>Required</sup> <a name="target_page" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.targetPage"></a>

```python
target_page: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxFlowTransitionRoutes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutes">GoogleDialogflowCxFlowTransitionRoutes</a>]

---


### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>]]

---


### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.resetCases">reset_cases</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cases` <a name="reset_cases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.resetCases"></a>

```python
def reset_cases() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.casesInput">cases_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.cases">cases</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cases_input`<sup>Optional</sup> <a name="cases_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.casesInput"></a>

```python
cases_input: str
```

- *Type:* str

---

##### `cases`<sup>Required</sup> <a name="cases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.cases"></a>

```python
cases: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>]

---


### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess</a>

---


### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>]]

---


### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff</a>

---


### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.resetSsml">reset_ssml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ssml` <a name="reset_ssml" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.resetSsml"></a>

```python
def reset_ssml() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.allowPlaybackInterruption">allow_playback_interruption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.ssmlInput">ssml_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.ssml">ssml</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_playback_interruption`<sup>Required</sup> <a name="allow_playback_interruption" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.allowPlaybackInterruption"></a>

```python
allow_playback_interruption: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ssml_input`<sup>Optional</sup> <a name="ssml_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.ssmlInput"></a>

```python
ssml_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `ssml`<sup>Required</sup> <a name="ssml" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.ssml"></a>

```python
ssml: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText</a>

---


### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putConversationSuccess">put_conversation_success</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putLiveAgentHandoff">put_live_agent_handoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putOutputAudioText">put_output_audio_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putPlayAudio">put_play_audio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putTelephonyTransferCall">put_telephony_transfer_call</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText">put_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetConversationSuccess">reset_conversation_success</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetLiveAgentHandoff">reset_live_agent_handoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetOutputAudioText">reset_output_audio_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetPayload">reset_payload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetPlayAudio">reset_play_audio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetTelephonyTransferCall">reset_telephony_transfer_call</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conversation_success` <a name="put_conversation_success" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putConversationSuccess"></a>

```python
def put_conversation_success(
  metadata: str = None
) -> None
```

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putConversationSuccess.parameter.metadata"></a>

- *Type:* str

Custom metadata. Dialogflow doesn't impose any structure on this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#metadata GoogleDialogflowCxFlow#metadata}

---

##### `put_live_agent_handoff` <a name="put_live_agent_handoff" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putLiveAgentHandoff"></a>

```python
def put_live_agent_handoff(
  metadata: str = None
) -> None
```

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putLiveAgentHandoff.parameter.metadata"></a>

- *Type:* str

Custom metadata. Dialogflow doesn't impose any structure on this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#metadata GoogleDialogflowCxFlow#metadata}

---

##### `put_output_audio_text` <a name="put_output_audio_text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putOutputAudioText"></a>

```python
def put_output_audio_text(
  ssml: str = None,
  text: str = None
) -> None
```

###### `ssml`<sup>Optional</sup> <a name="ssml" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putOutputAudioText.parameter.ssml"></a>

- *Type:* str

The SSML text to be synthesized. For more information, see SSML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#ssml GoogleDialogflowCxFlow#ssml}

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putOutputAudioText.parameter.text"></a>

- *Type:* str

The raw text to be synthesized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#text GoogleDialogflowCxFlow#text}

---

##### `put_play_audio` <a name="put_play_audio" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putPlayAudio"></a>

```python
def put_play_audio(
  audio_uri: str
) -> None
```

###### `audio_uri`<sup>Required</sup> <a name="audio_uri" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putPlayAudio.parameter.audioUri"></a>

- *Type:* str

URI of the audio clip.

Dialogflow does not impose any validation on this value. It is specific to the client that reads it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#audio_uri GoogleDialogflowCxFlow#audio_uri}

---

##### `put_telephony_transfer_call` <a name="put_telephony_transfer_call" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putTelephonyTransferCall"></a>

```python
def put_telephony_transfer_call(
  phone_number: str
) -> None
```

###### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putTelephonyTransferCall.parameter.phoneNumber"></a>

- *Type:* str

Transfer the call to a phone number in E.164 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#phone_number GoogleDialogflowCxFlow#phone_number}

---

##### `put_text` <a name="put_text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText"></a>

```python
def put_text(
  text: typing.List[str] = None
) -> None
```

###### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText.parameter.text"></a>

- *Type:* typing.List[str]

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_dialogflow_cx_flow#text GoogleDialogflowCxFlow#text}

---

##### `reset_channel` <a name="reset_channel" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_conversation_success` <a name="reset_conversation_success" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetConversationSuccess"></a>

```python
def reset_conversation_success() -> None
```

##### `reset_live_agent_handoff` <a name="reset_live_agent_handoff" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetLiveAgentHandoff"></a>

```python
def reset_live_agent_handoff() -> None
```

##### `reset_output_audio_text` <a name="reset_output_audio_text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetOutputAudioText"></a>

```python
def reset_output_audio_text() -> None
```

##### `reset_payload` <a name="reset_payload" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetPayload"></a>

```python
def reset_payload() -> None
```

##### `reset_play_audio` <a name="reset_play_audio" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetPlayAudio"></a>

```python
def reset_play_audio() -> None
```

##### `reset_telephony_transfer_call` <a name="reset_telephony_transfer_call" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetTelephonyTransferCall"></a>

```python
def reset_telephony_transfer_call() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.conversationSuccess">conversation_success</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.liveAgentHandoff">live_agent_handoff</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.outputAudioText">output_audio_text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.playAudio">play_audio</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.telephonyTransferCall">telephony_transfer_call</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.conversationSuccessInput">conversation_success_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.liveAgentHandoffInput">live_agent_handoff_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.outputAudioTextInput">output_audio_text_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.payloadInput">payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.playAudioInput">play_audio_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.telephonyTransferCallInput">telephony_transfer_call_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.textInput">text_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.payload">payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conversation_success`<sup>Required</sup> <a name="conversation_success" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.conversationSuccess"></a>

```python
conversation_success: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference</a>

---

##### `live_agent_handoff`<sup>Required</sup> <a name="live_agent_handoff" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.liveAgentHandoff"></a>

```python
live_agent_handoff: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference</a>

---

##### `output_audio_text`<sup>Required</sup> <a name="output_audio_text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.outputAudioText"></a>

```python
output_audio_text: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference</a>

---

##### `play_audio`<sup>Required</sup> <a name="play_audio" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.playAudio"></a>

```python
play_audio: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference</a>

---

##### `telephony_transfer_call`<sup>Required</sup> <a name="telephony_transfer_call" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.telephonyTransferCall"></a>

```python
telephony_transfer_call: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.text"></a>

```python
text: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference</a>

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `conversation_success_input`<sup>Optional</sup> <a name="conversation_success_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.conversationSuccessInput"></a>

```python
conversation_success_input: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess</a>

---

##### `live_agent_handoff_input`<sup>Optional</sup> <a name="live_agent_handoff_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.liveAgentHandoffInput"></a>

```python
live_agent_handoff_input: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff</a>

---

##### `output_audio_text_input`<sup>Optional</sup> <a name="output_audio_text_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.outputAudioTextInput"></a>

```python
output_audio_text_input: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText</a>

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.payloadInput"></a>

```python
payload_input: str
```

- *Type:* str

---

##### `play_audio_input`<sup>Optional</sup> <a name="play_audio_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.playAudioInput"></a>

```python
play_audio_input: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio</a>

---

##### `telephony_transfer_call_input`<sup>Optional</sup> <a name="telephony_transfer_call_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.telephonyTransferCallInput"></a>

```python
telephony_transfer_call_input: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall</a>

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.textInput"></a>

```python
text_input: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.payload"></a>

```python
payload: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>]

---


### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.allowPlaybackInterruption">allow_playback_interruption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.audioUriInput">audio_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.audioUri">audio_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_playback_interruption`<sup>Required</sup> <a name="allow_playback_interruption" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.allowPlaybackInterruption"></a>

```python
allow_playback_interruption: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `audio_uri_input`<sup>Optional</sup> <a name="audio_uri_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.audioUriInput"></a>

```python
audio_uri_input: str
```

- *Type:* str

---

##### `audio_uri`<sup>Required</sup> <a name="audio_uri" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.audioUri"></a>

```python
audio_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio</a>

---


### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall</a>

---


### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_text` <a name="reset_text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption">allow_playback_interruption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.textInput">text_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.text">text</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_playback_interruption`<sup>Required</sup> <a name="allow_playback_interruption" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption"></a>

```python
allow_playback_interruption: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.textInput"></a>

```python
text_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.text"></a>

```python
text: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a>

---


### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putConditionalCases">put_conditional_cases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putMessages">put_messages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putSetParameterActions">put_set_parameter_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetConditionalCases">reset_conditional_cases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetMessages">reset_messages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetReturnPartialResponses">reset_return_partial_responses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetSetParameterActions">reset_set_parameter_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetTag">reset_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetWebhook">reset_webhook</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditional_cases` <a name="put_conditional_cases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putConditionalCases"></a>

```python
def put_conditional_cases(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putConditionalCases.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>]]

---

##### `put_messages` <a name="put_messages" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putMessages"></a>

```python
def put_messages(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>]]

---

##### `put_set_parameter_actions` <a name="put_set_parameter_actions" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putSetParameterActions"></a>

```python
def put_set_parameter_actions(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putSetParameterActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>]]

---

##### `reset_conditional_cases` <a name="reset_conditional_cases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetConditionalCases"></a>

```python
def reset_conditional_cases() -> None
```

##### `reset_messages` <a name="reset_messages" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetMessages"></a>

```python
def reset_messages() -> None
```

##### `reset_return_partial_responses` <a name="reset_return_partial_responses" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetReturnPartialResponses"></a>

```python
def reset_return_partial_responses() -> None
```

##### `reset_set_parameter_actions` <a name="reset_set_parameter_actions" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetSetParameterActions"></a>

```python
def reset_set_parameter_actions() -> None
```

##### `reset_tag` <a name="reset_tag" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetTag"></a>

```python
def reset_tag() -> None
```

##### `reset_webhook` <a name="reset_webhook" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetWebhook"></a>

```python
def reset_webhook() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.conditionalCases">conditional_cases</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.messages">messages</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.setParameterActions">set_parameter_actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.conditionalCasesInput">conditional_cases_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.messagesInput">messages_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponsesInput">return_partial_responses_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.setParameterActionsInput">set_parameter_actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.tagInput">tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.webhookInput">webhook_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponses">return_partial_responses</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.tag">tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.webhook">webhook</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditional_cases`<sup>Required</sup> <a name="conditional_cases" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.conditionalCases"></a>

```python
conditional_cases: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList</a>

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.messages"></a>

```python
messages: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList</a>

---

##### `set_parameter_actions`<sup>Required</sup> <a name="set_parameter_actions" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.setParameterActions"></a>

```python
set_parameter_actions: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList</a>

---

##### `conditional_cases_input`<sup>Optional</sup> <a name="conditional_cases_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.conditionalCasesInput"></a>

```python
conditional_cases_input: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>]]

---

##### `messages_input`<sup>Optional</sup> <a name="messages_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.messagesInput"></a>

```python
messages_input: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>]]

---

##### `return_partial_responses_input`<sup>Optional</sup> <a name="return_partial_responses_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponsesInput"></a>

```python
return_partial_responses_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `set_parameter_actions_input`<sup>Optional</sup> <a name="set_parameter_actions_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.setParameterActionsInput"></a>

```python
set_parameter_actions_input: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>]]

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.tagInput"></a>

```python
tag_input: str
```

- *Type:* str

---

##### `webhook_input`<sup>Optional</sup> <a name="webhook_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.webhookInput"></a>

```python
webhook_input: str
```

- *Type:* str

---

##### `return_partial_responses`<sup>Required</sup> <a name="return_partial_responses" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponses"></a>

```python
return_partial_responses: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.tag"></a>

```python
tag: str
```

- *Type:* str

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.webhook"></a>

```python
webhook: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillment</a>

---


### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>]]

---


### GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference <a name="GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_flow

googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.resetParameter">reset_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameter` <a name="reset_parameter" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.resetParameter"></a>

```python
def reset_parameter() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.parameterInput">parameter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.parameter">parameter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.parameterInput"></a>

```python
parameter_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.parameter"></a>

```python
parameter: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxFlow.GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">GoogleDialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>]

---



