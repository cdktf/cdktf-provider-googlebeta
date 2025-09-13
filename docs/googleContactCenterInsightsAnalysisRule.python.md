# `googleContactCenterInsightsAnalysisRule` Submodule <a name="`googleContactCenterInsightsAnalysisRule` Submodule" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsAnalysisRule <a name="GoogleContactCenterInsightsAnalysisRule" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule google_contact_center_insights_analysis_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_analysis_rule

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  active: typing.Union[bool, IResolvable] = None,
  analysis_percentage: typing.Union[int, float] = None,
  annotator_selector: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector = None,
  conversation_filter: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleContactCenterInsightsAnalysisRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.analysisPercentage">analysis_percentage</a></code> | <code>typing.Union[int, float]</code> | Percentage of conversations that we should apply this analysis setting automatically, between [0, 1]. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.annotatorSelector">annotator_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | annotator_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.conversationFilter">conversation_filter</a></code> | <code>str</code> | Filter for the conversations that should apply this analysis rule. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display Name of the analysis rule. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#id GoogleContactCenterInsightsAnalysisRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#project GoogleContactCenterInsightsAnalysisRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.location"></a>

- *Type:* str

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#location GoogleContactCenterInsightsAnalysisRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.active"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#active GoogleContactCenterInsightsAnalysisRule#active}

---

##### `analysis_percentage`<sup>Optional</sup> <a name="analysis_percentage" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.analysisPercentage"></a>

- *Type:* typing.Union[int, float]

Percentage of conversations that we should apply this analysis setting automatically, between [0, 1].

For example, 0.1 means 10%. Conversations
are sampled in a determenestic way. The original runtime_percentage &
upload percentage will be replaced by defining filters on the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#analysis_percentage GoogleContactCenterInsightsAnalysisRule#analysis_percentage}

---

##### `annotator_selector`<sup>Optional</sup> <a name="annotator_selector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.annotatorSelector"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

annotator_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#annotator_selector GoogleContactCenterInsightsAnalysisRule#annotator_selector}

---

##### `conversation_filter`<sup>Optional</sup> <a name="conversation_filter" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.conversationFilter"></a>

- *Type:* str

Filter for the conversations that should apply this analysis rule.

An empty filter means this analysis rule applies to all
conversations.
Refer to https://cloud.google.com/contact-center/insights/docs/filtering
for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#conversation_filter GoogleContactCenterInsightsAnalysisRule#conversation_filter}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.displayName"></a>

- *Type:* str

Display Name of the analysis rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#display_name GoogleContactCenterInsightsAnalysisRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#id GoogleContactCenterInsightsAnalysisRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#project GoogleContactCenterInsightsAnalysisRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#timeouts GoogleContactCenterInsightsAnalysisRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector">put_annotator_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetAnalysisPercentage">reset_analysis_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetAnnotatorSelector">reset_annotator_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetConversationFilter">reset_conversation_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_annotator_selector` <a name="put_annotator_selector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector"></a>

```python
def put_annotator_selector(
  issue_models: typing.List[str] = None,
  phrase_matchers: typing.List[str] = None,
  qa_config: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig = None,
  run_entity_annotator: typing.Union[bool, IResolvable] = None,
  run_intent_annotator: typing.Union[bool, IResolvable] = None,
  run_interruption_annotator: typing.Union[bool, IResolvable] = None,
  run_issue_model_annotator: typing.Union[bool, IResolvable] = None,
  run_phrase_matcher_annotator: typing.Union[bool, IResolvable] = None,
  run_qa_annotator: typing.Union[bool, IResolvable] = None,
  run_sentiment_annotator: typing.Union[bool, IResolvable] = None,
  run_silence_annotator: typing.Union[bool, IResolvable] = None,
  run_summarization_annotator: typing.Union[bool, IResolvable] = None,
  summarization_config: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig = None
) -> None
```

###### `issue_models`<sup>Optional</sup> <a name="issue_models" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.issueModels"></a>

- *Type:* typing.List[str]

The issue model to run.

