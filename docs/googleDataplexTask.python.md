# `googleDataplexTask` Submodule <a name="`googleDataplexTask` Submodule" id="@cdktf/provider-google-beta.googleDataplexTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexTask <a name="GoogleDataplexTask" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task google_dataplex_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTask(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  execution_spec: GoogleDataplexTaskExecutionSpec,
  trigger_spec: GoogleDataplexTaskTriggerSpec,
  description: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  lake: str = None,
  location: str = None,
  notebook: GoogleDataplexTaskNotebook = None,
  project: str = None,
  spark: GoogleDataplexTaskSpark = None,
  task_id: str = None,
  timeouts: GoogleDataplexTaskTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.executionSpec">execution_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a></code> | execution_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.triggerSpec">trigger_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a></code> | trigger_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.description">description</a></code> | <code>str</code> | User-provided description of the task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#id GoogleDataplexTask#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.lake">lake</a></code> | <code>str</code> | The lake in which the task will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.location">location</a></code> | <code>str</code> | The location in which the task will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a></code> | notebook block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#project GoogleDataplexTask#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.spark">spark</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.taskId">task_id</a></code> | <code>str</code> | The task Id of the task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `execution_spec`<sup>Required</sup> <a name="execution_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.executionSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a>

execution_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#execution_spec GoogleDataplexTask#execution_spec}

---

##### `trigger_spec`<sup>Required</sup> <a name="trigger_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.triggerSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a>

trigger_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#trigger_spec GoogleDataplexTask#trigger_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.description"></a>

- *Type:* str

User-provided description of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#description GoogleDataplexTask#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.displayName"></a>

- *Type:* str

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#display_name GoogleDataplexTask#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#id GoogleDataplexTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels for the task.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#labels GoogleDataplexTask#labels}

---

##### `lake`<sup>Optional</sup> <a name="lake" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.lake"></a>

- *Type:* str

The lake in which the task will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#lake GoogleDataplexTask#lake}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.location"></a>

- *Type:* str

The location in which the task will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#location GoogleDataplexTask#location}

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.notebook"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a>

notebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#notebook GoogleDataplexTask#notebook}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#project GoogleDataplexTask#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.spark"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#spark GoogleDataplexTask#spark}

---

##### `task_id`<sup>Optional</sup> <a name="task_id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.taskId"></a>

- *Type:* str

The task Id of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#task_id GoogleDataplexTask#task_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#timeouts GoogleDataplexTask#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putExecutionSpec">put_execution_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putNotebook">put_notebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putSpark">put_spark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTriggerSpec">put_trigger_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLake">reset_lake</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetNotebook">reset_notebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetSpark">reset_spark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetTaskId">reset_task_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_execution_spec` <a name="put_execution_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putExecutionSpec"></a>

```python
def put_execution_spec(
  service_account: str,
  args: typing.Mapping[str] = None,
  kms_key: str = None,
  max_job_execution_lifetime: str = None,
  project: str = None
) -> None
```

###### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putExecutionSpec.parameter.serviceAccount"></a>

- *Type:* str

Service account to use to execute a task.

If not provided, the default Compute service account for the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#service_account GoogleDataplexTask#service_account}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putExecutionSpec.parameter.args"></a>

- *Type:* typing.Mapping[str]

The arguments to pass to the task.

The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${taskId} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument. An object containing a list of 'key': value pairs. Example: { 'name': 'wrench', 'mass': '1.3kg', 'count': '3' }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#args GoogleDataplexTask#args}

---

###### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putExecutionSpec.parameter.kmsKey"></a>

- *Type:* str

The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{locationId}/keyRings/{key-ring-name}/cryptoKeys/{key-name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#kms_key GoogleDataplexTask#kms_key}

---

###### `max_job_execution_lifetime`<sup>Optional</sup> <a name="max_job_execution_lifetime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putExecutionSpec.parameter.maxJobExecutionLifetime"></a>

- *Type:* str

The maximum duration after which the job execution is expired.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#max_job_execution_lifetime GoogleDataplexTask#max_job_execution_lifetime}

---

###### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putExecutionSpec.parameter.project"></a>

- *Type:* str

The project in which jobs are run.

By default, the project containing the Lake is used. If a project is provided, the ExecutionSpec.service_account must belong to this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#project GoogleDataplexTask#project}

---

##### `put_notebook` <a name="put_notebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putNotebook"></a>

```python
def put_notebook(
  notebook: str,
  archive_uris: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  infrastructure_spec: GoogleDataplexTaskNotebookInfrastructureSpec = None
) -> None
```

###### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putNotebook.parameter.notebook"></a>

- *Type:* str

Path to input notebook.

This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#notebook GoogleDataplexTask#notebook}

---

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putNotebook.parameter.archiveUris"></a>

- *Type:* typing.List[str]

Cloud Storage URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#archive_uris GoogleDataplexTask#archive_uris}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putNotebook.parameter.fileUris"></a>

- *Type:* typing.List[str]

Cloud Storage URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#file_uris GoogleDataplexTask#file_uris}

---

###### `infrastructure_spec`<sup>Optional</sup> <a name="infrastructure_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putNotebook.parameter.infrastructureSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a>

infrastructure_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#infrastructure_spec GoogleDataplexTask#infrastructure_spec}

---

##### `put_spark` <a name="put_spark" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putSpark"></a>

```python
def put_spark(
  archive_uris: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  infrastructure_spec: GoogleDataplexTaskSparkInfrastructureSpec = None,
  main_class: str = None,
  main_jar_file_uri: str = None,
  python_script_file: str = None,
  sql_script: str = None,
  sql_script_file: str = None
) -> None
```

###### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putSpark.parameter.archiveUris"></a>

- *Type:* typing.List[str]

Cloud Storage URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#archive_uris GoogleDataplexTask#archive_uris}

---

###### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putSpark.parameter.fileUris"></a>

- *Type:* typing.List[str]

Cloud Storage URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#file_uris GoogleDataplexTask#file_uris}

---

###### `infrastructure_spec`<sup>Optional</sup> <a name="infrastructure_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putSpark.parameter.infrastructureSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a>

infrastructure_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#infrastructure_spec GoogleDataplexTask#infrastructure_spec}

---

###### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putSpark.parameter.mainClass"></a>

- *Type:* str

The name of the driver's main class.

The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#main_class GoogleDataplexTask#main_class}

---

###### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putSpark.parameter.mainJarFileUri"></a>

- *Type:* str

The Cloud Storage URI of the jar file that contains the main class.

The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#main_jar_file_uri GoogleDataplexTask#main_jar_file_uri}

---

###### `python_script_file`<sup>Optional</sup> <a name="python_script_file" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putSpark.parameter.pythonScriptFile"></a>

- *Type:* str

The Gcloud Storage URI of the main Python file to use as the driver.

Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#python_script_file GoogleDataplexTask#python_script_file}

---

###### `sql_script`<sup>Optional</sup> <a name="sql_script" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putSpark.parameter.sqlScript"></a>

- *Type:* str

The query text. The execution args are used to declare a set of script variables (set key='value';).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#sql_script GoogleDataplexTask#sql_script}

---

###### `sql_script_file`<sup>Optional</sup> <a name="sql_script_file" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putSpark.parameter.sqlScriptFile"></a>

- *Type:* str

A reference to a query file.

This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key='value';).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#sql_script_file GoogleDataplexTask#sql_script_file}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#create GoogleDataplexTask#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#delete GoogleDataplexTask#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#update GoogleDataplexTask#update}.

