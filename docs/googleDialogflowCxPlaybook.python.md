# `googleDialogflowCxPlaybook` Submodule <a name="`googleDialogflowCxPlaybook` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxPlaybook <a name="GoogleDialogflowCxPlaybook" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook google_dialogflow_cx_playbook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_playbook

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook(
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
  goal: str,
  id: str = None,
  instruction: GoogleDialogflowCxPlaybookInstruction = None,
  llm_model_settings: GoogleDialogflowCxPlaybookLlmModelSettings = None,
  parent: str = None,
  playbook_type: str = None,
  referenced_tools: typing.List[str] = None,
  timeouts: GoogleDialogflowCxPlaybookTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the playbook, unique within an agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.goal">goal</a></code> | <code>str</code> | High level description of the goal the playbook intend to accomplish. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#id GoogleDialogflowCxPlaybook#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.instruction">instruction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | instruction block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.llmModelSettings">llm_model_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.playbookType">playbook_type</a></code> | <code>str</code> | Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.referencedTools">referenced_tools</a></code> | <code>typing.List[str]</code> | The resource name of tools referenced by the current playbook in the instructions. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.displayName"></a>

- *Type:* str

The human-readable name of the playbook, unique within an agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#display_name GoogleDialogflowCxPlaybook#display_name}

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.goal"></a>

- *Type:* str

High level description of the goal the playbook intend to accomplish.

A goal should be concise since it's visible to other playbooks that may reference this playbook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#goal GoogleDialogflowCxPlaybook#goal}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#id GoogleDialogflowCxPlaybook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.instruction"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#instruction GoogleDialogflowCxPlaybook#instruction}

---

##### `llm_model_settings`<sup>Optional</sup> <a name="llm_model_settings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.llmModelSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#llm_model_settings GoogleDialogflowCxPlaybook#llm_model_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.parent"></a>

- *Type:* str

The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#parent GoogleDialogflowCxPlaybook#parent}

---

##### `playbook_type`<sup>Optional</sup> <a name="playbook_type" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.playbookType"></a>

- *Type:* str

Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#playbook_type GoogleDialogflowCxPlaybook#playbook_type}

---

##### `referenced_tools`<sup>Optional</sup> <a name="referenced_tools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.referencedTools"></a>

- *Type:* typing.List[str]

The resource name of tools referenced by the current playbook in the instructions.

If not provided explicitly, they are will be implied using the tool being referenced in goal and steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#referenced_tools GoogleDialogflowCxPlaybook#referenced_tools}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#timeouts GoogleDialogflowCxPlaybook#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putInstruction">put_instruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putLlmModelSettings">put_llm_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetInstruction">reset_instruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetLlmModelSettings">reset_llm_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetPlaybookType">reset_playbook_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetReferencedTools">reset_referenced_tools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_instruction` <a name="put_instruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putInstruction"></a>

```python
def put_instruction(
  guidelines: str = None,
  steps: typing.Union[IResolvable, typing.List[GoogleDialogflowCxPlaybookInstructionSteps]] = None
) -> None
```

###### `guidelines`<sup>Optional</sup> <a name="guidelines" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putInstruction.parameter.guidelines"></a>

- *Type:* str

General guidelines for the playbook.

These are unstructured instructions that are not directly part of the goal, e.g. "Always be polite". It's valid for this text to be long and used instead of steps altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#guidelines GoogleDialogflowCxPlaybook#guidelines}

---

###### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putInstruction.parameter.steps"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>]]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#steps GoogleDialogflowCxPlaybook#steps}

---

##### `put_llm_model_settings` <a name="put_llm_model_settings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putLlmModelSettings"></a>

```python
def put_llm_model_settings(
  model: str = None,
  prompt_text: str = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putLlmModelSettings.parameter.model"></a>

- *Type:* str

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#model GoogleDialogflowCxPlaybook#model}

---

###### `prompt_text`<sup>Optional</sup> <a name="prompt_text" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putLlmModelSettings.parameter.promptText"></a>

- *Type:* str

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#prompt_text GoogleDialogflowCxPlaybook#prompt_text}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#create GoogleDialogflowCxPlaybook#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#delete GoogleDialogflowCxPlaybook#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#update GoogleDialogflowCxPlaybook#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instruction` <a name="reset_instruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetInstruction"></a>

```python
def reset_instruction() -> None
```

##### `reset_llm_model_settings` <a name="reset_llm_model_settings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetLlmModelSettings"></a>

```python
def reset_llm_model_settings() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_playbook_type` <a name="reset_playbook_type" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetPlaybookType"></a>

```python
def reset_playbook_type() -> None
```

##### `reset_referenced_tools` <a name="reset_referenced_tools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetReferencedTools"></a>

```python
def reset_referenced_tools() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxPlaybook resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_playbook

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_playbook

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_playbook

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_playbook

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDialogflowCxPlaybook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDialogflowCxPlaybook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDialogflowCxPlaybook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxPlaybook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instruction">instruction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference">GoogleDialogflowCxPlaybookInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettings">llm_model_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference">GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedFlows">referenced_flows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedPlaybooks">referenced_playbooks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference">GoogleDialogflowCxPlaybookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tokenCount">token_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goalInput">goal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instructionInput">instruction_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettingsInput">llm_model_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookTypeInput">playbook_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedToolsInput">referenced_tools_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goal">goal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookType">playbook_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedTools">referenced_tools</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instruction"></a>

```python
instruction: GoogleDialogflowCxPlaybookInstructionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference">GoogleDialogflowCxPlaybookInstructionOutputReference</a>

---

##### `llm_model_settings`<sup>Required</sup> <a name="llm_model_settings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettings"></a>

```python
llm_model_settings: GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference">GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `referenced_flows`<sup>Required</sup> <a name="referenced_flows" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedFlows"></a>

```python
referenced_flows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `referenced_playbooks`<sup>Required</sup> <a name="referenced_playbooks" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedPlaybooks"></a>

```python
referenced_playbooks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCxPlaybookTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference">GoogleDialogflowCxPlaybookTimeoutsOutputReference</a>

---

##### `token_count`<sup>Required</sup> <a name="token_count" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tokenCount"></a>

```python
token_count: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `goal_input`<sup>Optional</sup> <a name="goal_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goalInput"></a>

```python
goal_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instruction_input`<sup>Optional</sup> <a name="instruction_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.instructionInput"></a>

```python
instruction_input: GoogleDialogflowCxPlaybookInstruction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

---

##### `llm_model_settings_input`<sup>Optional</sup> <a name="llm_model_settings_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.llmModelSettingsInput"></a>

```python
llm_model_settings_input: GoogleDialogflowCxPlaybookLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `playbook_type_input`<sup>Optional</sup> <a name="playbook_type_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookTypeInput"></a>

```python
playbook_type_input: str
```

- *Type:* str

---

##### `referenced_tools_input`<sup>Optional</sup> <a name="referenced_tools_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedToolsInput"></a>

```python
referenced_tools_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDialogflowCxPlaybookTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.goal"></a>

```python
goal: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `playbook_type`<sup>Required</sup> <a name="playbook_type" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.playbookType"></a>

```python
playbook_type: str
```

- *Type:* str

---

##### `referenced_tools`<sup>Required</sup> <a name="referenced_tools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.referencedTools"></a>

```python
referenced_tools: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxPlaybookConfig <a name="GoogleDialogflowCxPlaybookConfig" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_playbook

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  goal: str,
  id: str = None,
  instruction: GoogleDialogflowCxPlaybookInstruction = None,
  llm_model_settings: GoogleDialogflowCxPlaybookLlmModelSettings = None,
  parent: str = None,
  playbook_type: str = None,
  referenced_tools: typing.List[str] = None,
  timeouts: GoogleDialogflowCxPlaybookTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the playbook, unique within an agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.goal">goal</a></code> | <code>str</code> | High level description of the goal the playbook intend to accomplish. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#id GoogleDialogflowCxPlaybook#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.instruction">instruction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | instruction block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.llmModelSettings">llm_model_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.parent">parent</a></code> | <code>str</code> | The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.playbookType">playbook_type</a></code> | <code>str</code> | Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.referencedTools">referenced_tools</a></code> | <code>typing.List[str]</code> | The resource name of tools referenced by the current playbook in the instructions. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable name of the playbook, unique within an agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#display_name GoogleDialogflowCxPlaybook#display_name}

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.goal"></a>

```python
goal: str
```

- *Type:* str

High level description of the goal the playbook intend to accomplish.

A goal should be concise since it's visible to other playbooks that may reference this playbook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#goal GoogleDialogflowCxPlaybook#goal}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#id GoogleDialogflowCxPlaybook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.instruction"></a>

```python
instruction: GoogleDialogflowCxPlaybookInstruction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#instruction GoogleDialogflowCxPlaybook#instruction}

---

##### `llm_model_settings`<sup>Optional</sup> <a name="llm_model_settings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.llmModelSettings"></a>

```python
llm_model_settings: GoogleDialogflowCxPlaybookLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#llm_model_settings GoogleDialogflowCxPlaybook#llm_model_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#parent GoogleDialogflowCxPlaybook#parent}

---

##### `playbook_type`<sup>Optional</sup> <a name="playbook_type" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.playbookType"></a>

```python
playbook_type: str
```

- *Type:* str

Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#playbook_type GoogleDialogflowCxPlaybook#playbook_type}

---

##### `referenced_tools`<sup>Optional</sup> <a name="referenced_tools" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.referencedTools"></a>

```python
referenced_tools: typing.List[str]
```

- *Type:* typing.List[str]

The resource name of tools referenced by the current playbook in the instructions.

If not provided explicitly, they are will be implied using the tool being referenced in goal and steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#referenced_tools GoogleDialogflowCxPlaybook#referenced_tools}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookConfig.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCxPlaybookTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#timeouts GoogleDialogflowCxPlaybook#timeouts}

---

### GoogleDialogflowCxPlaybookInstruction <a name="GoogleDialogflowCxPlaybookInstruction" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_playbook

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction(
  guidelines: str = None,
  steps: typing.Union[IResolvable, typing.List[GoogleDialogflowCxPlaybookInstructionSteps]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.guidelines">guidelines</a></code> | <code>str</code> | General guidelines for the playbook. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.steps">steps</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>]]</code> | steps block. |

---

##### `guidelines`<sup>Optional</sup> <a name="guidelines" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.guidelines"></a>

```python
guidelines: str
```

- *Type:* str

General guidelines for the playbook.

These are unstructured instructions that are not directly part of the goal, e.g. "Always be polite". It's valid for this text to be long and used instead of steps altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#guidelines GoogleDialogflowCxPlaybook#guidelines}

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction.property.steps"></a>

```python
steps: typing.Union[IResolvable, typing.List[GoogleDialogflowCxPlaybookInstructionSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>]]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#steps GoogleDialogflowCxPlaybook#steps}

---

### GoogleDialogflowCxPlaybookInstructionSteps <a name="GoogleDialogflowCxPlaybookInstructionSteps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_playbook

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps(
  steps: str = None,
  text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.steps">steps</a></code> | <code>str</code> | Sub-processing needed to execute the current step. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.text">text</a></code> | <code>str</code> | Step instruction in text format. |

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.steps"></a>

```python
steps: str
```

- *Type:* str

Sub-processing needed to execute the current step.

This field uses JSON data as a string. The value provided must be a valid JSON representation documented in [Step](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.playbooks#step).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#steps GoogleDialogflowCxPlaybook#steps}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps.property.text"></a>

```python
text: str
```

- *Type:* str

Step instruction in text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#text GoogleDialogflowCxPlaybook#text}

---

### GoogleDialogflowCxPlaybookLlmModelSettings <a name="GoogleDialogflowCxPlaybookLlmModelSettings" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_playbook

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings(
  model: str = None,
  prompt_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.model">model</a></code> | <code>str</code> | The selected LLM model. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.promptText">prompt_text</a></code> | <code>str</code> | The custom prompt to use. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.model"></a>

```python
model: str
```

- *Type:* str

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#model GoogleDialogflowCxPlaybook#model}

---

##### `prompt_text`<sup>Optional</sup> <a name="prompt_text" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings.property.promptText"></a>

```python
prompt_text: str
```

- *Type:* str

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#prompt_text GoogleDialogflowCxPlaybook#prompt_text}

---

### GoogleDialogflowCxPlaybookTimeouts <a name="GoogleDialogflowCxPlaybookTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_playbook

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#create GoogleDialogflowCxPlaybook#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#delete GoogleDialogflowCxPlaybook#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#update GoogleDialogflowCxPlaybook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#create GoogleDialogflowCxPlaybook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#delete GoogleDialogflowCxPlaybook#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_dialogflow_cx_playbook#update GoogleDialogflowCxPlaybook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxPlaybookInstructionOutputReference <a name="GoogleDialogflowCxPlaybookInstructionOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_playbook

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.putSteps">put_steps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetGuidelines">reset_guidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetSteps">reset_steps</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_steps` <a name="put_steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.putSteps"></a>

```python
def put_steps(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxPlaybookInstructionSteps]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.putSteps.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>]]

---

##### `reset_guidelines` <a name="reset_guidelines" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetGuidelines"></a>

```python
def reset_guidelines() -> None
```

##### `reset_steps` <a name="reset_steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.resetSteps"></a>

```python
def reset_steps() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList">GoogleDialogflowCxPlaybookInstructionStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelinesInput">guidelines_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.stepsInput">steps_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelines">guidelines</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.steps"></a>

```python
steps: GoogleDialogflowCxPlaybookInstructionStepsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList">GoogleDialogflowCxPlaybookInstructionStepsList</a>

---

##### `guidelines_input`<sup>Optional</sup> <a name="guidelines_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelinesInput"></a>

```python
guidelines_input: str
```

- *Type:* str

---

##### `steps_input`<sup>Optional</sup> <a name="steps_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.stepsInput"></a>

```python
steps_input: typing.Union[IResolvable, typing.List[GoogleDialogflowCxPlaybookInstructionSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>]]

---

##### `guidelines`<sup>Required</sup> <a name="guidelines" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.guidelines"></a>

```python
guidelines: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxPlaybookInstruction
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstruction">GoogleDialogflowCxPlaybookInstruction</a>

---


### GoogleDialogflowCxPlaybookInstructionStepsList <a name="GoogleDialogflowCxPlaybookInstructionStepsList" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_playbook

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxPlaybookInstructionStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxPlaybookInstructionSteps]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>]]

---


### GoogleDialogflowCxPlaybookInstructionStepsOutputReference <a name="GoogleDialogflowCxPlaybookInstructionStepsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_playbook

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetSteps">reset_steps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_steps` <a name="reset_steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetSteps"></a>

```python
def reset_steps() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.stepsInput">steps_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.steps">steps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `steps_input`<sup>Optional</sup> <a name="steps_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.stepsInput"></a>

```python
steps_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.steps"></a>

```python
steps: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionStepsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxPlaybookInstructionSteps]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookInstructionSteps">GoogleDialogflowCxPlaybookInstructionSteps</a>]

---


### GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference <a name="GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_playbook

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetPromptText">reset_prompt_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_prompt_text` <a name="reset_prompt_text" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.resetPromptText"></a>

```python
def reset_prompt_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptTextInput">prompt_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptText">prompt_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `prompt_text_input`<sup>Optional</sup> <a name="prompt_text_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptTextInput"></a>

```python
prompt_text_input: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `prompt_text`<sup>Required</sup> <a name="prompt_text" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptText"></a>

```python
prompt_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxPlaybookLlmModelSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookLlmModelSettings">GoogleDialogflowCxPlaybookLlmModelSettings</a>

---


### GoogleDialogflowCxPlaybookTimeoutsOutputReference <a name="GoogleDialogflowCxPlaybookTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_playbook

googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxPlaybookTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxPlaybook.GoogleDialogflowCxPlaybookTimeouts">GoogleDialogflowCxPlaybookTimeouts</a>]

---



