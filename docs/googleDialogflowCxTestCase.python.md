# `googleDialogflowCxTestCase` Submodule <a name="`googleDialogflowCxTestCase` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxTestCase <a name="GoogleDialogflowCxTestCase" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case google_dialogflow_cx_test_case}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCase(
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
  id: str = None,
  notes: str = None,
  parent: str = None,
  tags: typing.List[str] = None,
  test_case_conversation_turns: typing.Union[IResolvable, typing.List[GoogleDialogflowCxTestCaseTestCaseConversationTurns]] = None,
  test_config: GoogleDialogflowCxTestCaseTestConfig = None,
  timeouts: GoogleDialogflowCxTestCaseTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the test case, unique within the agent. Limit of 200 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#id GoogleDialogflowCxTestCase#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.notes">notes</a></code> | <code>str</code> | Additional freeform notes about the test case. Limit of 400 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The agent to create the test case for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.testCaseConversationTurns">test_case_conversation_turns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>]]</code> | test_case_conversation_turns block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.testConfig">test_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a></code> | test_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.displayName"></a>

- *Type:* str

The human-readable name of the test case, unique within the agent. Limit of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#display_name GoogleDialogflowCxTestCase#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#id GoogleDialogflowCxTestCase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.notes"></a>

- *Type:* str

Additional freeform notes about the test case. Limit of 400 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#notes GoogleDialogflowCxTestCase#notes}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.parent"></a>

- *Type:* str

The agent to create the test case for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#parent GoogleDialogflowCxTestCase#parent}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.

Each tag should start with "#" and has a limit of 30 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#tags GoogleDialogflowCxTestCase#tags}

---

##### `test_case_conversation_turns`<sup>Optional</sup> <a name="test_case_conversation_turns" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.testCaseConversationTurns"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>]]

test_case_conversation_turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#test_case_conversation_turns GoogleDialogflowCxTestCase#test_case_conversation_turns}

---

##### `test_config`<sup>Optional</sup> <a name="test_config" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.testConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a>

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#test_config GoogleDialogflowCxTestCase#test_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#timeouts GoogleDialogflowCxTestCase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTestCaseConversationTurns">put_test_case_conversation_turns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTestConfig">put_test_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetNotes">reset_notes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetTestCaseConversationTurns">reset_test_case_conversation_turns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetTestConfig">reset_test_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_test_case_conversation_turns` <a name="put_test_case_conversation_turns" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTestCaseConversationTurns"></a>

```python
def put_test_case_conversation_turns(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxTestCaseTestCaseConversationTurns]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTestCaseConversationTurns.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>]]

---

##### `put_test_config` <a name="put_test_config" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTestConfig"></a>

```python
def put_test_config(
  flow: str = None,
  page: str = None,
  tracking_parameters: typing.List[str] = None
) -> None
```

###### `flow`<sup>Optional</sup> <a name="flow" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTestConfig.parameter.flow"></a>

- *Type:* str

Flow name to start the test case with.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
Only one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#flow GoogleDialogflowCxTestCase#flow}

---

###### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTestConfig.parameter.page"></a>

- *Type:* str

The page to start the test case with.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
Only one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#page GoogleDialogflowCxTestCase#page}

---

###### `tracking_parameters`<sup>Optional</sup> <a name="tracking_parameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTestConfig.parameter.trackingParameters"></a>

- *Type:* typing.List[str]

Session parameters to be compared when calculating differences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#tracking_parameters GoogleDialogflowCxTestCase#tracking_parameters}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#create GoogleDialogflowCxTestCase#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#delete GoogleDialogflowCxTestCase#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#update GoogleDialogflowCxTestCase#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notes` <a name="reset_notes" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetNotes"></a>

```python
def reset_notes() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_test_case_conversation_turns` <a name="reset_test_case_conversation_turns" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetTestCaseConversationTurns"></a>

```python
def reset_test_case_conversation_turns() -> None
```

##### `reset_test_config` <a name="reset_test_config" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetTestConfig"></a>

```python
def reset_test_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxTestCase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDialogflowCxTestCase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDialogflowCxTestCase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDialogflowCxTestCase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxTestCase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.lastTestResult">last_test_result</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList">GoogleDialogflowCxTestCaseLastTestResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.testCaseConversationTurns">test_case_conversation_turns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList">GoogleDialogflowCxTestCaseTestCaseConversationTurnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.testConfig">test_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference">GoogleDialogflowCxTestCaseTestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference">GoogleDialogflowCxTestCaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.notesInput">notes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.testCaseConversationTurnsInput">test_case_conversation_turns_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.testConfigInput">test_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.notes">notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `last_test_result`<sup>Required</sup> <a name="last_test_result" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.lastTestResult"></a>

```python
last_test_result: GoogleDialogflowCxTestCaseLastTestResultList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList">GoogleDialogflowCxTestCaseLastTestResultList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `test_case_conversation_turns`<sup>Required</sup> <a name="test_case_conversation_turns" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.testCaseConversationTurns"></a>