---

##### `put_trigger_spec` <a name="put_trigger_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTriggerSpec"></a>

```python
def put_trigger_spec(
  type: str,
  disabled: typing.Union[bool, IResolvable] = None,
  max_retries: typing.Union[int, float] = None,
  schedule: str = None,
  start_time: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTriggerSpec.parameter.type"></a>

- *Type:* str

Trigger type of the user-specified Task Possible values: ["ON_DEMAND", "RECURRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#type GoogleDataplexTask#type}

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTriggerSpec.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prevent the task from executing.

This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#disabled GoogleDataplexTask#disabled}

---

###### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTriggerSpec.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#max_retries GoogleDataplexTask#max_retries}

---

###### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTriggerSpec.parameter.schedule"></a>

- *Type:* str

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: 'CRON_TZ=${IANA_TIME_ZONE}' or 'TZ=${IANA_TIME_ZONE}'. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#schedule GoogleDataplexTask#schedule}

---

###### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.putTriggerSpec.parameter.startTime"></a>

- *Type:* str

The first run of the task will be after this time.

If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#start_time GoogleDataplexTask#start_time}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_lake` <a name="reset_lake" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLake"></a>

```python
def reset_lake() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_notebook` <a name="reset_notebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetNotebook"></a>

```python
def reset_notebook() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_spark` <a name="reset_spark" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetSpark"></a>

```python
def reset_spark() -> None
```

##### `reset_task_id` <a name="reset_task_id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetTaskId"></a>

```python
def reset_task_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataplexTask resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTask.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTask.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataplexTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataplexTask to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataplexTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionSpec">execution_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference">GoogleDataplexTaskExecutionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionStatus">execution_status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList">GoogleDataplexTaskExecutionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference">GoogleDataplexTaskNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference">GoogleDataplexTaskSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference">GoogleDataplexTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.triggerSpec">trigger_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference">GoogleDataplexTaskTriggerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionSpecInput">execution_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lakeInput">lake_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.notebookInput">notebook_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.sparkInput">spark_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.taskIdInput">task_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.triggerSpecInput">trigger_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lake">lake</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.taskId">task_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `execution_spec`<sup>Required</sup> <a name="execution_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionSpec"></a>

```python
execution_spec: GoogleDataplexTaskExecutionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference">GoogleDataplexTaskExecutionSpecOutputReference</a>

---

##### `execution_status`<sup>Required</sup> <a name="execution_status" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionStatus"></a>

```python
execution_status: GoogleDataplexTaskExecutionStatusList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList">GoogleDataplexTaskExecutionStatusList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.notebook"></a>

```python
notebook: GoogleDataplexTaskNotebookOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference">GoogleDataplexTaskNotebookOutputReference</a>

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.spark"></a>

```python
spark: GoogleDataplexTaskSparkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference">GoogleDataplexTaskSparkOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.timeouts"></a>

```python
timeouts: GoogleDataplexTaskTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference">GoogleDataplexTaskTimeoutsOutputReference</a>

---

##### `trigger_spec`<sup>Required</sup> <a name="trigger_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.triggerSpec"></a>

```python
trigger_spec: GoogleDataplexTaskTriggerSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference">GoogleDataplexTaskTriggerSpecOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `execution_spec_input`<sup>Optional</sup> <a name="execution_spec_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.executionSpecInput"></a>

```python
execution_spec_input: GoogleDataplexTaskExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lake_input`<sup>Optional</sup> <a name="lake_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lakeInput"></a>

```python
lake_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `notebook_input`<sup>Optional</sup> <a name="notebook_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.notebookInput"></a>

```python
notebook_input: GoogleDataplexTaskNotebook
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `spark_input`<sup>Optional</sup> <a name="spark_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.sparkInput"></a>

```python
spark_input: GoogleDataplexTaskSpark
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a>

---

##### `task_id_input`<sup>Optional</sup> <a name="task_id_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.taskIdInput"></a>

```python
task_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataplexTaskTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a>]

---

##### `trigger_spec_input`<sup>Optional</sup> <a name="trigger_spec_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.triggerSpecInput"></a>

```python
trigger_spec_input: GoogleDataplexTaskTriggerSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lake`<sup>Required</sup> <a name="lake" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.lake"></a>

```python
lake: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `task_id`<sup>Required</sup> <a name="task_id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.taskId"></a>

```python
task_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexTaskConfig <a name="GoogleDataplexTaskConfig" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  execution_spec: GoogleDataplexTaskExecutionSpec,
  trigger_spec: GoogleDataplexTaskTriggerSpec,
  description: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  lake: str = None,
  location: str = None,
  notebook: GoogleDataplexTaskNotebook = None,
  project: str = None,
  spark: GoogleDataplexTaskSpark = None,
  task_id: str = None,
  timeouts: GoogleDataplexTaskTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.executionSpec">execution_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a></code> | execution_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.triggerSpec">trigger_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a></code> | trigger_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.description">description</a></code> | <code>str</code> | User-provided description of the task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.displayName">display_name</a></code> | <code>str</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#id GoogleDataplexTask#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.lake">lake</a></code> | <code>str</code> | The lake in which the task will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.location">location</a></code> | <code>str</code> | The location in which the task will be created in. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a></code> | notebook block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#project GoogleDataplexTask#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.taskId">task_id</a></code> | <code>str</code> | The task Id of the task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `execution_spec`<sup>Required</sup> <a name="execution_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.executionSpec"></a>

```python
execution_spec: GoogleDataplexTaskExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a>

execution_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#execution_spec GoogleDataplexTask#execution_spec}

---

##### `trigger_spec`<sup>Required</sup> <a name="trigger_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.triggerSpec"></a>

```python
trigger_spec: GoogleDataplexTaskTriggerSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a>

trigger_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#trigger_spec GoogleDataplexTask#trigger_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-provided description of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#description GoogleDataplexTask#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#display_name GoogleDataplexTask#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#id GoogleDataplexTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels for the task.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#labels GoogleDataplexTask#labels}

---

##### `lake`<sup>Optional</sup> <a name="lake" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.lake"></a>

```python
lake: str
```

- *Type:* str

The lake in which the task will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#lake GoogleDataplexTask#lake}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location in which the task will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#location GoogleDataplexTask#location}

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.notebook"></a>

```python
notebook: GoogleDataplexTaskNotebook
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a>

notebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#notebook GoogleDataplexTask#notebook}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#project GoogleDataplexTask#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.spark"></a>