If not provided, the most recently deployed topic
model will be used. The provided issue model will only be used for
inference if the issue model is deployed and if run_issue_model_annotator
is set to true. If more than one issue model is provided, only the first
provided issue model will be used for inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#issue_models GoogleContactCenterInsightsAnalysisRule#issue_models}

---

###### `phrase_matchers`<sup>Optional</sup> <a name="phrase_matchers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.phraseMatchers"></a>

- *Type:* typing.List[str]

The list of phrase matchers to run.

If not provided, all active phrase
matchers will be used. If inactive phrase matchers are provided, they will
not be used. Phrase matchers will be run only if
run_phrase_matcher_annotator is set to true. Format:
projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#phrase_matchers GoogleContactCenterInsightsAnalysisRule#phrase_matchers}

---

###### `qa_config`<sup>Optional</sup> <a name="qa_config" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.qaConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

qa_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#qa_config GoogleContactCenterInsightsAnalysisRule#qa_config}

---

###### `run_entity_annotator`<sup>Optional</sup> <a name="run_entity_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runEntityAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the entity annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_entity_annotator GoogleContactCenterInsightsAnalysisRule#run_entity_annotator}

---

###### `run_intent_annotator`<sup>Optional</sup> <a name="run_intent_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runIntentAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the intent annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_intent_annotator GoogleContactCenterInsightsAnalysisRule#run_intent_annotator}

---

###### `run_interruption_annotator`<sup>Optional</sup> <a name="run_interruption_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runInterruptionAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the interruption annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_interruption_annotator GoogleContactCenterInsightsAnalysisRule#run_interruption_annotator}

---

###### `run_issue_model_annotator`<sup>Optional</sup> <a name="run_issue_model_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runIssueModelAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the issue model annotator. A model should have already been deployed for this to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_issue_model_annotator GoogleContactCenterInsightsAnalysisRule#run_issue_model_annotator}

---

###### `run_phrase_matcher_annotator`<sup>Optional</sup> <a name="run_phrase_matcher_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runPhraseMatcherAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the active phrase matcher annotator(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_phrase_matcher_annotator GoogleContactCenterInsightsAnalysisRule#run_phrase_matcher_annotator}

---

###### `run_qa_annotator`<sup>Optional</sup> <a name="run_qa_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runQaAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the QA annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_qa_annotator GoogleContactCenterInsightsAnalysisRule#run_qa_annotator}

---

###### `run_sentiment_annotator`<sup>Optional</sup> <a name="run_sentiment_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runSentimentAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the sentiment annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_sentiment_annotator GoogleContactCenterInsightsAnalysisRule#run_sentiment_annotator}

---

###### `run_silence_annotator`<sup>Optional</sup> <a name="run_silence_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runSilenceAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the silence annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_silence_annotator GoogleContactCenterInsightsAnalysisRule#run_silence_annotator}

---

###### `run_summarization_annotator`<sup>Optional</sup> <a name="run_summarization_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.runSummarizationAnnotator"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the summarization annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_summarization_annotator GoogleContactCenterInsightsAnalysisRule#run_summarization_annotator}

---

###### `summarization_config`<sup>Optional</sup> <a name="summarization_config" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putAnnotatorSelector.parameter.summarizationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

summarization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#summarization_config GoogleContactCenterInsightsAnalysisRule#summarization_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#create GoogleContactCenterInsightsAnalysisRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#delete GoogleContactCenterInsightsAnalysisRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#update GoogleContactCenterInsightsAnalysisRule#update}.

---

##### `reset_active` <a name="reset_active" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_analysis_percentage` <a name="reset_analysis_percentage" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetAnalysisPercentage"></a>

```python
def reset_analysis_percentage() -> None
```

##### `reset_annotator_selector` <a name="reset_annotator_selector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetAnnotatorSelector"></a>

```python
def reset_annotator_selector() -> None
```

##### `reset_conversation_filter` <a name="reset_conversation_filter" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetConversationFilter"></a>