```python
test_case_conversation_turns: GoogleDialogflowCxTestCaseTestCaseConversationTurnsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList">GoogleDialogflowCxTestCaseTestCaseConversationTurnsList</a>

---

##### `test_config`<sup>Required</sup> <a name="test_config" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.testConfig"></a>

```python
test_config: GoogleDialogflowCxTestCaseTestConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference">GoogleDialogflowCxTestCaseTestConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCxTestCaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference">GoogleDialogflowCxTestCaseTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `notes_input`<sup>Optional</sup> <a name="notes_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.notesInput"></a>

```python
notes_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `test_case_conversation_turns_input`<sup>Optional</sup> <a name="test_case_conversation_turns_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.testCaseConversationTurnsInput"></a>

```python
test_case_conversation_turns_input: typing.Union[IResolvable, typing.List[GoogleDialogflowCxTestCaseTestCaseConversationTurns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>]]

---

##### `test_config_input`<sup>Optional</sup> <a name="test_config_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.testConfigInput"></a>

```python
test_config_input: GoogleDialogflowCxTestCaseTestConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDialogflowCxTestCaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.notes"></a>

```python
notes: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxTestCaseConfig <a name="GoogleDialogflowCxTestCaseConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  id: str = None,
  notes: str = None,
  parent: str = None,
  tags: typing.List[str] = None,
  test_case_conversation_turns: typing.Union[IResolvable, typing.List[GoogleDialogflowCxTestCaseTestCaseConversationTurns]] = None,
  test_config: GoogleDialogflowCxTestCaseTestConfig = None,
  timeouts: GoogleDialogflowCxTestCaseTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the test case, unique within the agent. Limit of 200 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#id GoogleDialogflowCxTestCase#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.notes">notes</a></code> | <code>str</code> | Additional freeform notes about the test case. Limit of 400 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.parent">parent</a></code> | <code>str</code> | The agent to create the test case for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.testCaseConversationTurns">test_case_conversation_turns</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>]]</code> | test_case_conversation_turns block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.testConfig">test_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a></code> | test_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable name of the test case, unique within the agent. Limit of 200 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#display_name GoogleDialogflowCxTestCase#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#id GoogleDialogflowCxTestCase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.notes"></a>

```python
notes: str
```

- *Type:* str

Additional freeform notes about the test case. Limit of 400 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#notes GoogleDialogflowCxTestCase#notes}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The agent to create the test case for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#parent GoogleDialogflowCxTestCase#parent}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Tags are short descriptions that users may apply to test cases for organizational and filtering purposes.

Each tag should start with "#" and has a limit of 30 characters

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#tags GoogleDialogflowCxTestCase#tags}

---

##### `test_case_conversation_turns`<sup>Optional</sup> <a name="test_case_conversation_turns" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.testCaseConversationTurns"></a>

```python
test_case_conversation_turns: typing.Union[IResolvable, typing.List[GoogleDialogflowCxTestCaseTestCaseConversationTurns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>]]

test_case_conversation_turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#test_case_conversation_turns GoogleDialogflowCxTestCase#test_case_conversation_turns}

---

##### `test_config`<sup>Optional</sup> <a name="test_config" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.testConfig"></a>

```python
test_config: GoogleDialogflowCxTestCaseTestConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a>

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#test_config GoogleDialogflowCxTestCase#test_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseConfig.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCxTestCaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#timeouts GoogleDialogflowCxTestCase#timeouts}

---

### GoogleDialogflowCxTestCaseLastTestResult <a name="GoogleDialogflowCxTestCaseLastTestResult" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResult.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResult()
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurns <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurns" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurns.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurns()
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput()
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput()
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf()
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent()
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText()
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput()
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage()
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences()
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus()
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses()
```


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent()
```


### GoogleDialogflowCxTestCaseTestCaseConversationTurns <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurns" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns(
  user_input: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput = None,
  virtual_agent_output: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns.property.userInput">user_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput</a></code> | user_input block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns.property.virtualAgentOutput">virtual_agent_output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a></code> | virtual_agent_output block. |

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns.property.userInput"></a>