```python
spark: GoogleDataplexTaskSpark
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#spark GoogleDataplexTask#spark}

---

##### `task_id`<sup>Optional</sup> <a name="task_id" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.taskId"></a>

```python
task_id: str
```

- *Type:* str

The task Id of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#task_id GoogleDataplexTask#task_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskConfig.property.timeouts"></a>

```python
timeouts: GoogleDataplexTaskTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#timeouts GoogleDataplexTask#timeouts}

---

### GoogleDataplexTaskExecutionSpec <a name="GoogleDataplexTaskExecutionSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskExecutionSpec(
  service_account: str,
  args: typing.Mapping[str] = None,
  kms_key: str = None,
  max_job_execution_lifetime: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.serviceAccount">service_account</a></code> | <code>str</code> | Service account to use to execute a task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.args">args</a></code> | <code>typing.Mapping[str]</code> | The arguments to pass to the task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.kmsKey">kms_key</a></code> | <code>str</code> | The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{locationId}/keyRings/{key-ring-name}/cryptoKeys/{key-name}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.maxJobExecutionLifetime">max_job_execution_lifetime</a></code> | <code>str</code> | The maximum duration after which the job execution is expired. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.project">project</a></code> | <code>str</code> | The project in which jobs are run. |

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Service account to use to execute a task.

If not provided, the default Compute service account for the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#service_account GoogleDataplexTask#service_account}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.args"></a>

```python
args: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The arguments to pass to the task.

The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${taskId} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument. An object containing a list of 'key': value pairs. Example: { 'name': 'wrench', 'mass': '1.3kg', 'count': '3' }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#args GoogleDataplexTask#args}

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{locationId}/keyRings/{key-ring-name}/cryptoKeys/{key-name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#kms_key GoogleDataplexTask#kms_key}

---

##### `max_job_execution_lifetime`<sup>Optional</sup> <a name="max_job_execution_lifetime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.maxJobExecutionLifetime"></a>

```python
max_job_execution_lifetime: str
```

- *Type:* str

The maximum duration after which the job execution is expired.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#max_job_execution_lifetime GoogleDataplexTask#max_job_execution_lifetime}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec.property.project"></a>

```python
project: str
```

- *Type:* str

The project in which jobs are run.

By default, the project containing the Lake is used. If a project is provided, the ExecutionSpec.service_account must belong to this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#project GoogleDataplexTask#project}

---

### GoogleDataplexTaskExecutionStatus <a name="GoogleDataplexTaskExecutionStatus" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskExecutionStatus()
```


### GoogleDataplexTaskExecutionStatusLatestJob <a name="GoogleDataplexTaskExecutionStatusLatestJob" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJob()
```


### GoogleDataplexTaskNotebook <a name="GoogleDataplexTaskNotebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskNotebook(
  notebook: str,
  archive_uris: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  infrastructure_spec: GoogleDataplexTaskNotebookInfrastructureSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.notebook">notebook</a></code> | <code>str</code> | Path to input notebook. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | Cloud Storage URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | Cloud Storage URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.infrastructureSpec">infrastructure_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a></code> | infrastructure_spec block. |

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.notebook"></a>

```python
notebook: str
```

- *Type:* str

Path to input notebook.

This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#notebook GoogleDataplexTask#notebook}

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

Cloud Storage URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#archive_uris GoogleDataplexTask#archive_uris}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

Cloud Storage URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#file_uris GoogleDataplexTask#file_uris}

---

##### `infrastructure_spec`<sup>Optional</sup> <a name="infrastructure_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook.property.infrastructureSpec"></a>

```python
infrastructure_spec: GoogleDataplexTaskNotebookInfrastructureSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a>

infrastructure_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#infrastructure_spec GoogleDataplexTask#infrastructure_spec}

---

### GoogleDataplexTaskNotebookInfrastructureSpec <a name="GoogleDataplexTaskNotebookInfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec(
  batch: GoogleDataplexTaskNotebookInfrastructureSpecBatch = None,
  container_image: GoogleDataplexTaskNotebookInfrastructureSpecContainerImage = None,
  vpc_network: GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.batch">batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a></code> | batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.vpcNetwork">vpc_network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a></code> | vpc_network block. |

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.batch"></a>

```python
batch: GoogleDataplexTaskNotebookInfrastructureSpecBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a>

batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#batch GoogleDataplexTask#batch}

---

##### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.containerImage"></a>

```python
container_image: GoogleDataplexTaskNotebookInfrastructureSpecContainerImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#container_image GoogleDataplexTask#container_image}

---

##### `vpc_network`<sup>Optional</sup> <a name="vpc_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec.property.vpcNetwork"></a>