```python
def reset_conversation_filter() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_analysis_rule

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_analysis_rule

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_analysis_rule

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_analysis_rule

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleContactCenterInsightsAnalysisRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleContactCenterInsightsAnalysisRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleContactCenterInsightsAnalysisRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsAnalysisRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.annotatorSelector">annotator_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference">GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.activeInput">active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.analysisPercentageInput">analysis_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.annotatorSelectorInput">annotator_selector_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.conversationFilterInput">conversation_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.analysisPercentage">analysis_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.conversationFilter">conversation_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `annotator_selector`<sup>Required</sup> <a name="annotator_selector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.annotatorSelector"></a>

```python
annotator_selector: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.timeouts"></a>

```python
timeouts: GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference">GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.activeInput"></a>

```python
active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `analysis_percentage_input`<sup>Optional</sup> <a name="analysis_percentage_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.analysisPercentageInput"></a>

```python
analysis_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `annotator_selector_input`<sup>Optional</sup> <a name="annotator_selector_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.annotatorSelectorInput"></a>

```python
annotator_selector_input: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---

##### `conversation_filter_input`<sup>Optional</sup> <a name="conversation_filter_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.conversationFilterInput"></a>

```python
conversation_filter_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleContactCenterInsightsAnalysisRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>]

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `analysis_percentage`<sup>Required</sup> <a name="analysis_percentage" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.analysisPercentage"></a>

```python
analysis_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `conversation_filter`<sup>Required</sup> <a name="conversation_filter" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.conversationFilter"></a>

```python
conversation_filter: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_analysis_rule

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector(
  issue_models: typing.List[str] = None,
  phrase_matchers: typing.List[str] = None,
  qa_config: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig = None,
  run_entity_annotator: typing.Union[bool, IResolvable] = None,
  run_intent_annotator: typing.Union[bool, IResolvable] = None,
  run_interruption_annotator: typing.Union[bool, IResolvable] = None,
  run_issue_model_annotator: typing.Union[bool, IResolvable] = None,
  run_phrase_matcher_annotator: typing.Union[bool, IResolvable] = None,
  run_qa_annotator: typing.Union[bool, IResolvable] = None,
  run_sentiment_annotator: typing.Union[bool, IResolvable] = None,
  run_silence_annotator: typing.Union[bool, IResolvable] = None,
  run_summarization_annotator: typing.Union[bool, IResolvable] = None,
  summarization_config: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.issueModels">issue_models</a></code> | <code>typing.List[str]</code> | The issue model to run. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.phraseMatchers">phrase_matchers</a></code> | <code>typing.List[str]</code> | The list of phrase matchers to run. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.qaConfig">qa_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | qa_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runEntityAnnotator">run_entity_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the entity annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIntentAnnotator">run_intent_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the intent annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runInterruptionAnnotator">run_interruption_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the interruption annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIssueModelAnnotator">run_issue_model_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the issue model annotator. A model should have already been deployed for this to take effect. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runPhraseMatcherAnnotator">run_phrase_matcher_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the active phrase matcher annotator(s). |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runQaAnnotator">run_qa_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the QA annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSentimentAnnotator">run_sentiment_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the sentiment annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSilenceAnnotator">run_silence_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the silence annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSummarizationAnnotator">run_summarization_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to run the summarization annotator. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.summarizationConfig">summarization_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | summarization_config block. |

---

##### `issue_models`<sup>Optional</sup> <a name="issue_models" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.issueModels"></a>

```python
issue_models: typing.List[str]
```

- *Type:* typing.List[str]

The issue model to run.

If not provided, the most recently deployed topic
model will be used. The provided issue model will only be used for
inference if the issue model is deployed and if run_issue_model_annotator
is set to true. If more than one issue model is provided, only the first
provided issue model will be used for inference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#issue_models GoogleContactCenterInsightsAnalysisRule#issue_models}

---

##### `phrase_matchers`<sup>Optional</sup> <a name="phrase_matchers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.phraseMatchers"></a>

```python
phrase_matchers: typing.List[str]
```

- *Type:* typing.List[str]

The list of phrase matchers to run.

If not provided, all active phrase
matchers will be used. If inactive phrase matchers are provided, they will
not be used. Phrase matchers will be run only if
run_phrase_matcher_annotator is set to true. Format:
projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#phrase_matchers GoogleContactCenterInsightsAnalysisRule#phrase_matchers}

---

##### `qa_config`<sup>Optional</sup> <a name="qa_config" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.qaConfig"></a>

```python
qa_config: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

