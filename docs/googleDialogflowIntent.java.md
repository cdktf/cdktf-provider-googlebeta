# `googleDialogflowIntent` Submodule <a name="`googleDialogflowIntent` Submodule" id="@cdktf/provider-google-beta.googleDialogflowIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowIntent <a name="GoogleDialogflowIntent" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent google_dialogflow_intent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_intent.GoogleDialogflowIntent;

GoogleDialogflowIntent.Builder.create(Construct scope, java.lang.String id)
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
//  .action(java.lang.String)
//  .defaultResponsePlatforms(java.util.List<java.lang.String>)
//  .events(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .inputContextNames(java.util.List<java.lang.String>)
//  .isFallback(java.lang.Boolean)
//  .isFallback(IResolvable)
//  .mlDisabled(java.lang.Boolean)
//  .mlDisabled(IResolvable)
//  .parentFollowupIntentName(java.lang.String)
//  .priority(java.lang.Number)
//  .project(java.lang.String)
//  .resetContexts(java.lang.Boolean)
//  .resetContexts(IResolvable)
//  .timeouts(GoogleDialogflowIntentTimeouts)
//  .webhookState(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of this intent to be displayed on the console. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | The name of the action associated with the intent. Note: The action name must not contain whitespaces. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.defaultResponsePlatforms">defaultResponsePlatforms</a></code> | <code>java.util.List<java.lang.String></code> | The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.events">events</a></code> | <code>java.util.List<java.lang.String></code> | The collection of event names that trigger the intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#id GoogleDialogflowIntent#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.inputContextNames">inputContextNames</a></code> | <code>java.util.List<java.lang.String></code> | The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.isFallback">isFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether this is a fallback intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.mlDisabled">mlDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether Machine Learning is disabled for the intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.parentFollowupIntentName">parentFollowupIntentName</a></code> | <code>java.lang.String</code> | The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of this intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#project GoogleDialogflowIntent#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.resetContexts">resetContexts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether to delete all contexts in the current session when this intent is matched. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.webhookState">webhookState</a></code> | <code>java.lang.String</code> | Indicates whether webhooks are enabled for the intent. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The name of this intent to be displayed on the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#display_name GoogleDialogflowIntent#display_name}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.action"></a>

- *Type:* java.lang.String

The name of the action associated with the intent. Note: The action name must not contain whitespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#action GoogleDialogflowIntent#action}

---

##### `defaultResponsePlatforms`<sup>Optional</sup> <a name="defaultResponsePlatforms" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.defaultResponsePlatforms"></a>

- *Type:* java.util.List<java.lang.String>

The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#default_response_platforms GoogleDialogflowIntent#default_response_platforms}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.events"></a>

- *Type:* java.util.List<java.lang.String>

The collection of event names that trigger the intent.