```python
vpc_network: GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#vpc_network GoogleDataplexTask#vpc_network}

---

### GoogleDataplexTaskNotebookInfrastructureSpecBatch <a name="GoogleDataplexTaskNotebookInfrastructureSpecBatch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch(
  executors_count: typing.Union[int, float] = None,
  max_executors_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch.property.executorsCount">executors_count</a></code> | <code>typing.Union[int, float]</code> | Total number of job executors. Executor Count should be between 2 and 100. [Default=2]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch.property.maxExecutorsCount">max_executors_count</a></code> | <code>typing.Union[int, float]</code> | Max configurable executors. |

---

##### `executors_count`<sup>Optional</sup> <a name="executors_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch.property.executorsCount"></a>

```python
executors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Total number of job executors. Executor Count should be between 2 and 100. [Default=2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#executors_count GoogleDataplexTask#executors_count}

---

##### `max_executors_count`<sup>Optional</sup> <a name="max_executors_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch.property.maxExecutorsCount"></a>

```python
max_executors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max configurable executors.

If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#max_executors_count GoogleDataplexTask#max_executors_count}

---

### GoogleDataplexTaskNotebookInfrastructureSpecContainerImage <a name="GoogleDataplexTaskNotebookInfrastructureSpecContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage(
  image: str = None,
  java_jars: typing.List[str] = None,
  properties: typing.Mapping[str] = None,
  python_packages: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.image">image</a></code> | <code>str</code> | Container image to use. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.javaJars">java_jars</a></code> | <code>typing.List[str]</code> | A list of Java JARS to add to the classpath. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Override to common configuration of open source components installed on the Dataproc cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.pythonPackages">python_packages</a></code> | <code>typing.List[str]</code> | A list of python packages to be installed. |

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.image"></a>

```python
image: str
```

- *Type:* str

Container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#image GoogleDataplexTask#image}

---

##### `java_jars`<sup>Optional</sup> <a name="java_jars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.javaJars"></a>

```python
java_jars: typing.List[str]
```

- *Type:* typing.List[str]

A list of Java JARS to add to the classpath.

Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#java_jars GoogleDataplexTask#java_jars}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Override to common configuration of open source components installed on the Dataproc cluster.

The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#properties GoogleDataplexTask#properties}

---

##### `python_packages`<sup>Optional</sup> <a name="python_packages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage.property.pythonPackages"></a>

```python
python_packages: typing.List[str]
```

- *Type:* typing.List[str]

A list of python packages to be installed.

Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#python_packages GoogleDataplexTask#python_packages}

---

### GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork <a name="GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork(
  network: str = None,
  network_tags: typing.List[str] = None,
  sub_network: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.network">network</a></code> | <code>str</code> | The Cloud VPC network in which the job is run. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | List of network tags to apply to the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.subNetwork">sub_network</a></code> | <code>str</code> | The Cloud VPC sub-network in which the job is run. |

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.network"></a>

```python
network: str
```

- *Type:* str

The Cloud VPC network in which the job is run.

By default, the Cloud VPC network named Default within the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#network GoogleDataplexTask#network}

---

##### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

List of network tags to apply to the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#network_tags GoogleDataplexTask#network_tags}

---

##### `sub_network`<sup>Optional</sup> <a name="sub_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork.property.subNetwork"></a>

```python
sub_network: str
```

- *Type:* str

The Cloud VPC sub-network in which the job is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#sub_network GoogleDataplexTask#sub_network}

---

### GoogleDataplexTaskSpark <a name="GoogleDataplexTaskSpark" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskSpark(
  archive_uris: typing.List[str] = None,
  file_uris: typing.List[str] = None,
  infrastructure_spec: GoogleDataplexTaskSparkInfrastructureSpec = None,
  main_class: str = None,
  main_jar_file_uri: str = None,
  python_script_file: str = None,
  sql_script: str = None,
  sql_script_file: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | Cloud Storage URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | Cloud Storage URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.infrastructureSpec">infrastructure_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a></code> | infrastructure_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.mainClass">main_class</a></code> | <code>str</code> | The name of the driver's main class. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | The Cloud Storage URI of the jar file that contains the main class. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.pythonScriptFile">python_script_file</a></code> | <code>str</code> | The Gcloud Storage URI of the main Python file to use as the driver. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.sqlScript">sql_script</a></code> | <code>str</code> | The query text. The execution args are used to declare a set of script variables (set key='value';). |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.sqlScriptFile">sql_script_file</a></code> | <code>str</code> | A reference to a query file. |

---

##### `archive_uris`<sup>Optional</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

Cloud Storage URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#archive_uris GoogleDataplexTask#archive_uris}

---

##### `file_uris`<sup>Optional</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

Cloud Storage URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#file_uris GoogleDataplexTask#file_uris}

---

##### `infrastructure_spec`<sup>Optional</sup> <a name="infrastructure_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.infrastructureSpec"></a>

```python
infrastructure_spec: GoogleDataplexTaskSparkInfrastructureSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a>

infrastructure_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#infrastructure_spec GoogleDataplexTask#infrastructure_spec}

---

##### `main_class`<sup>Optional</sup> <a name="main_class" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

The name of the driver's main class.

The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#main_class GoogleDataplexTask#main_class}

---

##### `main_jar_file_uri`<sup>Optional</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

The Cloud Storage URI of the jar file that contains the main class.

The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#main_jar_file_uri GoogleDataplexTask#main_jar_file_uri}

---

##### `python_script_file`<sup>Optional</sup> <a name="python_script_file" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.pythonScriptFile"></a>

```python
python_script_file: str
```

- *Type:* str

The Gcloud Storage URI of the main Python file to use as the driver.

Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#python_script_file GoogleDataplexTask#python_script_file}

---

##### `sql_script`<sup>Optional</sup> <a name="sql_script" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.sqlScript"></a>

```python
sql_script: str
```

- *Type:* str

The query text. The execution args are used to declare a set of script variables (set key='value';).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#sql_script GoogleDataplexTask#sql_script}

---

##### `sql_script_file`<sup>Optional</sup> <a name="sql_script_file" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark.property.sqlScriptFile"></a>

```python
sql_script_file: str
```

- *Type:* str

A reference to a query file.

This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key='value';).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#sql_script_file GoogleDataplexTask#sql_script_file}

---

### GoogleDataplexTaskSparkInfrastructureSpec <a name="GoogleDataplexTaskSparkInfrastructureSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec(
  batch: GoogleDataplexTaskSparkInfrastructureSpecBatch = None,
  container_image: GoogleDataplexTaskSparkInfrastructureSpecContainerImage = None,
  vpc_network: GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.batch">batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a></code> | batch block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.vpcNetwork">vpc_network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a></code> | vpc_network block. |

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.batch"></a>

```python
batch: GoogleDataplexTaskSparkInfrastructureSpecBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a>

batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#batch GoogleDataplexTask#batch}

---

##### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.containerImage"></a>

```python
container_image: GoogleDataplexTaskSparkInfrastructureSpecContainerImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#container_image GoogleDataplexTask#container_image}

---

##### `vpc_network`<sup>Optional</sup> <a name="vpc_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec.property.vpcNetwork"></a>