qa_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#qa_config GoogleContactCenterInsightsAnalysisRule#qa_config}

---

##### `run_entity_annotator`<sup>Optional</sup> <a name="run_entity_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runEntityAnnotator"></a>

```python
run_entity_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the entity annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_entity_annotator GoogleContactCenterInsightsAnalysisRule#run_entity_annotator}

---

##### `run_intent_annotator`<sup>Optional</sup> <a name="run_intent_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIntentAnnotator"></a>

```python
run_intent_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the intent annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_intent_annotator GoogleContactCenterInsightsAnalysisRule#run_intent_annotator}

---

##### `run_interruption_annotator`<sup>Optional</sup> <a name="run_interruption_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runInterruptionAnnotator"></a>

```python
run_interruption_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the interruption annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_interruption_annotator GoogleContactCenterInsightsAnalysisRule#run_interruption_annotator}

---

##### `run_issue_model_annotator`<sup>Optional</sup> <a name="run_issue_model_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runIssueModelAnnotator"></a>

```python
run_issue_model_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the issue model annotator. A model should have already been deployed for this to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_issue_model_annotator GoogleContactCenterInsightsAnalysisRule#run_issue_model_annotator}

---

##### `run_phrase_matcher_annotator`<sup>Optional</sup> <a name="run_phrase_matcher_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runPhraseMatcherAnnotator"></a>

```python
run_phrase_matcher_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the active phrase matcher annotator(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_phrase_matcher_annotator GoogleContactCenterInsightsAnalysisRule#run_phrase_matcher_annotator}

---

##### `run_qa_annotator`<sup>Optional</sup> <a name="run_qa_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runQaAnnotator"></a>

```python
run_qa_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the QA annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_qa_annotator GoogleContactCenterInsightsAnalysisRule#run_qa_annotator}

---

##### `run_sentiment_annotator`<sup>Optional</sup> <a name="run_sentiment_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSentimentAnnotator"></a>

```python
run_sentiment_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the sentiment annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_sentiment_annotator GoogleContactCenterInsightsAnalysisRule#run_sentiment_annotator}

---

##### `run_silence_annotator`<sup>Optional</sup> <a name="run_silence_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSilenceAnnotator"></a>

```python
run_silence_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the silence annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_silence_annotator GoogleContactCenterInsightsAnalysisRule#run_silence_annotator}

---

##### `run_summarization_annotator`<sup>Optional</sup> <a name="run_summarization_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.runSummarizationAnnotator"></a>

```python
run_summarization_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to run the summarization annotator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#run_summarization_annotator GoogleContactCenterInsightsAnalysisRule#run_summarization_annotator}

---

##### `summarization_config`<sup>Optional</sup> <a name="summarization_config" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector.property.summarizationConfig"></a>

```python
summarization_config: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

summarization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#summarization_config GoogleContactCenterInsightsAnalysisRule#summarization_config}