```python
user_input: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

user_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#user_input GoogleDialogflowCxTestCase#user_input}

---

##### `virtual_agent_output`<sup>Optional</sup> <a name="virtual_agent_output" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns.property.virtualAgentOutput"></a>

```python
virtual_agent_output: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

virtual_agent_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#virtual_agent_output GoogleDialogflowCxTestCase#virtual_agent_output}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput(
  enable_sentiment_analysis: typing.Union[bool, IResolvable] = None,
  injected_parameters: str = None,
  input: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput = None,
  is_webhook_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.enableSentimentAnalysis">enable_sentiment_analysis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether sentiment analysis is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.injectedParameters">injected_parameters</a></code> | <code>str</code> | Parameters that need to be injected into the conversation during intent detection. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.input">input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a></code> | input block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.isWebhookEnabled">is_webhook_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If webhooks should be allowed to trigger in response to the user utterance. |

---

##### `enable_sentiment_analysis`<sup>Optional</sup> <a name="enable_sentiment_analysis" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.enableSentimentAnalysis"></a>

```python
enable_sentiment_analysis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether sentiment analysis is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#enable_sentiment_analysis GoogleDialogflowCxTestCase#enable_sentiment_analysis}

---

##### `injected_parameters`<sup>Optional</sup> <a name="injected_parameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.injectedParameters"></a>

```python
injected_parameters: str
```

- *Type:* str

Parameters that need to be injected into the conversation during intent detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#injected_parameters GoogleDialogflowCxTestCase#injected_parameters}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.input"></a>

```python
input: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#input GoogleDialogflowCxTestCase#input}

---

##### `is_webhook_enabled`<sup>Optional</sup> <a name="is_webhook_enabled" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput.property.isWebhookEnabled"></a>

```python
is_webhook_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If webhooks should be allowed to trigger in response to the user utterance.

Often if parameters are injected, webhooks should not be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#is_webhook_enabled GoogleDialogflowCxTestCase#is_webhook_enabled}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput(
  dtmf: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf = None,
  event: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent = None,
  language_code: str = None,
  text: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.dtmf">dtmf</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a></code> | dtmf block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.event">event</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a></code> | event block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.languageCode">language_code</a></code> | <code>str</code> | The language of the input. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.text">text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a></code> | text block. |

---

##### `dtmf`<sup>Optional</sup> <a name="dtmf" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.dtmf"></a>

```python
dtmf: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

dtmf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#dtmf GoogleDialogflowCxTestCase#dtmf}

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.event"></a>

```python
event: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#event GoogleDialogflowCxTestCase#event}

---

##### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

The language of the input.

See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes.
Note that queries in the same session do not necessarily need to specify the same language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#language_code GoogleDialogflowCxTestCase#language_code}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput.property.text"></a>

```python
text: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#text GoogleDialogflowCxTestCase#text}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf(
  digits: str = None,
  finish_digit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.digits">digits</a></code> | <code>str</code> | The dtmf digits. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.finishDigit">finish_digit</a></code> | <code>str</code> | The finish digit (if any). |

---

##### `digits`<sup>Optional</sup> <a name="digits" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.digits"></a>

```python
digits: str
```

- *Type:* str

The dtmf digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#digits GoogleDialogflowCxTestCase#digits}

---

##### `finish_digit`<sup>Optional</sup> <a name="finish_digit" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf.property.finishDigit"></a>

```python
finish_digit: str
```

- *Type:* str