```python
vpc_network: GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a>

vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#vpc_network GoogleDataplexTask#vpc_network}

---

### GoogleDataplexTaskSparkInfrastructureSpecBatch <a name="GoogleDataplexTaskSparkInfrastructureSpecBatch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch(
  executors_count: typing.Union[int, float] = None,
  max_executors_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch.property.executorsCount">executors_count</a></code> | <code>typing.Union[int, float]</code> | Total number of job executors. Executor Count should be between 2 and 100. [Default=2]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch.property.maxExecutorsCount">max_executors_count</a></code> | <code>typing.Union[int, float]</code> | Max configurable executors. |

---

##### `executors_count`<sup>Optional</sup> <a name="executors_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch.property.executorsCount"></a>

```python
executors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Total number of job executors. Executor Count should be between 2 and 100. [Default=2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#executors_count GoogleDataplexTask#executors_count}

---

##### `max_executors_count`<sup>Optional</sup> <a name="max_executors_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch.property.maxExecutorsCount"></a>

```python
max_executors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max configurable executors.

If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#max_executors_count GoogleDataplexTask#max_executors_count}

---

### GoogleDataplexTaskSparkInfrastructureSpecContainerImage <a name="GoogleDataplexTaskSparkInfrastructureSpecContainerImage" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage(
  image: str = None,
  java_jars: typing.List[str] = None,
  properties: typing.Mapping[str] = None,
  python_packages: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.image">image</a></code> | <code>str</code> | Container image to use. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.javaJars">java_jars</a></code> | <code>typing.List[str]</code> | A list of Java JARS to add to the classpath. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Override to common configuration of open source components installed on the Dataproc cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.pythonPackages">python_packages</a></code> | <code>typing.List[str]</code> | A list of python packages to be installed. |

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.image"></a>

```python
image: str
```

- *Type:* str

Container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#image GoogleDataplexTask#image}

---

##### `java_jars`<sup>Optional</sup> <a name="java_jars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.javaJars"></a>

```python
java_jars: typing.List[str]
```

- *Type:* typing.List[str]

A list of Java JARS to add to the classpath.

Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#java_jars GoogleDataplexTask#java_jars}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Override to common configuration of open source components installed on the Dataproc cluster.

The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#properties GoogleDataplexTask#properties}

---

##### `python_packages`<sup>Optional</sup> <a name="python_packages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage.property.pythonPackages"></a>

```python
python_packages: typing.List[str]
```

- *Type:* typing.List[str]

A list of python packages to be installed.

Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#python_packages GoogleDataplexTask#python_packages}

---

### GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork <a name="GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork(
  network: str = None,
  network_tags: typing.List[str] = None,
  sub_network: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.network">network</a></code> | <code>str</code> | The Cloud VPC network in which the job is run. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | List of network tags to apply to the job. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.subNetwork">sub_network</a></code> | <code>str</code> | The Cloud VPC sub-network in which the job is run. |

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.network"></a>

```python
network: str
```

- *Type:* str

The Cloud VPC network in which the job is run.

By default, the Cloud VPC network named Default within the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#network GoogleDataplexTask#network}

---

##### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

List of network tags to apply to the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#network_tags GoogleDataplexTask#network_tags}

---

##### `sub_network`<sup>Optional</sup> <a name="sub_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork.property.subNetwork"></a>

```python
sub_network: str
```

- *Type:* str

The Cloud VPC sub-network in which the job is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#sub_network GoogleDataplexTask#sub_network}

---

### GoogleDataplexTaskTimeouts <a name="GoogleDataplexTaskTimeouts" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#create GoogleDataplexTask#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#delete GoogleDataplexTask#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#update GoogleDataplexTask#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#create GoogleDataplexTask#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#delete GoogleDataplexTask#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#update GoogleDataplexTask#update}.

---

### GoogleDataplexTaskTriggerSpec <a name="GoogleDataplexTaskTriggerSpec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskTriggerSpec(
  type: str,
  disabled: typing.Union[bool, IResolvable] = None,
  max_retries: typing.Union[int, float] = None,
  schedule: str = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.type">type</a></code> | <code>str</code> | Trigger type of the user-specified Task Possible values: ["ON_DEMAND", "RECURRING"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prevent the task from executing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.schedule">schedule</a></code> | <code>str</code> | Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: 'CRON_TZ=${IANA_TIME_ZONE}' or 'TZ=${IANA_TIME_ZONE}'. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.startTime">start_time</a></code> | <code>str</code> | The first run of the task will be after this time. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.type"></a>

```python
type: str
```

- *Type:* str

Trigger type of the user-specified Task Possible values: ["ON_DEMAND", "RECURRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#type GoogleDataplexTask#type}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prevent the task from executing.

This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#disabled GoogleDataplexTask#disabled}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#max_retries GoogleDataplexTask#max_retries}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: 'CRON_TZ=${IANA_TIME_ZONE}' or 'TZ=${IANA_TIME_ZONE}'. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#schedule GoogleDataplexTask#schedule}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The first run of the task will be after this time.

If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#start_time GoogleDataplexTask#start_time}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexTaskExecutionSpecOutputReference <a name="GoogleDataplexTaskExecutionSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetMaxJobExecutionLifetime">reset_max_job_execution_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetProject">reset_project</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_max_job_execution_lifetime` <a name="reset_max_job_execution_lifetime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetMaxJobExecutionLifetime"></a>

```python
def reset_max_job_execution_lifetime() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.resetProject"></a>

```python
def reset_project() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.argsInput">args_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetimeInput">max_job_execution_lifetime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.args">args</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetime">max_job_execution_lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.argsInput"></a>

```python
args_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `max_job_execution_lifetime_input`<sup>Optional</sup> <a name="max_job_execution_lifetime_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetimeInput"></a>

```python
max_job_execution_lifetime_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.args"></a>

```python
args: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `max_job_execution_lifetime`<sup>Required</sup> <a name="max_job_execution_lifetime" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.maxJobExecutionLifetime"></a>

```python
max_job_execution_lifetime: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexTaskExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionSpec">GoogleDataplexTaskExecutionSpec</a>

---


### GoogleDataplexTaskExecutionStatusLatestJobList <a name="GoogleDataplexTaskExecutionStatusLatestJobList" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataplexTaskExecutionStatusLatestJobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDataplexTaskExecutionStatusLatestJobOutputReference <a name="GoogleDataplexTaskExecutionStatusLatestJobOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.retryCount">retry_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.serviceJob">service_job</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJob">GoogleDataplexTaskExecutionStatusLatestJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retry_count`<sup>Required</sup> <a name="retry_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.retryCount"></a>

```python
retry_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `service_job`<sup>Required</sup> <a name="service_job" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.serviceJob"></a>

```python
service_job: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexTaskExecutionStatusLatestJob
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJob">GoogleDataplexTaskExecutionStatusLatestJob</a>

---


### GoogleDataplexTaskExecutionStatusList <a name="GoogleDataplexTaskExecutionStatusList" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskExecutionStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataplexTaskExecutionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleDataplexTaskExecutionStatusOutputReference <a name="GoogleDataplexTaskExecutionStatusOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.latestJob">latest_job</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList">GoogleDataplexTaskExecutionStatusLatestJobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatus">GoogleDataplexTaskExecutionStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `latest_job`<sup>Required</sup> <a name="latest_job" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.latestJob"></a>

```python
latest_job: GoogleDataplexTaskExecutionStatusLatestJobList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusLatestJobList">GoogleDataplexTaskExecutionStatusLatestJobList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexTaskExecutionStatus
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskExecutionStatus">GoogleDataplexTaskExecutionStatus</a>

---


### GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference <a name="GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetExecutorsCount">reset_executors_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount">reset_max_executors_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_executors_count` <a name="reset_executors_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetExecutorsCount"></a>

```python
def reset_executors_count() -> None
```

##### `reset_max_executors_count` <a name="reset_max_executors_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount"></a>

```python
def reset_max_executors_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCountInput">executors_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput">max_executors_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCount">executors_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCount">max_executors_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `executors_count_input`<sup>Optional</sup> <a name="executors_count_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCountInput"></a>

```python
executors_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_executors_count_input`<sup>Optional</sup> <a name="max_executors_count_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput"></a>

```python
max_executors_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `executors_count`<sup>Required</sup> <a name="executors_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.executorsCount"></a>

```python
executors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_executors_count`<sup>Required</sup> <a name="max_executors_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.maxExecutorsCount"></a>

```python
max_executors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexTaskNotebookInfrastructureSpecBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a>

---


### GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference <a name="GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetJavaJars">reset_java_jars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetPythonPackages">reset_python_packages</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image` <a name="reset_image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_java_jars` <a name="reset_java_jars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetJavaJars"></a>

```python
def reset_java_jars() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_python_packages` <a name="reset_python_packages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.resetPythonPackages"></a>

```python
def reset_python_packages() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJarsInput">java_jars_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput">python_packages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJars">java_jars</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackages">python_packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `java_jars_input`<sup>Optional</sup> <a name="java_jars_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJarsInput"></a>

```python
java_jars_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `python_packages_input`<sup>Optional</sup> <a name="python_packages_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput"></a>

```python
python_packages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `java_jars`<sup>Required</sup> <a name="java_jars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.javaJars"></a>

```python
java_jars: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `python_packages`<sup>Required</sup> <a name="python_packages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.pythonPackages"></a>

```python
python_packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexTaskNotebookInfrastructureSpecContainerImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a>

---


### GoogleDataplexTaskNotebookInfrastructureSpecOutputReference <a name="GoogleDataplexTaskNotebookInfrastructureSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putBatch">put_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage">put_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork">put_vpc_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetBatch">reset_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetContainerImage">reset_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetVpcNetwork">reset_vpc_network</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_batch` <a name="put_batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putBatch"></a>

```python
def put_batch(
  executors_count: typing.Union[int, float] = None,
  max_executors_count: typing.Union[int, float] = None
) -> None
```

###### `executors_count`<sup>Optional</sup> <a name="executors_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putBatch.parameter.executorsCount"></a>

- *Type:* typing.Union[int, float]

Total number of job executors. Executor Count should be between 2 and 100. [Default=2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#executors_count GoogleDataplexTask#executors_count}

---

###### `max_executors_count`<sup>Optional</sup> <a name="max_executors_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putBatch.parameter.maxExecutorsCount"></a>

- *Type:* typing.Union[int, float]

Max configurable executors.

If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#max_executors_count GoogleDataplexTask#max_executors_count}

---

##### `put_container_image` <a name="put_container_image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage"></a>

```python
def put_container_image(
  image: str = None,
  java_jars: typing.List[str] = None,
  properties: typing.Mapping[str] = None,
  python_packages: typing.List[str] = None
) -> None
```

###### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage.parameter.image"></a>

- *Type:* str

Container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#image GoogleDataplexTask#image}

---

###### `java_jars`<sup>Optional</sup> <a name="java_jars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage.parameter.javaJars"></a>

- *Type:* typing.List[str]

A list of Java JARS to add to the classpath.

Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#java_jars GoogleDataplexTask#java_jars}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Override to common configuration of open source components installed on the Dataproc cluster.

The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#properties GoogleDataplexTask#properties}

---

###### `python_packages`<sup>Optional</sup> <a name="python_packages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putContainerImage.parameter.pythonPackages"></a>

- *Type:* typing.List[str]

A list of python packages to be installed.

Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#python_packages GoogleDataplexTask#python_packages}

---

##### `put_vpc_network` <a name="put_vpc_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork"></a>

```python
def put_vpc_network(
  network: str = None,
  network_tags: typing.List[str] = None,
  sub_network: str = None
) -> None
```

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork.parameter.network"></a>

- *Type:* str

The Cloud VPC network in which the job is run.

By default, the Cloud VPC network named Default within the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#network GoogleDataplexTask#network}

---

###### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork.parameter.networkTags"></a>

- *Type:* typing.List[str]

List of network tags to apply to the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#network_tags GoogleDataplexTask#network_tags}

---

###### `sub_network`<sup>Optional</sup> <a name="sub_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.putVpcNetwork.parameter.subNetwork"></a>

- *Type:* str

The Cloud VPC sub-network in which the job is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#sub_network GoogleDataplexTask#sub_network}

---

##### `reset_batch` <a name="reset_batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetBatch"></a>

```python
def reset_batch() -> None
```

##### `reset_container_image` <a name="reset_container_image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetContainerImage"></a>

```python
def reset_container_image() -> None
```

##### `reset_vpc_network` <a name="reset_vpc_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.resetVpcNetwork"></a>

```python
def reset_vpc_network() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.batch">batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetwork">vpc_network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.batchInput">batch_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImageInput">container_image_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetworkInput">vpc_network_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch`<sup>Required</sup> <a name="batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.batch"></a>

```python
batch: GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference</a>

---

##### `container_image`<sup>Required</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImage"></a>

```python
container_image: GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference</a>

---

##### `vpc_network`<sup>Required</sup> <a name="vpc_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetwork"></a>

```python
vpc_network: GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference</a>

---

##### `batch_input`<sup>Optional</sup> <a name="batch_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.batchInput"></a>

```python
batch_input: GoogleDataplexTaskNotebookInfrastructureSpecBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a>

---

##### `container_image_input`<sup>Optional</sup> <a name="container_image_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.containerImageInput"></a>

```python
container_image_input: GoogleDataplexTaskNotebookInfrastructureSpecContainerImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a>

---

##### `vpc_network_input`<sup>Optional</sup> <a name="vpc_network_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.vpcNetworkInput"></a>

```python
vpc_network_input: GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexTaskNotebookInfrastructureSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a>

---


### GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference <a name="GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags">reset_network_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork">reset_sub_network</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_network_tags` <a name="reset_network_tags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags"></a>

```python
def reset_network_tags() -> None
```

##### `reset_sub_network` <a name="reset_sub_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork"></a>

```python
def reset_sub_network() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput">network_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput">sub_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetwork">sub_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `network_tags_input`<sup>Optional</sup> <a name="network_tags_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput"></a>

```python
network_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sub_network_input`<sup>Optional</sup> <a name="sub_network_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput"></a>

```python
sub_network_input: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_tags`<sup>Required</sup> <a name="network_tags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sub_network`<sup>Required</sup> <a name="sub_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.subNetwork"></a>

```python
sub_network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

---


### GoogleDataplexTaskNotebookOutputReference <a name="GoogleDataplexTaskNotebookOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskNotebookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.putInfrastructureSpec">put_infrastructure_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetInfrastructureSpec">reset_infrastructure_spec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_infrastructure_spec` <a name="put_infrastructure_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.putInfrastructureSpec"></a>

```python
def put_infrastructure_spec(
  batch: GoogleDataplexTaskNotebookInfrastructureSpecBatch = None,
  container_image: GoogleDataplexTaskNotebookInfrastructureSpecContainerImage = None,
  vpc_network: GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork = None
) -> None
```

###### `batch`<sup>Optional</sup> <a name="batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.putInfrastructureSpec.parameter.batch"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecBatch">GoogleDataplexTaskNotebookInfrastructureSpecBatch</a>

batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#batch GoogleDataplexTask#batch}

---

###### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.putInfrastructureSpec.parameter.containerImage"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecContainerImage">GoogleDataplexTaskNotebookInfrastructureSpecContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#container_image GoogleDataplexTask#container_image}

---

###### `vpc_network`<sup>Optional</sup> <a name="vpc_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.putInfrastructureSpec.parameter.vpcNetwork"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork">GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork</a>

vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#vpc_network GoogleDataplexTask#vpc_network}

---

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_infrastructure_spec` <a name="reset_infrastructure_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.resetInfrastructureSpec"></a>

```python
def reset_infrastructure_spec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.infrastructureSpec">infrastructure_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.infrastructureSpecInput">infrastructure_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.notebookInput">notebook_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.notebook">notebook</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `infrastructure_spec`<sup>Required</sup> <a name="infrastructure_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.infrastructureSpec"></a>

```python
infrastructure_spec: GoogleDataplexTaskNotebookInfrastructureSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpecOutputReference">GoogleDataplexTaskNotebookInfrastructureSpecOutputReference</a>

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `infrastructure_spec_input`<sup>Optional</sup> <a name="infrastructure_spec_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.infrastructureSpecInput"></a>

```python
infrastructure_spec_input: GoogleDataplexTaskNotebookInfrastructureSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookInfrastructureSpec">GoogleDataplexTaskNotebookInfrastructureSpec</a>

---

##### `notebook_input`<sup>Optional</sup> <a name="notebook_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.notebookInput"></a>

```python
notebook_input: str
```

- *Type:* str

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.notebook"></a>

```python
notebook: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebookOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexTaskNotebook
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskNotebook">GoogleDataplexTaskNotebook</a>

---


### GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference <a name="GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resetExecutorsCount">reset_executors_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount">reset_max_executors_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_executors_count` <a name="reset_executors_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resetExecutorsCount"></a>

```python
def reset_executors_count() -> None
```

##### `reset_max_executors_count` <a name="reset_max_executors_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.resetMaxExecutorsCount"></a>

```python
def reset_max_executors_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCountInput">executors_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput">max_executors_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCount">executors_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCount">max_executors_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `executors_count_input`<sup>Optional</sup> <a name="executors_count_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCountInput"></a>

```python
executors_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_executors_count_input`<sup>Optional</sup> <a name="max_executors_count_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCountInput"></a>

```python
max_executors_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `executors_count`<sup>Required</sup> <a name="executors_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.executorsCount"></a>

```python
executors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_executors_count`<sup>Required</sup> <a name="max_executors_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.maxExecutorsCount"></a>

```python
max_executors_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexTaskSparkInfrastructureSpecBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a>

---


### GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference <a name="GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetJavaJars">reset_java_jars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetPythonPackages">reset_python_packages</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image` <a name="reset_image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_java_jars` <a name="reset_java_jars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetJavaJars"></a>

```python
def reset_java_jars() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_python_packages` <a name="reset_python_packages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.resetPythonPackages"></a>

```python
def reset_python_packages() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJarsInput">java_jars_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput">python_packages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJars">java_jars</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackages">python_packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `java_jars_input`<sup>Optional</sup> <a name="java_jars_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJarsInput"></a>

```python
java_jars_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `python_packages_input`<sup>Optional</sup> <a name="python_packages_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackagesInput"></a>

```python
python_packages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `java_jars`<sup>Required</sup> <a name="java_jars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.javaJars"></a>

```python
java_jars: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `python_packages`<sup>Required</sup> <a name="python_packages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.pythonPackages"></a>

```python
python_packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexTaskSparkInfrastructureSpecContainerImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a>

---


### GoogleDataplexTaskSparkInfrastructureSpecOutputReference <a name="GoogleDataplexTaskSparkInfrastructureSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putBatch">put_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage">put_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork">put_vpc_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetBatch">reset_batch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetContainerImage">reset_container_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetVpcNetwork">reset_vpc_network</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_batch` <a name="put_batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putBatch"></a>

```python
def put_batch(
  executors_count: typing.Union[int, float] = None,
  max_executors_count: typing.Union[int, float] = None
) -> None
```

###### `executors_count`<sup>Optional</sup> <a name="executors_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putBatch.parameter.executorsCount"></a>

- *Type:* typing.Union[int, float]

Total number of job executors. Executor Count should be between 2 and 100. [Default=2].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#executors_count GoogleDataplexTask#executors_count}

---

###### `max_executors_count`<sup>Optional</sup> <a name="max_executors_count" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putBatch.parameter.maxExecutorsCount"></a>

- *Type:* typing.Union[int, float]

Max configurable executors.

If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#max_executors_count GoogleDataplexTask#max_executors_count}

---

##### `put_container_image` <a name="put_container_image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage"></a>

```python
def put_container_image(
  image: str = None,
  java_jars: typing.List[str] = None,
  properties: typing.Mapping[str] = None,
  python_packages: typing.List[str] = None
) -> None
```

###### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage.parameter.image"></a>

- *Type:* str

Container image to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#image GoogleDataplexTask#image}

---

###### `java_jars`<sup>Optional</sup> <a name="java_jars" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage.parameter.javaJars"></a>

- *Type:* typing.List[str]

A list of Java JARS to add to the classpath.

Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#java_jars GoogleDataplexTask#java_jars}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Override to common configuration of open source components installed on the Dataproc cluster.

The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#properties GoogleDataplexTask#properties}

---

###### `python_packages`<sup>Optional</sup> <a name="python_packages" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putContainerImage.parameter.pythonPackages"></a>

- *Type:* typing.List[str]

A list of python packages to be installed.

Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#python_packages GoogleDataplexTask#python_packages}

---

##### `put_vpc_network` <a name="put_vpc_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork"></a>

```python
def put_vpc_network(
  network: str = None,
  network_tags: typing.List[str] = None,
  sub_network: str = None
) -> None
```

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork.parameter.network"></a>

- *Type:* str

The Cloud VPC network in which the job is run.

By default, the Cloud VPC network named Default within the project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#network GoogleDataplexTask#network}

---

###### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork.parameter.networkTags"></a>

- *Type:* typing.List[str]

List of network tags to apply to the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#network_tags GoogleDataplexTask#network_tags}

---

###### `sub_network`<sup>Optional</sup> <a name="sub_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.putVpcNetwork.parameter.subNetwork"></a>

- *Type:* str

The Cloud VPC sub-network in which the job is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#sub_network GoogleDataplexTask#sub_network}

---

##### `reset_batch` <a name="reset_batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetBatch"></a>

```python
def reset_batch() -> None
```

##### `reset_container_image` <a name="reset_container_image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetContainerImage"></a>

```python
def reset_container_image() -> None
```

##### `reset_vpc_network` <a name="reset_vpc_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.resetVpcNetwork"></a>

```python
def reset_vpc_network() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.batch">batch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference">GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.containerImage">container_image</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference">GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetwork">vpc_network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference">GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.batchInput">batch_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.containerImageInput">container_image_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetworkInput">vpc_network_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch`<sup>Required</sup> <a name="batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.batch"></a>

```python
batch: GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference">GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference</a>

---

##### `container_image`<sup>Required</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.containerImage"></a>

```python
container_image: GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference">GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference</a>

---

##### `vpc_network`<sup>Required</sup> <a name="vpc_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetwork"></a>

```python
vpc_network: GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference">GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference</a>

---

##### `batch_input`<sup>Optional</sup> <a name="batch_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.batchInput"></a>

```python
batch_input: GoogleDataplexTaskSparkInfrastructureSpecBatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a>

---

##### `container_image_input`<sup>Optional</sup> <a name="container_image_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.containerImageInput"></a>

```python
container_image_input: GoogleDataplexTaskSparkInfrastructureSpecContainerImage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a>

---

##### `vpc_network_input`<sup>Optional</sup> <a name="vpc_network_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.vpcNetworkInput"></a>

```python
vpc_network_input: GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexTaskSparkInfrastructureSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a>

---


### GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference <a name="GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags">reset_network_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork">reset_sub_network</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_network_tags` <a name="reset_network_tags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetNetworkTags"></a>

```python
def reset_network_tags() -> None
```

##### `reset_sub_network` <a name="reset_sub_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.resetSubNetwork"></a>

```python
def reset_sub_network() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput">network_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput">sub_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetwork">sub_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `network_tags_input`<sup>Optional</sup> <a name="network_tags_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTagsInput"></a>

```python
network_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sub_network_input`<sup>Optional</sup> <a name="sub_network_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetworkInput"></a>

```python
sub_network_input: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_tags`<sup>Required</sup> <a name="network_tags" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sub_network`<sup>Required</sup> <a name="sub_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.subNetwork"></a>

```python
sub_network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a>

---


### GoogleDataplexTaskSparkOutputReference <a name="GoogleDataplexTaskSparkOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskSparkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.putInfrastructureSpec">put_infrastructure_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetArchiveUris">reset_archive_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetFileUris">reset_file_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetInfrastructureSpec">reset_infrastructure_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetMainClass">reset_main_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetMainJarFileUri">reset_main_jar_file_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetPythonScriptFile">reset_python_script_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetSqlScript">reset_sql_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetSqlScriptFile">reset_sql_script_file</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_infrastructure_spec` <a name="put_infrastructure_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.putInfrastructureSpec"></a>

```python
def put_infrastructure_spec(
  batch: GoogleDataplexTaskSparkInfrastructureSpecBatch = None,
  container_image: GoogleDataplexTaskSparkInfrastructureSpecContainerImage = None,
  vpc_network: GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork = None
) -> None
```

###### `batch`<sup>Optional</sup> <a name="batch" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.putInfrastructureSpec.parameter.batch"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecBatch">GoogleDataplexTaskSparkInfrastructureSpecBatch</a>

batch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#batch GoogleDataplexTask#batch}

---

###### `container_image`<sup>Optional</sup> <a name="container_image" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.putInfrastructureSpec.parameter.containerImage"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecContainerImage">GoogleDataplexTaskSparkInfrastructureSpecContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#container_image GoogleDataplexTask#container_image}

---

###### `vpc_network`<sup>Optional</sup> <a name="vpc_network" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.putInfrastructureSpec.parameter.vpcNetwork"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork">GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork</a>

vpc_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_task#vpc_network GoogleDataplexTask#vpc_network}

---

##### `reset_archive_uris` <a name="reset_archive_uris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetArchiveUris"></a>

```python
def reset_archive_uris() -> None
```

##### `reset_file_uris` <a name="reset_file_uris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetFileUris"></a>

```python
def reset_file_uris() -> None
```

##### `reset_infrastructure_spec` <a name="reset_infrastructure_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetInfrastructureSpec"></a>

```python
def reset_infrastructure_spec() -> None
```

##### `reset_main_class` <a name="reset_main_class" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetMainClass"></a>

```python
def reset_main_class() -> None
```

##### `reset_main_jar_file_uri` <a name="reset_main_jar_file_uri" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetMainJarFileUri"></a>

```python
def reset_main_jar_file_uri() -> None
```

##### `reset_python_script_file` <a name="reset_python_script_file" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetPythonScriptFile"></a>

```python
def reset_python_script_file() -> None
```

##### `reset_sql_script` <a name="reset_sql_script" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetSqlScript"></a>

```python
def reset_sql_script() -> None
```

##### `reset_sql_script_file` <a name="reset_sql_script_file" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.resetSqlScriptFile"></a>

```python
def reset_sql_script_file() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.infrastructureSpec">infrastructure_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference">GoogleDataplexTaskSparkInfrastructureSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.archiveUrisInput">archive_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fileUrisInput">file_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.infrastructureSpecInput">infrastructure_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainClassInput">main_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainJarFileUriInput">main_jar_file_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.pythonScriptFileInput">python_script_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptFileInput">sql_script_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptInput">sql_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.archiveUris">archive_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fileUris">file_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainClass">main_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainJarFileUri">main_jar_file_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.pythonScriptFile">python_script_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScript">sql_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptFile">sql_script_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `infrastructure_spec`<sup>Required</sup> <a name="infrastructure_spec" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.infrastructureSpec"></a>

```python
infrastructure_spec: GoogleDataplexTaskSparkInfrastructureSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpecOutputReference">GoogleDataplexTaskSparkInfrastructureSpecOutputReference</a>

---

##### `archive_uris_input`<sup>Optional</sup> <a name="archive_uris_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.archiveUrisInput"></a>

```python
archive_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris_input`<sup>Optional</sup> <a name="file_uris_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fileUrisInput"></a>

```python
file_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `infrastructure_spec_input`<sup>Optional</sup> <a name="infrastructure_spec_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.infrastructureSpecInput"></a>

```python
infrastructure_spec_input: GoogleDataplexTaskSparkInfrastructureSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkInfrastructureSpec">GoogleDataplexTaskSparkInfrastructureSpec</a>

---

##### `main_class_input`<sup>Optional</sup> <a name="main_class_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainClassInput"></a>

```python
main_class_input: str
```

- *Type:* str

---

##### `main_jar_file_uri_input`<sup>Optional</sup> <a name="main_jar_file_uri_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainJarFileUriInput"></a>

```python
main_jar_file_uri_input: str
```

- *Type:* str

---

##### `python_script_file_input`<sup>Optional</sup> <a name="python_script_file_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.pythonScriptFileInput"></a>

```python
python_script_file_input: str
```

- *Type:* str

---

##### `sql_script_file_input`<sup>Optional</sup> <a name="sql_script_file_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptFileInput"></a>

```python
sql_script_file_input: str
```

- *Type:* str

---

##### `sql_script_input`<sup>Optional</sup> <a name="sql_script_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptInput"></a>

```python
sql_script_input: str
```

- *Type:* str

---

##### `archive_uris`<sup>Required</sup> <a name="archive_uris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.archiveUris"></a>

```python
archive_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_uris`<sup>Required</sup> <a name="file_uris" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.fileUris"></a>

```python
file_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `main_class`<sup>Required</sup> <a name="main_class" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainClass"></a>

```python
main_class: str
```

- *Type:* str

---

##### `main_jar_file_uri`<sup>Required</sup> <a name="main_jar_file_uri" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.mainJarFileUri"></a>

```python
main_jar_file_uri: str
```

- *Type:* str

---

##### `python_script_file`<sup>Required</sup> <a name="python_script_file" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.pythonScriptFile"></a>

```python
python_script_file: str
```

- *Type:* str

---

##### `sql_script`<sup>Required</sup> <a name="sql_script" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScript"></a>

```python
sql_script: str
```

- *Type:* str

---

##### `sql_script_file`<sup>Required</sup> <a name="sql_script_file" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.sqlScriptFile"></a>

```python
sql_script_file: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSparkOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexTaskSpark
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskSpark">GoogleDataplexTaskSpark</a>

---


### GoogleDataplexTaskTimeoutsOutputReference <a name="GoogleDataplexTaskTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataplexTaskTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTimeouts">GoogleDataplexTaskTimeouts</a>]

---


### GoogleDataplexTaskTriggerSpecOutputReference <a name="GoogleDataplexTaskTriggerSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_task

googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataplexTaskTriggerSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexTask.GoogleDataplexTaskTriggerSpec">GoogleDataplexTaskTriggerSpec</a>

---