---

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_analysis_rule

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig(
  scorecard_list: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.property.scorecardList">scorecard_list</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | scorecard_list block. |

---

##### `scorecard_list`<sup>Optional</sup> <a name="scorecard_list" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig.property.scorecardList"></a>

```python
scorecard_list: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

scorecard_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#scorecard_list GoogleContactCenterInsightsAnalysisRule#scorecard_list}

---

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_analysis_rule

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct(
  qa_scorecard_revisions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.property.qaScorecardRevisions">qa_scorecard_revisions</a></code> | <code>typing.List[str]</code> | List of QaScorecardRevisions. |

---

##### `qa_scorecard_revisions`<sup>Optional</sup> <a name="qa_scorecard_revisions" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct.property.qaScorecardRevisions"></a>

```python
qa_scorecard_revisions: typing.List[str]
```

- *Type:* typing.List[str]

List of QaScorecardRevisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#qa_scorecard_revisions GoogleContactCenterInsightsAnalysisRule#qa_scorecard_revisions}

---

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_analysis_rule

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig(
  conversation_profile: str = None,
  summarization_model: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.conversationProfile">conversation_profile</a></code> | <code>str</code> | Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.summarizationModel">summarization_model</a></code> | <code>str</code> | Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"]. |

---

##### `conversation_profile`<sup>Optional</sup> <a name="conversation_profile" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.conversationProfile"></a>

```python
conversation_profile: str
```

- *Type:* str

Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#conversation_profile GoogleContactCenterInsightsAnalysisRule#conversation_profile}

---

##### `summarization_model`<sup>Optional</sup> <a name="summarization_model" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig.property.summarizationModel"></a>

```python
summarization_model: str
```

- *Type:* str

Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#summarization_model GoogleContactCenterInsightsAnalysisRule#summarization_model}

---

### GoogleContactCenterInsightsAnalysisRuleConfig <a name="GoogleContactCenterInsightsAnalysisRuleConfig" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_analysis_rule

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  active: typing.Union[bool, IResolvable] = None,
  analysis_percentage: typing.Union[int, float] = None,
  annotator_selector: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector = None,
  conversation_filter: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleContactCenterInsightsAnalysisRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.location">location</a></code> | <code>str</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.active">active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.analysisPercentage">analysis_percentage</a></code> | <code>typing.Union[int, float]</code> | Percentage of conversations that we should apply this analysis setting automatically, between [0, 1]. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.annotatorSelector">annotator_selector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | annotator_selector block. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.conversationFilter">conversation_filter</a></code> | <code>str</code> | Filter for the conversations that should apply this analysis rule. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.displayName">display_name</a></code> | <code>str</code> | Display Name of the analysis rule. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#id GoogleContactCenterInsightsAnalysisRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#project GoogleContactCenterInsightsAnalysisRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#location GoogleContactCenterInsightsAnalysisRule#location}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.active"></a>

```python
active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, apply this rule to conversations. Otherwise, this rule is inactive and saved as a draft.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#active GoogleContactCenterInsightsAnalysisRule#active}

---

##### `analysis_percentage`<sup>Optional</sup> <a name="analysis_percentage" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.analysisPercentage"></a>

```python
analysis_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Percentage of conversations that we should apply this analysis setting automatically, between [0, 1].

For example, 0.1 means 10%. Conversations
are sampled in a determenestic way. The original runtime_percentage &
upload percentage will be replaced by defining filters on the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#analysis_percentage GoogleContactCenterInsightsAnalysisRule#analysis_percentage}

---

##### `annotator_selector`<sup>Optional</sup> <a name="annotator_selector" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.annotatorSelector"></a>

```python
annotator_selector: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

annotator_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#annotator_selector GoogleContactCenterInsightsAnalysisRule#annotator_selector}

---

##### `conversation_filter`<sup>Optional</sup> <a name="conversation_filter" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.conversationFilter"></a>

```python
conversation_filter: str
```

- *Type:* str

Filter for the conversations that should apply this analysis rule.

An empty filter means this analysis rule applies to all
conversations.
Refer to https://cloud.google.com/contact-center/insights/docs/filtering
for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#conversation_filter GoogleContactCenterInsightsAnalysisRule#conversation_filter}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display Name of the analysis rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#display_name GoogleContactCenterInsightsAnalysisRule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#id GoogleContactCenterInsightsAnalysisRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#project GoogleContactCenterInsightsAnalysisRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleConfig.property.timeouts"></a>

```python
timeouts: GoogleContactCenterInsightsAnalysisRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#timeouts GoogleContactCenterInsightsAnalysisRule#timeouts}

---

### GoogleContactCenterInsightsAnalysisRuleTimeouts <a name="GoogleContactCenterInsightsAnalysisRuleTimeouts" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_analysis_rule

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#create GoogleContactCenterInsightsAnalysisRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#delete GoogleContactCenterInsightsAnalysisRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#update GoogleContactCenterInsightsAnalysisRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#create GoogleContactCenterInsightsAnalysisRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#delete GoogleContactCenterInsightsAnalysisRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#update GoogleContactCenterInsightsAnalysisRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_analysis_rule

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig">put_qa_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig">put_summarization_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetIssueModels">reset_issue_models</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetPhraseMatchers">reset_phrase_matchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetQaConfig">reset_qa_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunEntityAnnotator">reset_run_entity_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIntentAnnotator">reset_run_intent_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunInterruptionAnnotator">reset_run_interruption_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIssueModelAnnotator">reset_run_issue_model_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunPhraseMatcherAnnotator">reset_run_phrase_matcher_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunQaAnnotator">reset_run_qa_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSentimentAnnotator">reset_run_sentiment_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSilenceAnnotator">reset_run_silence_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSummarizationAnnotator">reset_run_summarization_annotator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetSummarizationConfig">reset_summarization_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_qa_config` <a name="put_qa_config" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig"></a>

```python
def put_qa_config(
  scorecard_list: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct = None
) -> None
```

###### `scorecard_list`<sup>Optional</sup> <a name="scorecard_list" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putQaConfig.parameter.scorecardList"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

scorecard_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#scorecard_list GoogleContactCenterInsightsAnalysisRule#scorecard_list}

---

##### `put_summarization_config` <a name="put_summarization_config" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig"></a>

```python
def put_summarization_config(
  conversation_profile: str = None,
  summarization_model: str = None
) -> None
```

###### `conversation_profile`<sup>Optional</sup> <a name="conversation_profile" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig.parameter.conversationProfile"></a>

- *Type:* str

Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#conversation_profile GoogleContactCenterInsightsAnalysisRule#conversation_profile}

---

###### `summarization_model`<sup>Optional</sup> <a name="summarization_model" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.putSummarizationConfig.parameter.summarizationModel"></a>

- *Type:* str

Default summarization model to be used. Possible values: SUMMARIZATION_MODEL_UNSPECIFIED BASELINE_MODEL BASELINE_MODEL_V2_0 Possible values: ["BASELINE_MODEL", "BASELINE_MODEL_V2_0"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#summarization_model GoogleContactCenterInsightsAnalysisRule#summarization_model}

---

##### `reset_issue_models` <a name="reset_issue_models" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetIssueModels"></a>

```python
def reset_issue_models() -> None
```

##### `reset_phrase_matchers` <a name="reset_phrase_matchers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetPhraseMatchers"></a>

```python
def reset_phrase_matchers() -> None
```

##### `reset_qa_config` <a name="reset_qa_config" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetQaConfig"></a>

```python
def reset_qa_config() -> None
```

##### `reset_run_entity_annotator` <a name="reset_run_entity_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunEntityAnnotator"></a>

```python
def reset_run_entity_annotator() -> None
```

##### `reset_run_intent_annotator` <a name="reset_run_intent_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIntentAnnotator"></a>

```python
def reset_run_intent_annotator() -> None
```

##### `reset_run_interruption_annotator` <a name="reset_run_interruption_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunInterruptionAnnotator"></a>

```python
def reset_run_interruption_annotator() -> None
```

##### `reset_run_issue_model_annotator` <a name="reset_run_issue_model_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunIssueModelAnnotator"></a>

```python
def reset_run_issue_model_annotator() -> None
```

##### `reset_run_phrase_matcher_annotator` <a name="reset_run_phrase_matcher_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunPhraseMatcherAnnotator"></a>

```python
def reset_run_phrase_matcher_annotator() -> None
```

##### `reset_run_qa_annotator` <a name="reset_run_qa_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunQaAnnotator"></a>

```python
def reset_run_qa_annotator() -> None
```

##### `reset_run_sentiment_annotator` <a name="reset_run_sentiment_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSentimentAnnotator"></a>

```python
def reset_run_sentiment_annotator() -> None
```

##### `reset_run_silence_annotator` <a name="reset_run_silence_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSilenceAnnotator"></a>

```python
def reset_run_silence_annotator() -> None
```

##### `reset_run_summarization_annotator` <a name="reset_run_summarization_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetRunSummarizationAnnotator"></a>

```python
def reset_run_summarization_annotator() -> None
```

##### `reset_summarization_config` <a name="reset_summarization_config" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.resetSummarizationConfig"></a>

```python
def reset_summarization_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfig">qa_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfig">summarization_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModelsInput">issue_models_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchersInput">phrase_matchers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfigInput">qa_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotatorInput">run_entity_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotatorInput">run_intent_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotatorInput">run_interruption_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotatorInput">run_issue_model_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotatorInput">run_phrase_matcher_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotatorInput">run_qa_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotatorInput">run_sentiment_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotatorInput">run_silence_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotatorInput">run_summarization_annotator_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfigInput">summarization_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModels">issue_models</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchers">phrase_matchers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotator">run_entity_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotator">run_intent_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotator">run_interruption_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotator">run_issue_model_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotator">run_phrase_matcher_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotator">run_qa_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotator">run_sentiment_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotator">run_silence_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotator">run_summarization_annotator</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `qa_config`<sup>Required</sup> <a name="qa_config" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfig"></a>

```python
qa_config: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference</a>

---

##### `summarization_config`<sup>Required</sup> <a name="summarization_config" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfig"></a>

```python
summarization_config: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference</a>

---

##### `issue_models_input`<sup>Optional</sup> <a name="issue_models_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModelsInput"></a>

```python
issue_models_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phrase_matchers_input`<sup>Optional</sup> <a name="phrase_matchers_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchersInput"></a>

```python
phrase_matchers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `qa_config_input`<sup>Optional</sup> <a name="qa_config_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.qaConfigInput"></a>

```python
qa_config_input: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---

##### `run_entity_annotator_input`<sup>Optional</sup> <a name="run_entity_annotator_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotatorInput"></a>

```python
run_entity_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_intent_annotator_input`<sup>Optional</sup> <a name="run_intent_annotator_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotatorInput"></a>

```python
run_intent_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_interruption_annotator_input`<sup>Optional</sup> <a name="run_interruption_annotator_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotatorInput"></a>

```python
run_interruption_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_issue_model_annotator_input`<sup>Optional</sup> <a name="run_issue_model_annotator_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotatorInput"></a>

```python
run_issue_model_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_phrase_matcher_annotator_input`<sup>Optional</sup> <a name="run_phrase_matcher_annotator_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotatorInput"></a>

```python
run_phrase_matcher_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_qa_annotator_input`<sup>Optional</sup> <a name="run_qa_annotator_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotatorInput"></a>

```python
run_qa_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_sentiment_annotator_input`<sup>Optional</sup> <a name="run_sentiment_annotator_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotatorInput"></a>

```python
run_sentiment_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_silence_annotator_input`<sup>Optional</sup> <a name="run_silence_annotator_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotatorInput"></a>

```python
run_silence_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_summarization_annotator_input`<sup>Optional</sup> <a name="run_summarization_annotator_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotatorInput"></a>

```python
run_summarization_annotator_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `summarization_config_input`<sup>Optional</sup> <a name="summarization_config_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.summarizationConfigInput"></a>

```python
summarization_config_input: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---

##### `issue_models`<sup>Required</sup> <a name="issue_models" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.issueModels"></a>

```python
issue_models: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phrase_matchers`<sup>Required</sup> <a name="phrase_matchers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.phraseMatchers"></a>

```python
phrase_matchers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `run_entity_annotator`<sup>Required</sup> <a name="run_entity_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runEntityAnnotator"></a>

```python
run_entity_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_intent_annotator`<sup>Required</sup> <a name="run_intent_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIntentAnnotator"></a>

```python
run_intent_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_interruption_annotator`<sup>Required</sup> <a name="run_interruption_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runInterruptionAnnotator"></a>

```python
run_interruption_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_issue_model_annotator`<sup>Required</sup> <a name="run_issue_model_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runIssueModelAnnotator"></a>

```python
run_issue_model_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_phrase_matcher_annotator`<sup>Required</sup> <a name="run_phrase_matcher_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runPhraseMatcherAnnotator"></a>

```python
run_phrase_matcher_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_qa_annotator`<sup>Required</sup> <a name="run_qa_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runQaAnnotator"></a>

```python
run_qa_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_sentiment_annotator`<sup>Required</sup> <a name="run_sentiment_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSentimentAnnotator"></a>

```python
run_sentiment_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_silence_annotator`<sup>Required</sup> <a name="run_silence_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSilenceAnnotator"></a>

```python
run_silence_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_summarization_annotator`<sup>Required</sup> <a name="run_summarization_annotator" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.runSummarizationAnnotator"></a>

```python
run_summarization_annotator: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelector</a>

---


### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_analysis_rule

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList">put_scorecard_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resetScorecardList">reset_scorecard_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scorecard_list` <a name="put_scorecard_list" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList"></a>

```python
def put_scorecard_list(
  qa_scorecard_revisions: typing.List[str] = None
) -> None
```

###### `qa_scorecard_revisions`<sup>Optional</sup> <a name="qa_scorecard_revisions" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.putScorecardList.parameter.qaScorecardRevisions"></a>

- *Type:* typing.List[str]

List of QaScorecardRevisions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_contact_center_insights_analysis_rule#qa_scorecard_revisions GoogleContactCenterInsightsAnalysisRule#qa_scorecard_revisions}

---

##### `reset_scorecard_list` <a name="reset_scorecard_list" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.resetScorecardList"></a>

```python
def reset_scorecard_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardList">scorecard_list</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardListInput">scorecard_list_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scorecard_list`<sup>Required</sup> <a name="scorecard_list" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardList"></a>

```python
scorecard_list: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference</a>

---

##### `scorecard_list_input`<sup>Optional</sup> <a name="scorecard_list_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.scorecardListInput"></a>

```python
scorecard_list_input: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfig</a>

---


### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_analysis_rule

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resetQaScorecardRevisions">reset_qa_scorecard_revisions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_qa_scorecard_revisions` <a name="reset_qa_scorecard_revisions" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.resetQaScorecardRevisions"></a>

```python
def reset_qa_scorecard_revisions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisionsInput">qa_scorecard_revisions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisions">qa_scorecard_revisions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `qa_scorecard_revisions_input`<sup>Optional</sup> <a name="qa_scorecard_revisions_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisionsInput"></a>

```python
qa_scorecard_revisions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `qa_scorecard_revisions`<sup>Required</sup> <a name="qa_scorecard_revisions" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.qaScorecardRevisions"></a>

```python
qa_scorecard_revisions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStructOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorQaConfigScorecardListStruct</a>

---


### GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_analysis_rule

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetConversationProfile">reset_conversation_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetSummarizationModel">reset_summarization_model</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_conversation_profile` <a name="reset_conversation_profile" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetConversationProfile"></a>

```python
def reset_conversation_profile() -> None
```

##### `reset_summarization_model` <a name="reset_summarization_model" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.resetSummarizationModel"></a>

```python
def reset_summarization_model() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfileInput">conversation_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModelInput">summarization_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfile">conversation_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModel">summarization_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conversation_profile_input`<sup>Optional</sup> <a name="conversation_profile_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfileInput"></a>

```python
conversation_profile_input: str
```

- *Type:* str

---

##### `summarization_model_input`<sup>Optional</sup> <a name="summarization_model_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModelInput"></a>

```python
summarization_model_input: str
```

- *Type:* str

---

##### `conversation_profile`<sup>Required</sup> <a name="conversation_profile" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.conversationProfile"></a>

```python
conversation_profile: str
```

- *Type:* str

---

##### `summarization_model`<sup>Required</sup> <a name="summarization_model" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.summarizationModel"></a>

```python
summarization_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig">GoogleContactCenterInsightsAnalysisRuleAnnotatorSelectorSummarizationConfig</a>

---


### GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference <a name="GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_contact_center_insights_analysis_rule

googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleContactCenterInsightsAnalysisRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContactCenterInsightsAnalysisRule.GoogleContactCenterInsightsAnalysisRuleTimeouts">GoogleContactCenterInsightsAnalysisRuleTimeouts</a>]

---