The finish digit (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#finish_digit GoogleDialogflowCxTestCase#finish_digit}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent(
  event: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.property.event">event</a></code> | <code>str</code> | Name of the event. |

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent.property.event"></a>

```python
event: str
```

- *Type:* str

Name of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#event GoogleDialogflowCxTestCase#event}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText(
  text: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.property.text">text</a></code> | <code>str</code> | The natural language text to be processed. Text length must not exceed 256 characters. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText.property.text"></a>

```python
text: str
```

- *Type:* str

The natural language text to be processed. Text length must not exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#text GoogleDialogflowCxTestCase#text}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput(
  current_page: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage = None,
  session_parameters: str = None,
  text_responses: typing.Union[IResolvable, typing.List[GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses]] = None,
  triggered_intent: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.currentPage">current_page</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a></code> | current_page block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.sessionParameters">session_parameters</a></code> | <code>str</code> | The session parameters available to the bot at this point. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.textResponses">text_responses</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>]]</code> | text_responses block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.triggeredIntent">triggered_intent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | triggered_intent block. |

---

##### `current_page`<sup>Optional</sup> <a name="current_page" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.currentPage"></a>

```python
current_page: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

current_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#current_page GoogleDialogflowCxTestCase#current_page}

---

##### `session_parameters`<sup>Optional</sup> <a name="session_parameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.sessionParameters"></a>

```python
session_parameters: str
```

- *Type:* str

The session parameters available to the bot at this point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#session_parameters GoogleDialogflowCxTestCase#session_parameters}

---

##### `text_responses`<sup>Optional</sup> <a name="text_responses" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.textResponses"></a>

```python
text_responses: typing.Union[IResolvable, typing.List[GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>]]

text_responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#text_responses GoogleDialogflowCxTestCase#text_responses}

---

##### `triggered_intent`<sup>Optional</sup> <a name="triggered_intent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput.property.triggeredIntent"></a>

```python
triggered_intent: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

triggered_intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#triggered_intent GoogleDialogflowCxTestCase#triggered_intent}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.property.name">name</a></code> | <code>str</code> | The unique identifier of the page. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage.property.name"></a>

```python
name: str
```

- *Type:* str

The unique identifier of the page. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#name GoogleDialogflowCxTestCase#name}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses(
  text: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.property.text">text</a></code> | <code>typing.List[str]</code> | A collection of text responses. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses.property.text"></a>

```python
text: typing.List[str]
```

- *Type:* typing.List[str]

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#text GoogleDialogflowCxTestCase#text}

---

### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.property.name">name</a></code> | <code>str</code> | The unique identifier of the intent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent.property.name"></a>

```python
name: str
```

- *Type:* str

The unique identifier of the intent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#name GoogleDialogflowCxTestCase#name}

---

### GoogleDialogflowCxTestCaseTestConfig <a name="GoogleDialogflowCxTestCaseTestConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig(
  flow: str = None,
  page: str = None,
  tracking_parameters: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig.property.flow">flow</a></code> | <code>str</code> | Flow name to start the test case with. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig.property.page">page</a></code> | <code>str</code> | The page to start the test case with. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig.property.trackingParameters">tracking_parameters</a></code> | <code>typing.List[str]</code> | Session parameters to be compared when calculating differences. |

---

##### `flow`<sup>Optional</sup> <a name="flow" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig.property.flow"></a>

```python
flow: str
```

- *Type:* str

Flow name to start the test case with.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.
Only one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#flow GoogleDialogflowCxTestCase#flow}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig.property.page"></a>

```python
page: str
```

- *Type:* str

The page to start the test case with.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.
Only one of flow and page should be set to indicate the starting point of the test case. If neither is set, the test case will start with start page on the default start flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#page GoogleDialogflowCxTestCase#page}

---

##### `tracking_parameters`<sup>Optional</sup> <a name="tracking_parameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig.property.trackingParameters"></a>

```python
tracking_parameters: typing.List[str]
```

- *Type:* typing.List[str]

Session parameters to be compared when calculating differences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#tracking_parameters GoogleDialogflowCxTestCase#tracking_parameters}

---

### GoogleDialogflowCxTestCaseTimeouts <a name="GoogleDialogflowCxTestCaseTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#create GoogleDialogflowCxTestCase#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#delete GoogleDialogflowCxTestCase#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#update GoogleDialogflowCxTestCase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#create GoogleDialogflowCxTestCase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#delete GoogleDialogflowCxTestCase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#update GoogleDialogflowCxTestCase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.userInput">user_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.virtualAgentOutput">virtual_agent_output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurns">GoogleDialogflowCxTestCaseLastTestResultConversationTurns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `user_input`<sup>Required</sup> <a name="user_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.userInput"></a>

```python
user_input: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList</a>

---

##### `virtual_agent_output`<sup>Required</sup> <a name="virtual_agent_output" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.virtualAgentOutput"></a>

```python
virtual_agent_output: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseLastTestResultConversationTurns
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurns">GoogleDialogflowCxTestCaseLastTestResultConversationTurns</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.digits">digits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit">finish_digit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.digits"></a>

```python
digits: str
```

- *Type:* str

---

##### `finish_digit`<sup>Required</sup> <a name="finish_digit" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit"></a>

```python
finish_digit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmf</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.event">event</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.event"></a>

```python
event: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEvent</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.dtmf">dtmf</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.event">event</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dtmf`<sup>Required</sup> <a name="dtmf" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.dtmf"></a>

```python
dtmf: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputDtmfList</a>

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.event"></a>

```python
event: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputEventList</a>

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.text"></a>

```python
text: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInput</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputTextOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputText</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis">enable_sentiment_analysis</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.injectedParameters">injected_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.isWebhookEnabled">is_webhook_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_sentiment_analysis`<sup>Required</sup> <a name="enable_sentiment_analysis" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis"></a>

```python
enable_sentiment_analysis: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `injected_parameters`<sup>Required</sup> <a name="injected_parameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.injectedParameters"></a>

```python
injected_parameters: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.input"></a>

```python
input: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputInputList</a>

---

##### `is_webhook_enabled`<sup>Required</sup> <a name="is_webhook_enabled" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.isWebhookEnabled"></a>

```python
is_webhook_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInputOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsUserInput</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPage</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferences</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.currentPage">current_page</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.differences">differences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters">session_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.textResponses">text_responses</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent">triggered_intent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_page`<sup>Required</sup> <a name="current_page" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.currentPage"></a>

```python
current_page: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputCurrentPageList</a>

---

##### `differences`<sup>Required</sup> <a name="differences" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.differences"></a>

```python
differences: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputDifferencesList</a>

---

##### `session_parameters`<sup>Required</sup> <a name="session_parameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters"></a>

```python
session_parameters: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.status"></a>

```python
status: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList</a>

---

##### `text_responses`<sup>Required</sup> <a name="text_responses" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.textResponses"></a>

```python
text_responses: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList</a>

---

##### `triggered_intent`<sup>Required</sup> <a name="triggered_intent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent"></a>

```python
triggered_intent: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutput</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.details">details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.details"></a>

```python
details: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputStatus</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text">text</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text"></a>

```python
text: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTextResponses</a>

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---


### GoogleDialogflowCxTestCaseLastTestResultList <a name="GoogleDialogflowCxTestCaseLastTestResultList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxTestCaseLastTestResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDialogflowCxTestCaseLastTestResultOutputReference <a name="GoogleDialogflowCxTestCaseLastTestResultOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.conversationTurns">conversation_turns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.testResult">test_result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.testTime">test_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResult">GoogleDialogflowCxTestCaseLastTestResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conversation_turns`<sup>Required</sup> <a name="conversation_turns" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.conversationTurns"></a>

```python
conversation_turns: GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList">GoogleDialogflowCxTestCaseLastTestResultConversationTurnsList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `test_result`<sup>Required</sup> <a name="test_result" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.testResult"></a>

```python
test_result: str
```

- *Type:* str

---

##### `test_time`<sup>Required</sup> <a name="test_time" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.testTime"></a>

```python
test_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResultOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseLastTestResult
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseLastTestResult">GoogleDialogflowCxTestCaseLastTestResult</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsList <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxTestCaseTestCaseConversationTurns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>]]

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput">put_user_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput">put_virtual_agent_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetUserInput">reset_user_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetVirtualAgentOutput">reset_virtual_agent_output</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_user_input` <a name="put_user_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput"></a>

```python
def put_user_input(
  enable_sentiment_analysis: typing.Union[bool, IResolvable] = None,
  injected_parameters: str = None,
  input: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput = None,
  is_webhook_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_sentiment_analysis`<sup>Optional</sup> <a name="enable_sentiment_analysis" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput.parameter.enableSentimentAnalysis"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether sentiment analysis is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#enable_sentiment_analysis GoogleDialogflowCxTestCase#enable_sentiment_analysis}

---

###### `injected_parameters`<sup>Optional</sup> <a name="injected_parameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput.parameter.injectedParameters"></a>

- *Type:* str

Parameters that need to be injected into the conversation during intent detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#injected_parameters GoogleDialogflowCxTestCase#injected_parameters}

---

###### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput.parameter.input"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#input GoogleDialogflowCxTestCase#input}

---

###### `is_webhook_enabled`<sup>Optional</sup> <a name="is_webhook_enabled" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putUserInput.parameter.isWebhookEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If webhooks should be allowed to trigger in response to the user utterance.

Often if parameters are injected, webhooks should not be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#is_webhook_enabled GoogleDialogflowCxTestCase#is_webhook_enabled}

---

##### `put_virtual_agent_output` <a name="put_virtual_agent_output" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput"></a>

```python
def put_virtual_agent_output(
  current_page: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage = None,
  session_parameters: str = None,
  text_responses: typing.Union[IResolvable, typing.List[GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses]] = None,
  triggered_intent: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent = None
) -> None
```

###### `current_page`<sup>Optional</sup> <a name="current_page" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput.parameter.currentPage"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

current_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#current_page GoogleDialogflowCxTestCase#current_page}

---

###### `session_parameters`<sup>Optional</sup> <a name="session_parameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput.parameter.sessionParameters"></a>

- *Type:* str

The session parameters available to the bot at this point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#session_parameters GoogleDialogflowCxTestCase#session_parameters}

---

###### `text_responses`<sup>Optional</sup> <a name="text_responses" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput.parameter.textResponses"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>]]

text_responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#text_responses GoogleDialogflowCxTestCase#text_responses}

---

###### `triggered_intent`<sup>Optional</sup> <a name="triggered_intent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.putVirtualAgentOutput.parameter.triggeredIntent"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

triggered_intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#triggered_intent GoogleDialogflowCxTestCase#triggered_intent}

---

##### `reset_user_input` <a name="reset_user_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetUserInput"></a>

```python
def reset_user_input() -> None
```

##### `reset_virtual_agent_output` <a name="reset_virtual_agent_output" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.resetVirtualAgentOutput"></a>

```python
def reset_virtual_agent_output() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInput">user_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutput">virtual_agent_output</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInputInput">user_input_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutputInput">virtual_agent_output_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `user_input`<sup>Required</sup> <a name="user_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInput"></a>

```python
user_input: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference</a>

---

##### `virtual_agent_output`<sup>Required</sup> <a name="virtual_agent_output" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutput"></a>

```python
virtual_agent_output: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference</a>

---

##### `user_input_input`<sup>Optional</sup> <a name="user_input_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.userInputInput"></a>

```python
user_input_input: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

---

##### `virtual_agent_output_input`<sup>Optional</sup> <a name="virtual_agent_output_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.virtualAgentOutputInput"></a>

```python
virtual_agent_output_input: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxTestCaseTestCaseConversationTurns]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurns">GoogleDialogflowCxTestCaseTestCaseConversationTurns</a>]

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetDigits">reset_digits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetFinishDigit">reset_finish_digit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_digits` <a name="reset_digits" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetDigits"></a>

```python
def reset_digits() -> None
```

##### `reset_finish_digit` <a name="reset_finish_digit" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.resetFinishDigit"></a>

```python
def reset_finish_digit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digitsInput">digits_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigitInput">finish_digit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digits">digits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit">finish_digit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `digits_input`<sup>Optional</sup> <a name="digits_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digitsInput"></a>

```python
digits_input: str
```

- *Type:* str

---

##### `finish_digit_input`<sup>Optional</sup> <a name="finish_digit_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigitInput"></a>

```python
finish_digit_input: str
```

- *Type:* str

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.digits"></a>

```python
digits: str
```

- *Type:* str

---

##### `finish_digit`<sup>Required</sup> <a name="finish_digit" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.finishDigit"></a>

```python
finish_digit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.eventInput">event_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.event">event</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_input`<sup>Optional</sup> <a name="event_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.eventInput"></a>

```python
event_input: str
```

- *Type:* str

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.event"></a>

```python
event: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putDtmf">put_dtmf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putEvent">put_event</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putText">put_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetDtmf">reset_dtmf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetEvent">reset_event</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetLanguageCode">reset_language_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dtmf` <a name="put_dtmf" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putDtmf"></a>

```python
def put_dtmf(
  digits: str = None,
  finish_digit: str = None
) -> None
```

###### `digits`<sup>Optional</sup> <a name="digits" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putDtmf.parameter.digits"></a>

- *Type:* str

The dtmf digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#digits GoogleDialogflowCxTestCase#digits}

---

###### `finish_digit`<sup>Optional</sup> <a name="finish_digit" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putDtmf.parameter.finishDigit"></a>

- *Type:* str

The finish digit (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#finish_digit GoogleDialogflowCxTestCase#finish_digit}

---

##### `put_event` <a name="put_event" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putEvent"></a>

```python
def put_event(
  event: str
) -> None
```

###### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putEvent.parameter.event"></a>

- *Type:* str

Name of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#event GoogleDialogflowCxTestCase#event}

---

##### `put_text` <a name="put_text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putText"></a>

```python
def put_text(
  text: str
) -> None
```

###### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.putText.parameter.text"></a>

- *Type:* str

The natural language text to be processed. Text length must not exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#text GoogleDialogflowCxTestCase#text}

---

##### `reset_dtmf` <a name="reset_dtmf" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetDtmf"></a>

```python
def reset_dtmf() -> None
```

##### `reset_event` <a name="reset_event" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetEvent"></a>

```python
def reset_event() -> None
```

##### `reset_language_code` <a name="reset_language_code" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetLanguageCode"></a>

```python
def reset_language_code() -> None
```

##### `reset_text` <a name="reset_text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmf">dtmf</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.event">event</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmfInput">dtmf_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.eventInput">event_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.textInput">text_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dtmf`<sup>Required</sup> <a name="dtmf" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmf"></a>

```python
dtmf: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmfOutputReference</a>

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.event"></a>

```python
event: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEventOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.text"></a>

```python
text: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference</a>

---

##### `dtmf_input`<sup>Optional</sup> <a name="dtmf_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.dtmfInput"></a>

```python
dtmf_input: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

---

##### `event_input`<sup>Optional</sup> <a name="event_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.eventInput"></a>

```python
event_input: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.textInput"></a>

```python
text_input: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputTextOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput">put_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetEnableSentimentAnalysis">reset_enable_sentiment_analysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInjectedParameters">reset_injected_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetIsWebhookEnabled">reset_is_webhook_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input` <a name="put_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput"></a>

```python
def put_input(
  dtmf: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf = None,
  event: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent = None,
  language_code: str = None,
  text: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText = None
) -> None
```

###### `dtmf`<sup>Optional</sup> <a name="dtmf" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput.parameter.dtmf"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputDtmf</a>

dtmf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#dtmf GoogleDialogflowCxTestCase#dtmf}

---

###### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput.parameter.event"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputEvent</a>

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#event GoogleDialogflowCxTestCase#event}

---

###### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput.parameter.languageCode"></a>

- *Type:* str

The language of the input.

See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes.
Note that queries in the same session do not necessarily need to specify the same language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#language_code GoogleDialogflowCxTestCase#language_code}

---

###### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.putInput.parameter.text"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#text GoogleDialogflowCxTestCase#text}

---

##### `reset_enable_sentiment_analysis` <a name="reset_enable_sentiment_analysis" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetEnableSentimentAnalysis"></a>

```python
def reset_enable_sentiment_analysis() -> None
```

##### `reset_injected_parameters` <a name="reset_injected_parameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInjectedParameters"></a>

```python
def reset_injected_parameters() -> None
```

##### `reset_input` <a name="reset_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_is_webhook_enabled` <a name="reset_is_webhook_enabled" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.resetIsWebhookEnabled"></a>

```python
def reset_is_webhook_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.input">input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysisInput">enable_sentiment_analysis_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParametersInput">injected_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.inputInput">input_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabledInput">is_webhook_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis">enable_sentiment_analysis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParameters">injected_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabled">is_webhook_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.input"></a>

```python
input: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInputOutputReference</a>

---

##### `enable_sentiment_analysis_input`<sup>Optional</sup> <a name="enable_sentiment_analysis_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysisInput"></a>

```python
enable_sentiment_analysis_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `injected_parameters_input`<sup>Optional</sup> <a name="injected_parameters_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParametersInput"></a>

```python
injected_parameters_input: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.inputInput"></a>

```python
input_input: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputInput</a>

---

##### `is_webhook_enabled_input`<sup>Optional</sup> <a name="is_webhook_enabled_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabledInput"></a>

```python
is_webhook_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_sentiment_analysis`<sup>Required</sup> <a name="enable_sentiment_analysis" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.enableSentimentAnalysis"></a>

```python
enable_sentiment_analysis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `injected_parameters`<sup>Required</sup> <a name="injected_parameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.injectedParameters"></a>

```python
injected_parameters: str
```

- *Type:* str

---

##### `is_webhook_enabled`<sup>Required</sup> <a name="is_webhook_enabled" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.isWebhookEnabled"></a>

```python
is_webhook_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInputOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsUserInput</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putCurrentPage">put_current_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTextResponses">put_text_responses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTriggeredIntent">put_triggered_intent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetCurrentPage">reset_current_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetSessionParameters">reset_session_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTextResponses">reset_text_responses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTriggeredIntent">reset_triggered_intent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_current_page` <a name="put_current_page" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putCurrentPage"></a>

```python
def put_current_page(
  name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putCurrentPage.parameter.name"></a>

- *Type:* str

The unique identifier of the page. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#name GoogleDialogflowCxTestCase#name}

---

##### `put_text_responses` <a name="put_text_responses" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTextResponses"></a>

```python
def put_text_responses(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTextResponses.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>]]

---

##### `put_triggered_intent` <a name="put_triggered_intent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTriggeredIntent"></a>

```python
def put_triggered_intent(
  name: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.putTriggeredIntent.parameter.name"></a>

- *Type:* str

The unique identifier of the intent. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_dialogflow_cx_test_case#name GoogleDialogflowCxTestCase#name}

---

##### `reset_current_page` <a name="reset_current_page" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetCurrentPage"></a>

```python
def reset_current_page() -> None
```

##### `reset_session_parameters` <a name="reset_session_parameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetSessionParameters"></a>

```python
def reset_session_parameters() -> None
```

##### `reset_text_responses` <a name="reset_text_responses" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTextResponses"></a>

```python
def reset_text_responses() -> None
```

##### `reset_triggered_intent` <a name="reset_triggered_intent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.resetTriggeredIntent"></a>

```python
def reset_triggered_intent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPage">current_page</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponses">text_responses</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent">triggered_intent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPageInput">current_page_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParametersInput">session_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponsesInput">text_responses_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntentInput">triggered_intent_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters">session_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_page`<sup>Required</sup> <a name="current_page" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPage"></a>

```python
current_page: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPageOutputReference</a>

---

##### `text_responses`<sup>Required</sup> <a name="text_responses" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponses"></a>

```python
text_responses: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList</a>

---

##### `triggered_intent`<sup>Required</sup> <a name="triggered_intent" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntent"></a>

```python
triggered_intent: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference</a>

---

##### `current_page_input`<sup>Optional</sup> <a name="current_page_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.currentPageInput"></a>

```python
current_page_input: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputCurrentPage</a>

---

##### `session_parameters_input`<sup>Optional</sup> <a name="session_parameters_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParametersInput"></a>

```python
session_parameters_input: str
```

- *Type:* str

---

##### `text_responses_input`<sup>Optional</sup> <a name="text_responses_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.textResponsesInput"></a>

```python
text_responses_input: typing.Union[IResolvable, typing.List[GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>]]

---

##### `triggered_intent_input`<sup>Optional</sup> <a name="triggered_intent_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.triggeredIntentInput"></a>

```python
triggered_intent_input: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---

##### `session_parameters`<sup>Required</sup> <a name="session_parameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.sessionParameters"></a>

```python
session_parameters: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutput</a>

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>]]

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resetText">reset_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_text` <a name="reset_text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.resetText"></a>