If the collection of input contexts is not empty, all of
the contexts must be present in the active user session for an event to trigger this intent. See the
[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#events GoogleDialogflowIntent#events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#id GoogleDialogflowIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputContextNames`<sup>Optional</sup> <a name="inputContextNames" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.inputContextNames"></a>

- *Type:* java.util.List<java.lang.String>

The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#input_context_names GoogleDialogflowIntent#input_context_names}

---

##### `isFallback`<sup>Optional</sup> <a name="isFallback" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.isFallback"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether this is a fallback intent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#is_fallback GoogleDialogflowIntent#is_fallback}

---

##### `mlDisabled`<sup>Optional</sup> <a name="mlDisabled" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.mlDisabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether Machine Learning is disabled for the intent.

Note: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML
ONLY match mode. Also, auto-markup in the UI is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#ml_disabled GoogleDialogflowIntent#ml_disabled}

---

##### `parentFollowupIntentName`<sup>Optional</sup> <a name="parentFollowupIntentName" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.parentFollowupIntentName"></a>

- *Type:* java.lang.String

The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#parent_followup_intent_name GoogleDialogflowIntent#parent_followup_intent_name}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

The priority of this intent.

Higher numbers represent higher priorities.

* If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds
  to the Normal priority in the console.
* If the supplied value is negative, the intent is ignored in runtime detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#priority GoogleDialogflowIntent#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#project GoogleDialogflowIntent#project}.

---

##### `resetContexts`<sup>Optional</sup> <a name="resetContexts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.resetContexts"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether to delete all contexts in the current session when this intent is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#reset_contexts GoogleDialogflowIntent#reset_contexts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#timeouts GoogleDialogflowIntent#timeouts}

---

##### `webhookState`<sup>Optional</sup> <a name="webhookState" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.Initializer.parameter.webhookState"></a>

- *Type:* java.lang.String

Indicates whether webhooks are enabled for the intent.

* WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.
* WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot
  filling prompt is forwarded to the webhook. Possible values: ["WEBHOOK_STATE_ENABLED", "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#webhook_state GoogleDialogflowIntent#webhook_state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetDefaultResponsePlatforms">resetDefaultResponsePlatforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetEvents">resetEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetInputContextNames">resetInputContextNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetIsFallback">resetIsFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetMlDisabled">resetMlDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetParentFollowupIntentName">resetParentFollowupIntentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetResetContexts">resetResetContexts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetWebhookState">resetWebhookState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.putTimeouts"></a>

```java
public void putTimeouts(GoogleDialogflowIntentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetAction"></a>

```java
public void resetAction()
```

##### `resetDefaultResponsePlatforms` <a name="resetDefaultResponsePlatforms" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetDefaultResponsePlatforms"></a>

```java
public void resetDefaultResponsePlatforms()
```

##### `resetEvents` <a name="resetEvents" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetEvents"></a>

```java
public void resetEvents()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetId"></a>

```java
public void resetId()
```

##### `resetInputContextNames` <a name="resetInputContextNames" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetInputContextNames"></a>

```java
public void resetInputContextNames()
```

##### `resetIsFallback` <a name="resetIsFallback" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetIsFallback"></a>

```java
public void resetIsFallback()
```

##### `resetMlDisabled` <a name="resetMlDisabled" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetMlDisabled"></a>

```java
public void resetMlDisabled()
```

##### `resetParentFollowupIntentName` <a name="resetParentFollowupIntentName" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetParentFollowupIntentName"></a>

```java
public void resetParentFollowupIntentName()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetProject"></a>

```java
public void resetProject()
```

##### `resetResetContexts` <a name="resetResetContexts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetResetContexts"></a>

```java
public void resetResetContexts()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWebhookState` <a name="resetWebhookState" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.resetWebhookState"></a>

```java
public void resetWebhookState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowIntent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_intent.GoogleDialogflowIntent;

GoogleDialogflowIntent.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_intent.GoogleDialogflowIntent;

GoogleDialogflowIntent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_intent.GoogleDialogflowIntent;

GoogleDialogflowIntent.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_intent.GoogleDialogflowIntent;

GoogleDialogflowIntent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDialogflowIntent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleDialogflowIntent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDialogflowIntent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDialogflowIntent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowIntent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.followupIntentInfo">followupIntentInfo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList">GoogleDialogflowIntentFollowupIntentInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.rootFollowupIntentName">rootFollowupIntentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference">GoogleDialogflowIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.defaultResponsePlatformsInput">defaultResponsePlatformsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.inputContextNamesInput">inputContextNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.isFallbackInput">isFallbackInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.mlDisabledInput">mlDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.parentFollowupIntentNameInput">parentFollowupIntentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.resetContextsInput">resetContextsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.webhookStateInput">webhookStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.defaultResponsePlatforms">defaultResponsePlatforms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.inputContextNames">inputContextNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.isFallback">isFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.mlDisabled">mlDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.parentFollowupIntentName">parentFollowupIntentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.resetContexts">resetContexts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.webhookState">webhookState</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `followupIntentInfo`<sup>Required</sup> <a name="followupIntentInfo" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.followupIntentInfo"></a>

```java
public GoogleDialogflowIntentFollowupIntentInfoList getFollowupIntentInfo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList">GoogleDialogflowIntentFollowupIntentInfoList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rootFollowupIntentName`<sup>Required</sup> <a name="rootFollowupIntentName" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.rootFollowupIntentName"></a>

```java
public java.lang.String getRootFollowupIntentName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.timeouts"></a>

```java
public GoogleDialogflowIntentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference">GoogleDialogflowIntentTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `defaultResponsePlatformsInput`<sup>Optional</sup> <a name="defaultResponsePlatformsInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.defaultResponsePlatformsInput"></a>

```java
public java.util.List<java.lang.String> getDefaultResponsePlatformsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputContextNamesInput`<sup>Optional</sup> <a name="inputContextNamesInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.inputContextNamesInput"></a>

```java
public java.util.List<java.lang.String> getInputContextNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isFallbackInput`<sup>Optional</sup> <a name="isFallbackInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.isFallbackInput"></a>

```java
public java.lang.Object getIsFallbackInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mlDisabledInput`<sup>Optional</sup> <a name="mlDisabledInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.mlDisabledInput"></a>

```java
public java.lang.Object getMlDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `parentFollowupIntentNameInput`<sup>Optional</sup> <a name="parentFollowupIntentNameInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.parentFollowupIntentNameInput"></a>

```java
public java.lang.String getParentFollowupIntentNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `resetContextsInput`<sup>Optional</sup> <a name="resetContextsInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.resetContextsInput"></a>

```java
public java.lang.Object getResetContextsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a>

---

##### `webhookStateInput`<sup>Optional</sup> <a name="webhookStateInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.webhookStateInput"></a>

```java
public java.lang.String getWebhookStateInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `defaultResponsePlatforms`<sup>Required</sup> <a name="defaultResponsePlatforms" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.defaultResponsePlatforms"></a>

```java
public java.util.List<java.lang.String> getDefaultResponsePlatforms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inputContextNames`<sup>Required</sup> <a name="inputContextNames" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.inputContextNames"></a>

```java
public java.util.List<java.lang.String> getInputContextNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `isFallback`<sup>Required</sup> <a name="isFallback" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.isFallback"></a>

```java
public java.lang.Object getIsFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mlDisabled`<sup>Required</sup> <a name="mlDisabled" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.mlDisabled"></a>

```java
public java.lang.Object getMlDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `parentFollowupIntentName`<sup>Required</sup> <a name="parentFollowupIntentName" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.parentFollowupIntentName"></a>

```java
public java.lang.String getParentFollowupIntentName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `resetContexts`<sup>Required</sup> <a name="resetContexts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.resetContexts"></a>

```java
public java.lang.Object getResetContexts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `webhookState`<sup>Required</sup> <a name="webhookState" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.webhookState"></a>

```java
public java.lang.String getWebhookState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowIntentConfig <a name="GoogleDialogflowIntentConfig" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_intent.GoogleDialogflowIntentConfig;

GoogleDialogflowIntentConfig.builder()
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
//  .action(java.lang.String)
//  .defaultResponsePlatforms(java.util.List<java.lang.String>)
//  .events(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .inputContextNames(java.util.List<java.lang.String>)
//  .isFallback(java.lang.Boolean)
//  .isFallback(IResolvable)
//  .mlDisabled(java.lang.Boolean)
//  .mlDisabled(IResolvable)
//  .parentFollowupIntentName(java.lang.String)
//  .priority(java.lang.Number)
//  .project(java.lang.String)
//  .resetContexts(java.lang.Boolean)
//  .resetContexts(IResolvable)
//  .timeouts(GoogleDialogflowIntentTimeouts)
//  .webhookState(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of this intent to be displayed on the console. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.action">action</a></code> | <code>java.lang.String</code> | The name of the action associated with the intent. Note: The action name must not contain whitespaces. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.defaultResponsePlatforms">defaultResponsePlatforms</a></code> | <code>java.util.List<java.lang.String></code> | The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | The collection of event names that trigger the intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#id GoogleDialogflowIntent#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.inputContextNames">inputContextNames</a></code> | <code>java.util.List<java.lang.String></code> | The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.isFallback">isFallback</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether this is a fallback intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.mlDisabled">mlDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether Machine Learning is disabled for the intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.parentFollowupIntentName">parentFollowupIntentName</a></code> | <code>java.lang.String</code> | The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of this intent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#project GoogleDialogflowIntent#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.resetContexts">resetContexts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether to delete all contexts in the current session when this intent is matched. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.webhookState">webhookState</a></code> | <code>java.lang.String</code> | Indicates whether webhooks are enabled for the intent. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The name of this intent to be displayed on the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#display_name GoogleDialogflowIntent#display_name}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The name of the action associated with the intent. Note: The action name must not contain whitespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#action GoogleDialogflowIntent#action}

---

##### `defaultResponsePlatforms`<sup>Optional</sup> <a name="defaultResponsePlatforms" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.defaultResponsePlatforms"></a>

```java
public java.util.List<java.lang.String> getDefaultResponsePlatforms();
```

- *Type:* java.util.List<java.lang.String>

The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#default_response_platforms GoogleDialogflowIntent#default_response_platforms}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

The collection of event names that trigger the intent.

If the collection of input contexts is not empty, all of
the contexts must be present in the active user session for an event to trigger this intent. See the
[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#events GoogleDialogflowIntent#events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#id GoogleDialogflowIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputContextNames`<sup>Optional</sup> <a name="inputContextNames" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.inputContextNames"></a>

```java
public java.util.List<java.lang.String> getInputContextNames();
```

- *Type:* java.util.List<java.lang.String>

The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#input_context_names GoogleDialogflowIntent#input_context_names}

---

##### `isFallback`<sup>Optional</sup> <a name="isFallback" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.isFallback"></a>

```java
public java.lang.Object getIsFallback();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether this is a fallback intent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#is_fallback GoogleDialogflowIntent#is_fallback}

---

##### `mlDisabled`<sup>Optional</sup> <a name="mlDisabled" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.mlDisabled"></a>

```java
public java.lang.Object getMlDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether Machine Learning is disabled for the intent.

Note: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML
ONLY match mode. Also, auto-markup in the UI is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#ml_disabled GoogleDialogflowIntent#ml_disabled}

---

##### `parentFollowupIntentName`<sup>Optional</sup> <a name="parentFollowupIntentName" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.parentFollowupIntentName"></a>

```java
public java.lang.String getParentFollowupIntentName();
```

- *Type:* java.lang.String

The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#parent_followup_intent_name GoogleDialogflowIntent#parent_followup_intent_name}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The priority of this intent.

Higher numbers represent higher priorities.

* If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds
  to the Normal priority in the console.
* If the supplied value is negative, the intent is ignored in runtime detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#priority GoogleDialogflowIntent#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#project GoogleDialogflowIntent#project}.

---

##### `resetContexts`<sup>Optional</sup> <a name="resetContexts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.resetContexts"></a>

```java
public java.lang.Object getResetContexts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether to delete all contexts in the current session when this intent is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#reset_contexts GoogleDialogflowIntent#reset_contexts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.timeouts"></a>

```java
public GoogleDialogflowIntentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#timeouts GoogleDialogflowIntent#timeouts}

---

##### `webhookState`<sup>Optional</sup> <a name="webhookState" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentConfig.property.webhookState"></a>

```java
public java.lang.String getWebhookState();
```

- *Type:* java.lang.String

Indicates whether webhooks are enabled for the intent.

* WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.
* WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot
  filling prompt is forwarded to the webhook. Possible values: ["WEBHOOK_STATE_ENABLED", "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#webhook_state GoogleDialogflowIntent#webhook_state}

---

### GoogleDialogflowIntentFollowupIntentInfo <a name="GoogleDialogflowIntentFollowupIntentInfo" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_intent.GoogleDialogflowIntentFollowupIntentInfo;

GoogleDialogflowIntentFollowupIntentInfo.builder()
    .build();
```


### GoogleDialogflowIntentTimeouts <a name="GoogleDialogflowIntentTimeouts" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_intent.GoogleDialogflowIntentTimeouts;

GoogleDialogflowIntentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#create GoogleDialogflowIntent#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#delete GoogleDialogflowIntent#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#update GoogleDialogflowIntent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#create GoogleDialogflowIntent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#delete GoogleDialogflowIntent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_dialogflow_intent#update GoogleDialogflowIntent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowIntentFollowupIntentInfoList <a name="GoogleDialogflowIntentFollowupIntentInfoList" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_intent.GoogleDialogflowIntentFollowupIntentInfoList;

new GoogleDialogflowIntentFollowupIntentInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.get"></a>

```java
public GoogleDialogflowIntentFollowupIntentInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleDialogflowIntentFollowupIntentInfoOutputReference <a name="GoogleDialogflowIntentFollowupIntentInfoOutputReference" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_intent.GoogleDialogflowIntentFollowupIntentInfoOutputReference;

new GoogleDialogflowIntentFollowupIntentInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.followupIntentName">followupIntentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.parentFollowupIntentName">parentFollowupIntentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfo">GoogleDialogflowIntentFollowupIntentInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `followupIntentName`<sup>Required</sup> <a name="followupIntentName" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.followupIntentName"></a>

```java
public java.lang.String getFollowupIntentName();
```

- *Type:* java.lang.String

---

##### `parentFollowupIntentName`<sup>Required</sup> <a name="parentFollowupIntentName" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.parentFollowupIntentName"></a>

```java
public java.lang.String getParentFollowupIntentName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfoOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowIntentFollowupIntentInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentFollowupIntentInfo">GoogleDialogflowIntentFollowupIntentInfo</a>

---


### GoogleDialogflowIntentTimeoutsOutputReference <a name="GoogleDialogflowIntentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_dialogflow_intent.GoogleDialogflowIntentTimeoutsOutputReference;

new GoogleDialogflowIntentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleDialogflowIntent.GoogleDialogflowIntentTimeouts">GoogleDialogflowIntentTimeouts</a>

---