```python
def reset_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.textInput">text_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text">text</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.textInput"></a>

```python
text_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.text"></a>

```python
text: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponsesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTextResponses</a>]

---


### GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference <a name="GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent">GoogleDialogflowCxTestCaseTestCaseConversationTurnsVirtualAgentOutputTriggeredIntent</a>

---


### GoogleDialogflowCxTestCaseTestConfigOutputReference <a name="GoogleDialogflowCxTestCaseTestConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resetFlow">reset_flow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resetPage">reset_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resetTrackingParameters">reset_tracking_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_flow` <a name="reset_flow" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resetFlow"></a>

```python
def reset_flow() -> None
```

##### `reset_page` <a name="reset_page" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resetPage"></a>

```python
def reset_page() -> None
```

##### `reset_tracking_parameters` <a name="reset_tracking_parameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.resetTrackingParameters"></a>

```python
def reset_tracking_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.flowInput">flow_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.pageInput">page_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.trackingParametersInput">tracking_parameters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.flow">flow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.page">page</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.trackingParameters">tracking_parameters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flow_input`<sup>Optional</sup> <a name="flow_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.flowInput"></a>

```python
flow_input: str
```

- *Type:* str

---

##### `page_input`<sup>Optional</sup> <a name="page_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.pageInput"></a>

```python
page_input: str
```

- *Type:* str

---

##### `tracking_parameters_input`<sup>Optional</sup> <a name="tracking_parameters_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.trackingParametersInput"></a>

```python
tracking_parameters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `flow`<sup>Required</sup> <a name="flow" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.flow"></a>

```python
flow: str
```

- *Type:* str

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.page"></a>

```python
page: str
```

- *Type:* str

---

##### `tracking_parameters`<sup>Required</sup> <a name="tracking_parameters" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.trackingParameters"></a>

```python
tracking_parameters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxTestCaseTestConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTestConfig">GoogleDialogflowCxTestCaseTestConfig</a>

---


### GoogleDialogflowCxTestCaseTimeoutsOutputReference <a name="GoogleDialogflowCxTestCaseTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_test_case

googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxTestCaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxTestCase.GoogleDialogflowCxTestCaseTimeouts">GoogleDialogflowCxTestCaseTimeouts</a>]

---



