# `googleStorageTransferJob` Submodule <a name="`googleStorageTransferJob` Submodule" id="@cdktf/provider-google-beta.googleStorageTransferJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageTransferJob <a name="GoogleStorageTransferJob" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job google_storage_transfer_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  event_stream: GoogleStorageTransferJobEventStream = None,
  id: str = None,
  name: str = None,
  notification_config: GoogleStorageTransferJobNotificationConfig = None,
  project: str = None,
  replication_spec: GoogleStorageTransferJobReplicationSpec = None,
  schedule: GoogleStorageTransferJobSchedule = None,
  status: str = None,
  transfer_spec: GoogleStorageTransferJobTransferSpec = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.description">description</a></code> | <code>str</code> | Unique description to identify the Transfer Job. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.eventStream">event_stream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a></code> | event_stream block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#id GoogleStorageTransferJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Transfer Job. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.project">project</a></code> | <code>str</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.replicationSpec">replication_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a></code> | replication_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.transferSpec">transfer_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a></code> | transfer_spec block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.description"></a>

- *Type:* str

Unique description to identify the Transfer Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#description GoogleStorageTransferJob#description}

---

##### `event_stream`<sup>Optional</sup> <a name="event_stream" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.eventStream"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a>

event_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#event_stream GoogleStorageTransferJob#event_stream}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#id GoogleStorageTransferJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.name"></a>

- *Type:* str

The name of the Transfer Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#name GoogleStorageTransferJob#name}

---

##### `notification_config`<sup>Optional</sup> <a name="notification_config" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.notificationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#notification_config GoogleStorageTransferJob#notification_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.project"></a>

- *Type:* str

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#project GoogleStorageTransferJob#project}

---

##### `replication_spec`<sup>Optional</sup> <a name="replication_spec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.replicationSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a>

replication_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#replication_spec GoogleStorageTransferJob#replication_spec}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#schedule GoogleStorageTransferJob#schedule}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.status"></a>

- *Type:* str

Status of the job.

Default: ENABLED. NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#status GoogleStorageTransferJob#status}

---

##### `transfer_spec`<sup>Optional</sup> <a name="transfer_spec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.Initializer.parameter.transferSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a>

transfer_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#transfer_spec GoogleStorageTransferJob#transfer_spec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putEventStream">put_event_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putNotificationConfig">put_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putReplicationSpec">put_replication_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec">put_transfer_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetEventStream">reset_event_stream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetNotificationConfig">reset_notification_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetReplicationSpec">reset_replication_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetTransferSpec">reset_transfer_spec</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_event_stream` <a name="put_event_stream" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putEventStream"></a>

```python
def put_event_stream(
  name: str,
  event_stream_expiration_time: str = None,
  event_stream_start_time: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putEventStream.parameter.name"></a>

- *Type:* str

Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#name GoogleStorageTransferJob#name}

---

###### `event_stream_expiration_time`<sup>Optional</sup> <a name="event_stream_expiration_time" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putEventStream.parameter.eventStreamExpirationTime"></a>

- *Type:* str

Specifies the data and time at which Storage Transfer Service stops listening for events from this stream.

After this time, any transfers in progress will complete, but no new transfers are initiated

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#event_stream_expiration_time GoogleStorageTransferJob#event_stream_expiration_time}

---

###### `event_stream_start_time`<sup>Optional</sup> <a name="event_stream_start_time" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putEventStream.parameter.eventStreamStartTime"></a>

- *Type:* str

Specifies the date and time that Storage Transfer Service starts listening for events from this stream.

If no start time is specified or start time is in the past, Storage Transfer Service starts listening immediately

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#event_stream_start_time GoogleStorageTransferJob#event_stream_start_time}

---

##### `put_notification_config` <a name="put_notification_config" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putNotificationConfig"></a>

```python
def put_notification_config(
  payload_format: str,
  pubsub_topic: str,
  event_types: typing.List[str] = None
) -> None
```

###### `payload_format`<sup>Required</sup> <a name="payload_format" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putNotificationConfig.parameter.payloadFormat"></a>

- *Type:* str

The desired format of the notification message payloads. One of "NONE" or "JSON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#payload_format GoogleStorageTransferJob#payload_format}

---

###### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putNotificationConfig.parameter.pubsubTopic"></a>

- *Type:* str

The Topic.name of the Pub/Sub topic to which to publish notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#pubsub_topic GoogleStorageTransferJob#pubsub_topic}

---

###### `event_types`<sup>Optional</sup> <a name="event_types" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putNotificationConfig.parameter.eventTypes"></a>

- *Type:* typing.List[str]

Event types for which a notification is desired.

If empty, send notifications for all event types. The valid types are "TRANSFER_OPERATION_SUCCESS", "TRANSFER_OPERATION_FAILED", "TRANSFER_OPERATION_ABORTED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#event_types GoogleStorageTransferJob#event_types}

---

##### `put_replication_spec` <a name="put_replication_spec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putReplicationSpec"></a>

```python
def put_replication_spec(
  gcs_data_sink: GoogleStorageTransferJobReplicationSpecGcsDataSink = None,
  gcs_data_source: GoogleStorageTransferJobReplicationSpecGcsDataSource = None,
  object_conditions: GoogleStorageTransferJobReplicationSpecObjectConditions = None,
  transfer_options: GoogleStorageTransferJobReplicationSpecTransferOptions = None
) -> None
```

###### `gcs_data_sink`<sup>Optional</sup> <a name="gcs_data_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putReplicationSpec.parameter.gcsDataSink"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#gcs_data_sink GoogleStorageTransferJob#gcs_data_sink}

---

###### `gcs_data_source`<sup>Optional</sup> <a name="gcs_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putReplicationSpec.parameter.gcsDataSource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#gcs_data_source GoogleStorageTransferJob#gcs_data_source}

---

###### `object_conditions`<sup>Optional</sup> <a name="object_conditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putReplicationSpec.parameter.objectConditions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#object_conditions GoogleStorageTransferJob#object_conditions}

---

###### `transfer_options`<sup>Optional</sup> <a name="transfer_options" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putReplicationSpec.parameter.transferOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#transfer_options GoogleStorageTransferJob#transfer_options}

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putSchedule"></a>

```python
def put_schedule(
  schedule_start_date: GoogleStorageTransferJobScheduleScheduleStartDate,
  repeat_interval: str = None,
  schedule_end_date: GoogleStorageTransferJobScheduleScheduleEndDate = None,
  start_time_of_day: GoogleStorageTransferJobScheduleStartTimeOfDay = None
) -> None
```

###### `schedule_start_date`<sup>Required</sup> <a name="schedule_start_date" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putSchedule.parameter.scheduleStartDate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a>

schedule_start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#schedule_start_date GoogleStorageTransferJob#schedule_start_date}

---

###### `repeat_interval`<sup>Optional</sup> <a name="repeat_interval" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putSchedule.parameter.repeatInterval"></a>

- *Type:* str

Interval between the start of each scheduled transfer.

If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#repeat_interval GoogleStorageTransferJob#repeat_interval}

---

###### `schedule_end_date`<sup>Optional</sup> <a name="schedule_end_date" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putSchedule.parameter.scheduleEndDate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a>

schedule_end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#schedule_end_date GoogleStorageTransferJob#schedule_end_date}

---

###### `start_time_of_day`<sup>Optional</sup> <a name="start_time_of_day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putSchedule.parameter.startTimeOfDay"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a>

start_time_of_day block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#start_time_of_day GoogleStorageTransferJob#start_time_of_day}

---

##### `put_transfer_spec` <a name="put_transfer_spec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec"></a>

```python
def put_transfer_spec(
  aws_s3_data_source: GoogleStorageTransferJobTransferSpecAwsS3DataSource = None,
  azure_blob_storage_data_source: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource = None,
  gcs_data_sink: GoogleStorageTransferJobTransferSpecGcsDataSink = None,
  gcs_data_source: GoogleStorageTransferJobTransferSpecGcsDataSource = None,
  hdfs_data_source: GoogleStorageTransferJobTransferSpecHdfsDataSource = None,
  http_data_source: GoogleStorageTransferJobTransferSpecHttpDataSource = None,
  object_conditions: GoogleStorageTransferJobTransferSpecObjectConditions = None,
  posix_data_sink: GoogleStorageTransferJobTransferSpecPosixDataSink = None,
  posix_data_source: GoogleStorageTransferJobTransferSpecPosixDataSource = None,
  sink_agent_pool_name: str = None,
  source_agent_pool_name: str = None,
  transfer_options: GoogleStorageTransferJobTransferSpecTransferOptions = None
) -> None
```

###### `aws_s3_data_source`<sup>Optional</sup> <a name="aws_s3_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec.parameter.awsS3DataSource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a>

aws_s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#aws_s3_data_source GoogleStorageTransferJob#aws_s3_data_source}

---

###### `azure_blob_storage_data_source`<sup>Optional</sup> <a name="azure_blob_storage_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec.parameter.azureBlobStorageDataSource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

azure_blob_storage_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#azure_blob_storage_data_source GoogleStorageTransferJob#azure_blob_storage_data_source}

---

###### `gcs_data_sink`<sup>Optional</sup> <a name="gcs_data_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec.parameter.gcsDataSink"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#gcs_data_sink GoogleStorageTransferJob#gcs_data_sink}

---

###### `gcs_data_source`<sup>Optional</sup> <a name="gcs_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec.parameter.gcsDataSource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#gcs_data_source GoogleStorageTransferJob#gcs_data_source}

---

###### `hdfs_data_source`<sup>Optional</sup> <a name="hdfs_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec.parameter.hdfsDataSource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a>

hdfs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#hdfs_data_source GoogleStorageTransferJob#hdfs_data_source}

---

###### `http_data_source`<sup>Optional</sup> <a name="http_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec.parameter.httpDataSource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a>

http_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#http_data_source GoogleStorageTransferJob#http_data_source}

---

###### `object_conditions`<sup>Optional</sup> <a name="object_conditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec.parameter.objectConditions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#object_conditions GoogleStorageTransferJob#object_conditions}

---

###### `posix_data_sink`<sup>Optional</sup> <a name="posix_data_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec.parameter.posixDataSink"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a>

posix_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#posix_data_sink GoogleStorageTransferJob#posix_data_sink}

---

###### `posix_data_source`<sup>Optional</sup> <a name="posix_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec.parameter.posixDataSource"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a>

posix_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#posix_data_source GoogleStorageTransferJob#posix_data_source}

---

###### `sink_agent_pool_name`<sup>Optional</sup> <a name="sink_agent_pool_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec.parameter.sinkAgentPoolName"></a>

- *Type:* str

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#sink_agent_pool_name GoogleStorageTransferJob#sink_agent_pool_name}

---

###### `source_agent_pool_name`<sup>Optional</sup> <a name="source_agent_pool_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec.parameter.sourceAgentPoolName"></a>

- *Type:* str

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#source_agent_pool_name GoogleStorageTransferJob#source_agent_pool_name}

---

###### `transfer_options`<sup>Optional</sup> <a name="transfer_options" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.putTransferSpec.parameter.transferOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#transfer_options GoogleStorageTransferJob#transfer_options}

---

##### `reset_event_stream` <a name="reset_event_stream" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetEventStream"></a>

```python
def reset_event_stream() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_notification_config` <a name="reset_notification_config" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetNotificationConfig"></a>

```python
def reset_notification_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_replication_spec` <a name="reset_replication_spec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetReplicationSpec"></a>

```python
def reset_replication_spec() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_transfer_spec` <a name="reset_transfer_spec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.resetTransferSpec"></a>

```python
def reset_transfer_spec() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleStorageTransferJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleStorageTransferJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleStorageTransferJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleStorageTransferJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageTransferJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.deletionTime">deletion_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.eventStream">event_stream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference">GoogleStorageTransferJobEventStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.lastModificationTime">last_modification_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference">GoogleStorageTransferJobNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.replicationSpec">replication_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference">GoogleStorageTransferJobReplicationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference">GoogleStorageTransferJobScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.transferSpec">transfer_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference">GoogleStorageTransferJobTransferSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.eventStreamInput">event_stream_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.notificationConfigInput">notification_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.replicationSpecInput">replication_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.scheduleInput">schedule_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.transferSpecInput">transfer_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `deletion_time`<sup>Required</sup> <a name="deletion_time" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.deletionTime"></a>

```python
deletion_time: str
```

- *Type:* str

---

##### `event_stream`<sup>Required</sup> <a name="event_stream" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.eventStream"></a>

```python
event_stream: GoogleStorageTransferJobEventStreamOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference">GoogleStorageTransferJobEventStreamOutputReference</a>

---

##### `last_modification_time`<sup>Required</sup> <a name="last_modification_time" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.lastModificationTime"></a>

```python
last_modification_time: str
```

- *Type:* str

---

##### `notification_config`<sup>Required</sup> <a name="notification_config" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.notificationConfig"></a>

```python
notification_config: GoogleStorageTransferJobNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference">GoogleStorageTransferJobNotificationConfigOutputReference</a>

---

##### `replication_spec`<sup>Required</sup> <a name="replication_spec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.replicationSpec"></a>

```python
replication_spec: GoogleStorageTransferJobReplicationSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference">GoogleStorageTransferJobReplicationSpecOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.schedule"></a>

```python
schedule: GoogleStorageTransferJobScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference">GoogleStorageTransferJobScheduleOutputReference</a>

---

##### `transfer_spec`<sup>Required</sup> <a name="transfer_spec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.transferSpec"></a>

```python
transfer_spec: GoogleStorageTransferJobTransferSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference">GoogleStorageTransferJobTransferSpecOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `event_stream_input`<sup>Optional</sup> <a name="event_stream_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.eventStreamInput"></a>

```python
event_stream_input: GoogleStorageTransferJobEventStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_config_input`<sup>Optional</sup> <a name="notification_config_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.notificationConfigInput"></a>

```python
notification_config_input: GoogleStorageTransferJobNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `replication_spec_input`<sup>Optional</sup> <a name="replication_spec_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.replicationSpecInput"></a>

```python
replication_spec_input: GoogleStorageTransferJobReplicationSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a>

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.scheduleInput"></a>

```python
schedule_input: GoogleStorageTransferJobSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `transfer_spec_input`<sup>Optional</sup> <a name="transfer_spec_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.transferSpecInput"></a>

```python
transfer_spec_input: GoogleStorageTransferJobTransferSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageTransferJobConfig <a name="GoogleStorageTransferJobConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  event_stream: GoogleStorageTransferJobEventStream = None,
  id: str = None,
  name: str = None,
  notification_config: GoogleStorageTransferJobNotificationConfig = None,
  project: str = None,
  replication_spec: GoogleStorageTransferJobReplicationSpec = None,
  schedule: GoogleStorageTransferJobSchedule = None,
  status: str = None,
  transfer_spec: GoogleStorageTransferJobTransferSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.description">description</a></code> | <code>str</code> | Unique description to identify the Transfer Job. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.eventStream">event_stream</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a></code> | event_stream block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#id GoogleStorageTransferJob#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.name">name</a></code> | <code>str</code> | The name of the Transfer Job. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.project">project</a></code> | <code>str</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.replicationSpec">replication_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a></code> | replication_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.status">status</a></code> | <code>str</code> | Status of the job. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.transferSpec">transfer_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a></code> | transfer_spec block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Unique description to identify the Transfer Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#description GoogleStorageTransferJob#description}

---

##### `event_stream`<sup>Optional</sup> <a name="event_stream" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.eventStream"></a>

```python
event_stream: GoogleStorageTransferJobEventStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a>

event_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#event_stream GoogleStorageTransferJob#event_stream}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#id GoogleStorageTransferJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Transfer Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#name GoogleStorageTransferJob#name}

---

##### `notification_config`<sup>Optional</sup> <a name="notification_config" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.notificationConfig"></a>

```python
notification_config: GoogleStorageTransferJobNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#notification_config GoogleStorageTransferJob#notification_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#project GoogleStorageTransferJob#project}

---

##### `replication_spec`<sup>Optional</sup> <a name="replication_spec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.replicationSpec"></a>

```python
replication_spec: GoogleStorageTransferJobReplicationSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a>

replication_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#replication_spec GoogleStorageTransferJob#replication_spec}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.schedule"></a>

```python
schedule: GoogleStorageTransferJobSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#schedule GoogleStorageTransferJob#schedule}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of the job.

Default: ENABLED. NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#status GoogleStorageTransferJob#status}

---

##### `transfer_spec`<sup>Optional</sup> <a name="transfer_spec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobConfig.property.transferSpec"></a>

```python
transfer_spec: GoogleStorageTransferJobTransferSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a>

transfer_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#transfer_spec GoogleStorageTransferJob#transfer_spec}

---

### GoogleStorageTransferJobEventStream <a name="GoogleStorageTransferJobEventStream" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobEventStream(
  name: str,
  event_stream_expiration_time: str = None,
  event_stream_start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.name">name</a></code> | <code>str</code> | Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.eventStreamExpirationTime">event_stream_expiration_time</a></code> | <code>str</code> | Specifies the data and time at which Storage Transfer Service stops listening for events from this stream. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.eventStreamStartTime">event_stream_start_time</a></code> | <code>str</code> | Specifies the date and time that Storage Transfer Service starts listening for events from this stream. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#name GoogleStorageTransferJob#name}

---

##### `event_stream_expiration_time`<sup>Optional</sup> <a name="event_stream_expiration_time" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.eventStreamExpirationTime"></a>

```python
event_stream_expiration_time: str
```

- *Type:* str

Specifies the data and time at which Storage Transfer Service stops listening for events from this stream.

After this time, any transfers in progress will complete, but no new transfers are initiated

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#event_stream_expiration_time GoogleStorageTransferJob#event_stream_expiration_time}

---

##### `event_stream_start_time`<sup>Optional</sup> <a name="event_stream_start_time" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream.property.eventStreamStartTime"></a>

```python
event_stream_start_time: str
```

- *Type:* str

Specifies the date and time that Storage Transfer Service starts listening for events from this stream.

If no start time is specified or start time is in the past, Storage Transfer Service starts listening immediately

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#event_stream_start_time GoogleStorageTransferJob#event_stream_start_time}

---

### GoogleStorageTransferJobNotificationConfig <a name="GoogleStorageTransferJobNotificationConfig" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig(
  payload_format: str,
  pubsub_topic: str,
  event_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.payloadFormat">payload_format</a></code> | <code>str</code> | The desired format of the notification message payloads. One of "NONE" or "JSON". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The Topic.name of the Pub/Sub topic to which to publish notifications. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.eventTypes">event_types</a></code> | <code>typing.List[str]</code> | Event types for which a notification is desired. |

---

##### `payload_format`<sup>Required</sup> <a name="payload_format" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.payloadFormat"></a>

```python
payload_format: str
```

- *Type:* str

The desired format of the notification message payloads. One of "NONE" or "JSON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#payload_format GoogleStorageTransferJob#payload_format}

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

The Topic.name of the Pub/Sub topic to which to publish notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#pubsub_topic GoogleStorageTransferJob#pubsub_topic}

---

##### `event_types`<sup>Optional</sup> <a name="event_types" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig.property.eventTypes"></a>

```python
event_types: typing.List[str]
```

- *Type:* typing.List[str]

Event types for which a notification is desired.

If empty, send notifications for all event types. The valid types are "TRANSFER_OPERATION_SUCCESS", "TRANSFER_OPERATION_FAILED", "TRANSFER_OPERATION_ABORTED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#event_types GoogleStorageTransferJob#event_types}

---

### GoogleStorageTransferJobReplicationSpec <a name="GoogleStorageTransferJobReplicationSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec(
  gcs_data_sink: GoogleStorageTransferJobReplicationSpecGcsDataSink = None,
  gcs_data_source: GoogleStorageTransferJobReplicationSpecGcsDataSource = None,
  object_conditions: GoogleStorageTransferJobReplicationSpecObjectConditions = None,
  transfer_options: GoogleStorageTransferJobReplicationSpecTransferOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.gcsDataSink">gcs_data_sink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a></code> | gcs_data_sink block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.gcsDataSource">gcs_data_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a></code> | gcs_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.objectConditions">object_conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a></code> | object_conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.transferOptions">transfer_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a></code> | transfer_options block. |

---

##### `gcs_data_sink`<sup>Optional</sup> <a name="gcs_data_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.gcsDataSink"></a>

```python
gcs_data_sink: GoogleStorageTransferJobReplicationSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#gcs_data_sink GoogleStorageTransferJob#gcs_data_sink}

---

##### `gcs_data_source`<sup>Optional</sup> <a name="gcs_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.gcsDataSource"></a>

```python
gcs_data_source: GoogleStorageTransferJobReplicationSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#gcs_data_source GoogleStorageTransferJob#gcs_data_source}

---

##### `object_conditions`<sup>Optional</sup> <a name="object_conditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.objectConditions"></a>

```python
object_conditions: GoogleStorageTransferJobReplicationSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#object_conditions GoogleStorageTransferJob#object_conditions}

---

##### `transfer_options`<sup>Optional</sup> <a name="transfer_options" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec.property.transferOptions"></a>

```python
transfer_options: GoogleStorageTransferJobReplicationSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#transfer_options GoogleStorageTransferJob#transfer_options}

---

### GoogleStorageTransferJobReplicationSpecGcsDataSink <a name="GoogleStorageTransferJobReplicationSpecGcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink(
  bucket_name: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink.property.bucketName">bucket_name</a></code> | <code>str</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink.property.path">path</a></code> | <code>str</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink.property.path"></a>

```python
path: str
```

- *Type:* str

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobReplicationSpecGcsDataSource <a name="GoogleStorageTransferJobReplicationSpecGcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource(
  bucket_name: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource.property.bucketName">bucket_name</a></code> | <code>str</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource.property.path">path</a></code> | <code>str</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource.property.path"></a>

```python
path: str
```

- *Type:* str

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobReplicationSpecObjectConditions <a name="GoogleStorageTransferJobReplicationSpecObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions(
  exclude_prefixes: typing.List[str] = None,
  include_prefixes: typing.List[str] = None,
  last_modified_before: str = None,
  last_modified_since: str = None,
  max_time_elapsed_since_last_modification: str = None,
  min_time_elapsed_since_last_modification: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.excludePrefixes">exclude_prefixes</a></code> | <code>typing.List[str]</code> | exclude_prefixes must follow the requirements described for include_prefixes. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.includePrefixes">include_prefixes</a></code> | <code>typing.List[str]</code> | If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.lastModifiedBefore">last_modified_before</a></code> | <code>str</code> | If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.lastModifiedSince">last_modified_since</a></code> | <code>str</code> | If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.maxTimeElapsedSinceLastModification">max_time_elapsed_since_last_modification</a></code> | <code>str</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.minTimeElapsedSinceLastModification">min_time_elapsed_since_last_modification</a></code> | <code>str</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `exclude_prefixes`<sup>Optional</sup> <a name="exclude_prefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.excludePrefixes"></a>

```python
exclude_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#exclude_prefixes GoogleStorageTransferJob#exclude_prefixes}

---

##### `include_prefixes`<sup>Optional</sup> <a name="include_prefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.includePrefixes"></a>

```python
include_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#include_prefixes GoogleStorageTransferJob#include_prefixes}

---

##### `last_modified_before`<sup>Optional</sup> <a name="last_modified_before" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.lastModifiedBefore"></a>

```python
last_modified_before: str
```

- *Type:* str

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#last_modified_before GoogleStorageTransferJob#last_modified_before}

---

##### `last_modified_since`<sup>Optional</sup> <a name="last_modified_since" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.lastModifiedSince"></a>

```python
last_modified_since: str
```

- *Type:* str

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#last_modified_since GoogleStorageTransferJob#last_modified_since}

---

##### `max_time_elapsed_since_last_modification`<sup>Optional</sup> <a name="max_time_elapsed_since_last_modification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.maxTimeElapsedSinceLastModification"></a>

```python
max_time_elapsed_since_last_modification: str
```

- *Type:* str

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#max_time_elapsed_since_last_modification GoogleStorageTransferJob#max_time_elapsed_since_last_modification}

---

##### `min_time_elapsed_since_last_modification`<sup>Optional</sup> <a name="min_time_elapsed_since_last_modification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions.property.minTimeElapsedSinceLastModification"></a>

```python
min_time_elapsed_since_last_modification: str
```

- *Type:* str

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#min_time_elapsed_since_last_modification GoogleStorageTransferJob#min_time_elapsed_since_last_modification}

---

### GoogleStorageTransferJobReplicationSpecTransferOptions <a name="GoogleStorageTransferJobReplicationSpecTransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions(
  delete_objects_from_source_after_transfer: typing.Union[bool, IResolvable] = None,
  delete_objects_unique_in_sink: typing.Union[bool, IResolvable] = None,
  overwrite_objects_already_existing_in_sink: typing.Union[bool, IResolvable] = None,
  overwrite_when: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer">delete_objects_from_source_after_transfer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether objects should be deleted from the source after they are transferred to the sink. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsUniqueInSink">delete_objects_unique_in_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether objects that exist only in the sink should be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink">overwrite_objects_already_existing_in_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether overwriting objects that already exist in the sink is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.overwriteWhen">overwrite_when</a></code> | <code>str</code> | When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink. |

---

##### `delete_objects_from_source_after_transfer`<sup>Optional</sup> <a name="delete_objects_from_source_after_transfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer"></a>

```python
delete_objects_from_source_after_transfer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#delete_objects_from_source_after_transfer GoogleStorageTransferJob#delete_objects_from_source_after_transfer}

---

##### `delete_objects_unique_in_sink`<sup>Optional</sup> <a name="delete_objects_unique_in_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.deleteObjectsUniqueInSink"></a>

```python
delete_objects_unique_in_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#delete_objects_unique_in_sink GoogleStorageTransferJob#delete_objects_unique_in_sink}

---

##### `overwrite_objects_already_existing_in_sink`<sup>Optional</sup> <a name="overwrite_objects_already_existing_in_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink"></a>

```python
overwrite_objects_already_existing_in_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#overwrite_objects_already_existing_in_sink GoogleStorageTransferJob#overwrite_objects_already_existing_in_sink}

---

##### `overwrite_when`<sup>Optional</sup> <a name="overwrite_when" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions.property.overwriteWhen"></a>

```python
overwrite_when: str
```

- *Type:* str

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#overwrite_when GoogleStorageTransferJob#overwrite_when}

---

### GoogleStorageTransferJobSchedule <a name="GoogleStorageTransferJobSchedule" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobSchedule(
  schedule_start_date: GoogleStorageTransferJobScheduleScheduleStartDate,
  repeat_interval: str = None,
  schedule_end_date: GoogleStorageTransferJobScheduleScheduleEndDate = None,
  start_time_of_day: GoogleStorageTransferJobScheduleStartTimeOfDay = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.scheduleStartDate">schedule_start_date</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a></code> | schedule_start_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.repeatInterval">repeat_interval</a></code> | <code>str</code> | Interval between the start of each scheduled transfer. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.scheduleEndDate">schedule_end_date</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a></code> | schedule_end_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.startTimeOfDay">start_time_of_day</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a></code> | start_time_of_day block. |

---

##### `schedule_start_date`<sup>Required</sup> <a name="schedule_start_date" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.scheduleStartDate"></a>

```python
schedule_start_date: GoogleStorageTransferJobScheduleScheduleStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a>

schedule_start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#schedule_start_date GoogleStorageTransferJob#schedule_start_date}

---

##### `repeat_interval`<sup>Optional</sup> <a name="repeat_interval" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.repeatInterval"></a>

```python
repeat_interval: str
```

- *Type:* str

Interval between the start of each scheduled transfer.

If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#repeat_interval GoogleStorageTransferJob#repeat_interval}

---

##### `schedule_end_date`<sup>Optional</sup> <a name="schedule_end_date" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.scheduleEndDate"></a>

```python
schedule_end_date: GoogleStorageTransferJobScheduleScheduleEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a>

schedule_end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#schedule_end_date GoogleStorageTransferJob#schedule_end_date}

---

##### `start_time_of_day`<sup>Optional</sup> <a name="start_time_of_day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule.property.startTimeOfDay"></a>

```python
start_time_of_day: GoogleStorageTransferJobScheduleStartTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a>

start_time_of_day block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#start_time_of_day GoogleStorageTransferJob#start_time_of_day}

---

### GoogleStorageTransferJobScheduleScheduleEndDate <a name="GoogleStorageTransferJobScheduleScheduleEndDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate(
  day: typing.Union[int, float],
  month: typing.Union[int, float],
  year: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of date. Must be from 1 to 9999. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#day GoogleStorageTransferJob#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#month GoogleStorageTransferJob#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#year GoogleStorageTransferJob#year}

---

### GoogleStorageTransferJobScheduleScheduleStartDate <a name="GoogleStorageTransferJobScheduleScheduleStartDate" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate(
  day: typing.Union[int, float],
  month: typing.Union[int, float],
  year: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of date. Must be from 1 to 9999. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#day GoogleStorageTransferJob#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#month GoogleStorageTransferJob#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#year GoogleStorageTransferJob#year}

---

### GoogleStorageTransferJobScheduleStartTimeOfDay <a name="GoogleStorageTransferJobScheduleStartTimeOfDay" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay(
  hours: typing.Union[int, float],
  minutes: typing.Union[int, float],
  nanos: typing.Union[int, float],
  seconds: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#hours GoogleStorageTransferJob#hours}

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#minutes GoogleStorageTransferJob#minutes}

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#nanos GoogleStorageTransferJob#nanos}

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#seconds GoogleStorageTransferJob#seconds}

---

### GoogleStorageTransferJobTransferSpec <a name="GoogleStorageTransferJobTransferSpec" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpec(
  aws_s3_data_source: GoogleStorageTransferJobTransferSpecAwsS3DataSource = None,
  azure_blob_storage_data_source: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource = None,
  gcs_data_sink: GoogleStorageTransferJobTransferSpecGcsDataSink = None,
  gcs_data_source: GoogleStorageTransferJobTransferSpecGcsDataSource = None,
  hdfs_data_source: GoogleStorageTransferJobTransferSpecHdfsDataSource = None,
  http_data_source: GoogleStorageTransferJobTransferSpecHttpDataSource = None,
  object_conditions: GoogleStorageTransferJobTransferSpecObjectConditions = None,
  posix_data_sink: GoogleStorageTransferJobTransferSpecPosixDataSink = None,
  posix_data_source: GoogleStorageTransferJobTransferSpecPosixDataSource = None,
  sink_agent_pool_name: str = None,
  source_agent_pool_name: str = None,
  transfer_options: GoogleStorageTransferJobTransferSpecTransferOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.awsS3DataSource">aws_s3_data_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a></code> | aws_s3_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.azureBlobStorageDataSource">azure_blob_storage_data_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | azure_blob_storage_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.gcsDataSink">gcs_data_sink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a></code> | gcs_data_sink block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.gcsDataSource">gcs_data_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a></code> | gcs_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.hdfsDataSource">hdfs_data_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a></code> | hdfs_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.httpDataSource">http_data_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a></code> | http_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.objectConditions">object_conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a></code> | object_conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.posixDataSink">posix_data_sink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a></code> | posix_data_sink block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.posixDataSource">posix_data_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a></code> | posix_data_source block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.sinkAgentPoolName">sink_agent_pool_name</a></code> | <code>str</code> | Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.sourceAgentPoolName">source_agent_pool_name</a></code> | <code>str</code> | Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.transferOptions">transfer_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a></code> | transfer_options block. |

---

##### `aws_s3_data_source`<sup>Optional</sup> <a name="aws_s3_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.awsS3DataSource"></a>

```python
aws_s3_data_source: GoogleStorageTransferJobTransferSpecAwsS3DataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a>

aws_s3_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#aws_s3_data_source GoogleStorageTransferJob#aws_s3_data_source}

---

##### `azure_blob_storage_data_source`<sup>Optional</sup> <a name="azure_blob_storage_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.azureBlobStorageDataSource"></a>

```python
azure_blob_storage_data_source: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

azure_blob_storage_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#azure_blob_storage_data_source GoogleStorageTransferJob#azure_blob_storage_data_source}

---

##### `gcs_data_sink`<sup>Optional</sup> <a name="gcs_data_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.gcsDataSink"></a>

```python
gcs_data_sink: GoogleStorageTransferJobTransferSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a>

gcs_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#gcs_data_sink GoogleStorageTransferJob#gcs_data_sink}

---

##### `gcs_data_source`<sup>Optional</sup> <a name="gcs_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.gcsDataSource"></a>

```python
gcs_data_source: GoogleStorageTransferJobTransferSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a>

gcs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#gcs_data_source GoogleStorageTransferJob#gcs_data_source}

---

##### `hdfs_data_source`<sup>Optional</sup> <a name="hdfs_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.hdfsDataSource"></a>

```python
hdfs_data_source: GoogleStorageTransferJobTransferSpecHdfsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a>

hdfs_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#hdfs_data_source GoogleStorageTransferJob#hdfs_data_source}

---

##### `http_data_source`<sup>Optional</sup> <a name="http_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.httpDataSource"></a>

```python
http_data_source: GoogleStorageTransferJobTransferSpecHttpDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a>

http_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#http_data_source GoogleStorageTransferJob#http_data_source}

---

##### `object_conditions`<sup>Optional</sup> <a name="object_conditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.objectConditions"></a>

```python
object_conditions: GoogleStorageTransferJobTransferSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a>

object_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#object_conditions GoogleStorageTransferJob#object_conditions}

---

##### `posix_data_sink`<sup>Optional</sup> <a name="posix_data_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.posixDataSink"></a>

```python
posix_data_sink: GoogleStorageTransferJobTransferSpecPosixDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a>

posix_data_sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#posix_data_sink GoogleStorageTransferJob#posix_data_sink}

---

##### `posix_data_source`<sup>Optional</sup> <a name="posix_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.posixDataSource"></a>

```python
posix_data_source: GoogleStorageTransferJobTransferSpecPosixDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a>

posix_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#posix_data_source GoogleStorageTransferJob#posix_data_source}

---

##### `sink_agent_pool_name`<sup>Optional</sup> <a name="sink_agent_pool_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.sinkAgentPoolName"></a>

```python
sink_agent_pool_name: str
```

- *Type:* str

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#sink_agent_pool_name GoogleStorageTransferJob#sink_agent_pool_name}

---

##### `source_agent_pool_name`<sup>Optional</sup> <a name="source_agent_pool_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.sourceAgentPoolName"></a>

```python
source_agent_pool_name: str
```

- *Type:* str

Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#source_agent_pool_name GoogleStorageTransferJob#source_agent_pool_name}

---

##### `transfer_options`<sup>Optional</sup> <a name="transfer_options" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec.property.transferOptions"></a>

```python
transfer_options: GoogleStorageTransferJobTransferSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a>

transfer_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#transfer_options GoogleStorageTransferJob#transfer_options}

---

### GoogleStorageTransferJobTransferSpecAwsS3DataSource <a name="GoogleStorageTransferJobTransferSpecAwsS3DataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource(
  bucket_name: str,
  aws_access_key: GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey = None,
  path: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.bucketName">bucket_name</a></code> | <code>str</code> | S3 Bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.awsAccessKey">aws_access_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | aws_access_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.path">path</a></code> | <code>str</code> | S3 Bucket path in bucket to transfer. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

S3 Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

##### `aws_access_key`<sup>Optional</sup> <a name="aws_access_key" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.awsAccessKey"></a>

```python
aws_access_key: GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

aws_access_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#aws_access_key GoogleStorageTransferJob#aws_access_key}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.path"></a>

```python
path: str
```

- *Type:* str

S3 Bucket path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'.

For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a 'AssumeRoleWithWebIdentity' call for the provided role using the [GoogleServiceAccount][] for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#role_arn GoogleStorageTransferJob#role_arn}

---

### GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey <a name="GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey(
  access_key_id: str,
  secret_access_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.accessKeyId">access_key_id</a></code> | <code>str</code> | AWS Key ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | AWS Secret Access Key. |

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

AWS Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#access_key_id GoogleStorageTransferJob#access_key_id}

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

AWS Secret Access Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#secret_access_key GoogleStorageTransferJob#secret_access_key}

---

### GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource <a name="GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource(
  container: str,
  storage_account: str,
  azure_credentials: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials = None,
  credentials_secret: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.container">container</a></code> | <code>str</code> | The container to transfer from the Azure Storage account. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.storageAccount">storage_account</a></code> | <code>str</code> | The name of the Azure Storage account. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.azureCredentials">azure_credentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | azure_credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.credentialsSecret">credentials_secret</a></code> | <code>str</code> | The Resource name of a secret in Secret Manager containing SAS Credentials in JSON form. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.path">path</a></code> | <code>str</code> | Root path to transfer objects. |

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.container"></a>

```python
container: str
```

- *Type:* str

The container to transfer from the Azure Storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#container GoogleStorageTransferJob#container}

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.storageAccount"></a>

```python
storage_account: str
```

- *Type:* str

The name of the Azure Storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#storage_account GoogleStorageTransferJob#storage_account}

---

##### `azure_credentials`<sup>Optional</sup> <a name="azure_credentials" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.azureCredentials"></a>

```python
azure_credentials: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

azure_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#azure_credentials GoogleStorageTransferJob#azure_credentials}

---

##### `credentials_secret`<sup>Optional</sup> <a name="credentials_secret" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.credentialsSecret"></a>

```python
credentials_secret: str
```

- *Type:* str

The Resource name of a secret in Secret Manager containing SAS Credentials in JSON form.

Service Agent must have permissions to access secret. If credentials_secret is specified, do not specify azure_credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#credentials_secret GoogleStorageTransferJob#credentials_secret}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource.property.path"></a>

```python
path: str
```

- *Type:* str

Root path to transfer objects.

Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials <a name="GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials(
  sas_token: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.property.sasToken">sas_token</a></code> | <code>str</code> | Azure shared access signature. |

---

##### `sas_token`<sup>Required</sup> <a name="sas_token" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials.property.sasToken"></a>

```python
sas_token: str
```

- *Type:* str

Azure shared access signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#sas_token GoogleStorageTransferJob#sas_token}

---

### GoogleStorageTransferJobTransferSpecGcsDataSink <a name="GoogleStorageTransferJobTransferSpecGcsDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink(
  bucket_name: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink.property.bucketName">bucket_name</a></code> | <code>str</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink.property.path">path</a></code> | <code>str</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink.property.path"></a>

```python
path: str
```

- *Type:* str

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobTransferSpecGcsDataSource <a name="GoogleStorageTransferJobTransferSpecGcsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource(
  bucket_name: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource.property.bucketName">bucket_name</a></code> | <code>str</code> | Google Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource.property.path">path</a></code> | <code>str</code> | Google Cloud Storage path in bucket to transfer. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource.property.path"></a>

```python
path: str
```

- *Type:* str

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobTransferSpecHdfsDataSource <a name="GoogleStorageTransferJobTransferSpecHdfsDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource(
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource.property.path">path</a></code> | <code>str</code> | Directory path to the filesystem. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource.property.path"></a>

```python
path: str
```

- *Type:* str

Directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

### GoogleStorageTransferJobTransferSpecHttpDataSource <a name="GoogleStorageTransferJobTransferSpecHttpDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource(
  list_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource.property.listUrl">list_url</a></code> | <code>str</code> | The URL that points to the file that stores the object list entries. |

---

##### `list_url`<sup>Required</sup> <a name="list_url" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource.property.listUrl"></a>

```python
list_url: str
```

- *Type:* str

The URL that points to the file that stores the object list entries.

This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#list_url GoogleStorageTransferJob#list_url}

---

### GoogleStorageTransferJobTransferSpecObjectConditions <a name="GoogleStorageTransferJobTransferSpecObjectConditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions(
  exclude_prefixes: typing.List[str] = None,
  include_prefixes: typing.List[str] = None,
  last_modified_before: str = None,
  last_modified_since: str = None,
  max_time_elapsed_since_last_modification: str = None,
  min_time_elapsed_since_last_modification: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.excludePrefixes">exclude_prefixes</a></code> | <code>typing.List[str]</code> | exclude_prefixes must follow the requirements described for include_prefixes. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.includePrefixes">include_prefixes</a></code> | <code>typing.List[str]</code> | If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.lastModifiedBefore">last_modified_before</a></code> | <code>str</code> | If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.lastModifiedSince">last_modified_since</a></code> | <code>str</code> | If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.maxTimeElapsedSinceLastModification">max_time_elapsed_since_last_modification</a></code> | <code>str</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.minTimeElapsedSinceLastModification">min_time_elapsed_since_last_modification</a></code> | <code>str</code> | A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `exclude_prefixes`<sup>Optional</sup> <a name="exclude_prefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.excludePrefixes"></a>

```python
exclude_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#exclude_prefixes GoogleStorageTransferJob#exclude_prefixes}

---

##### `include_prefixes`<sup>Optional</sup> <a name="include_prefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.includePrefixes"></a>

```python
include_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#include_prefixes GoogleStorageTransferJob#include_prefixes}

---

##### `last_modified_before`<sup>Optional</sup> <a name="last_modified_before" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.lastModifiedBefore"></a>

```python
last_modified_before: str
```

- *Type:* str

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#last_modified_before GoogleStorageTransferJob#last_modified_before}

---

##### `last_modified_since`<sup>Optional</sup> <a name="last_modified_since" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.lastModifiedSince"></a>

```python
last_modified_since: str
```

- *Type:* str

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#last_modified_since GoogleStorageTransferJob#last_modified_since}

---

##### `max_time_elapsed_since_last_modification`<sup>Optional</sup> <a name="max_time_elapsed_since_last_modification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.maxTimeElapsedSinceLastModification"></a>

```python
max_time_elapsed_since_last_modification: str
```

- *Type:* str

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#max_time_elapsed_since_last_modification GoogleStorageTransferJob#max_time_elapsed_since_last_modification}

---

##### `min_time_elapsed_since_last_modification`<sup>Optional</sup> <a name="min_time_elapsed_since_last_modification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions.property.minTimeElapsedSinceLastModification"></a>

```python
min_time_elapsed_since_last_modification: str
```

- *Type:* str

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#min_time_elapsed_since_last_modification GoogleStorageTransferJob#min_time_elapsed_since_last_modification}

---

### GoogleStorageTransferJobTransferSpecPosixDataSink <a name="GoogleStorageTransferJobTransferSpecPosixDataSink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink(
  root_directory: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink.property.rootDirectory">root_directory</a></code> | <code>str</code> | Root directory path to the filesystem. |

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink.property.rootDirectory"></a>

```python
root_directory: str
```

- *Type:* str

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#root_directory GoogleStorageTransferJob#root_directory}

---

### GoogleStorageTransferJobTransferSpecPosixDataSource <a name="GoogleStorageTransferJobTransferSpecPosixDataSource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource(
  root_directory: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource.property.rootDirectory">root_directory</a></code> | <code>str</code> | Root directory path to the filesystem. |

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource.property.rootDirectory"></a>

```python
root_directory: str
```

- *Type:* str

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#root_directory GoogleStorageTransferJob#root_directory}

---

### GoogleStorageTransferJobTransferSpecTransferOptions <a name="GoogleStorageTransferJobTransferSpecTransferOptions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions(
  delete_objects_from_source_after_transfer: typing.Union[bool, IResolvable] = None,
  delete_objects_unique_in_sink: typing.Union[bool, IResolvable] = None,
  overwrite_objects_already_existing_in_sink: typing.Union[bool, IResolvable] = None,
  overwrite_when: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer">delete_objects_from_source_after_transfer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether objects should be deleted from the source after they are transferred to the sink. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.deleteObjectsUniqueInSink">delete_objects_unique_in_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether objects that exist only in the sink should be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink">overwrite_objects_already_existing_in_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether overwriting objects that already exist in the sink is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.overwriteWhen">overwrite_when</a></code> | <code>str</code> | When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink. |

---

##### `delete_objects_from_source_after_transfer`<sup>Optional</sup> <a name="delete_objects_from_source_after_transfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.deleteObjectsFromSourceAfterTransfer"></a>

```python
delete_objects_from_source_after_transfer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#delete_objects_from_source_after_transfer GoogleStorageTransferJob#delete_objects_from_source_after_transfer}

---

##### `delete_objects_unique_in_sink`<sup>Optional</sup> <a name="delete_objects_unique_in_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.deleteObjectsUniqueInSink"></a>

```python
delete_objects_unique_in_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#delete_objects_unique_in_sink GoogleStorageTransferJob#delete_objects_unique_in_sink}

---

##### `overwrite_objects_already_existing_in_sink`<sup>Optional</sup> <a name="overwrite_objects_already_existing_in_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.overwriteObjectsAlreadyExistingInSink"></a>

```python
overwrite_objects_already_existing_in_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#overwrite_objects_already_existing_in_sink GoogleStorageTransferJob#overwrite_objects_already_existing_in_sink}

---

##### `overwrite_when`<sup>Optional</sup> <a name="overwrite_when" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions.property.overwriteWhen"></a>

```python
overwrite_when: str
```

- *Type:* str

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#overwrite_when GoogleStorageTransferJob#overwrite_when}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageTransferJobEventStreamOutputReference <a name="GoogleStorageTransferJobEventStreamOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resetEventStreamExpirationTime">reset_event_stream_expiration_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resetEventStreamStartTime">reset_event_stream_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_stream_expiration_time` <a name="reset_event_stream_expiration_time" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resetEventStreamExpirationTime"></a>

```python
def reset_event_stream_expiration_time() -> None
```

##### `reset_event_stream_start_time` <a name="reset_event_stream_start_time" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.resetEventStreamStartTime"></a>

```python
def reset_event_stream_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTimeInput">event_stream_expiration_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamStartTimeInput">event_stream_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTime">event_stream_expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamStartTime">event_stream_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_stream_expiration_time_input`<sup>Optional</sup> <a name="event_stream_expiration_time_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTimeInput"></a>

```python
event_stream_expiration_time_input: str
```

- *Type:* str

---

##### `event_stream_start_time_input`<sup>Optional</sup> <a name="event_stream_start_time_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamStartTimeInput"></a>

```python
event_stream_start_time_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `event_stream_expiration_time`<sup>Required</sup> <a name="event_stream_expiration_time" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamExpirationTime"></a>

```python
event_stream_expiration_time: str
```

- *Type:* str

---

##### `event_stream_start_time`<sup>Required</sup> <a name="event_stream_start_time" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.eventStreamStartTime"></a>

```python
event_stream_start_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStreamOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobEventStream
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobEventStream">GoogleStorageTransferJobEventStream</a>

---


### GoogleStorageTransferJobNotificationConfigOutputReference <a name="GoogleStorageTransferJobNotificationConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.resetEventTypes">reset_event_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_types` <a name="reset_event_types" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.resetEventTypes"></a>

```python
def reset_event_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.eventTypesInput">event_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.payloadFormatInput">payload_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.pubsubTopicInput">pubsub_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.eventTypes">event_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.payloadFormat">payload_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_types_input`<sup>Optional</sup> <a name="event_types_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.eventTypesInput"></a>

```python
event_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `payload_format_input`<sup>Optional</sup> <a name="payload_format_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.payloadFormatInput"></a>

```python
payload_format_input: str
```

- *Type:* str

---

##### `pubsub_topic_input`<sup>Optional</sup> <a name="pubsub_topic_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```python
pubsub_topic_input: str
```

- *Type:* str

---

##### `event_types`<sup>Required</sup> <a name="event_types" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.eventTypes"></a>

```python
event_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `payload_format`<sup>Required</sup> <a name="payload_format" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.payloadFormat"></a>

```python
payload_format: str
```

- *Type:* str

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobNotificationConfig">GoogleStorageTransferJobNotificationConfig</a>

---


### GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference <a name="GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobReplicationSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a>

---


### GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference <a name="GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobReplicationSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a>

---


### GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference <a name="GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetExcludePrefixes">reset_exclude_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetIncludePrefixes">reset_include_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedBefore">reset_last_modified_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedSince">reset_last_modified_since</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification">reset_max_time_elapsed_since_last_modification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification">reset_min_time_elapsed_since_last_modification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_prefixes` <a name="reset_exclude_prefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetExcludePrefixes"></a>

```python
def reset_exclude_prefixes() -> None
```

##### `reset_include_prefixes` <a name="reset_include_prefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetIncludePrefixes"></a>

```python
def reset_include_prefixes() -> None
```

##### `reset_last_modified_before` <a name="reset_last_modified_before" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedBefore"></a>

```python
def reset_last_modified_before() -> None
```

##### `reset_last_modified_since` <a name="reset_last_modified_since" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetLastModifiedSince"></a>

```python
def reset_last_modified_since() -> None
```

##### `reset_max_time_elapsed_since_last_modification` <a name="reset_max_time_elapsed_since_last_modification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification"></a>

```python
def reset_max_time_elapsed_since_last_modification() -> None
```

##### `reset_min_time_elapsed_since_last_modification` <a name="reset_min_time_elapsed_since_last_modification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification"></a>

```python
def reset_min_time_elapsed_since_last_modification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixesInput">exclude_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixesInput">include_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput">last_modified_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSinceInput">last_modified_since_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput">max_time_elapsed_since_last_modification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput">min_time_elapsed_since_last_modification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixes">exclude_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixes">include_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBefore">last_modified_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSince">last_modified_since</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification">max_time_elapsed_since_last_modification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification">min_time_elapsed_since_last_modification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_prefixes_input`<sup>Optional</sup> <a name="exclude_prefixes_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixesInput"></a>

```python
exclude_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_prefixes_input`<sup>Optional</sup> <a name="include_prefixes_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixesInput"></a>

```python
include_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `last_modified_before_input`<sup>Optional</sup> <a name="last_modified_before_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput"></a>

```python
last_modified_before_input: str
```

- *Type:* str

---

##### `last_modified_since_input`<sup>Optional</sup> <a name="last_modified_since_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSinceInput"></a>

```python
last_modified_since_input: str
```

- *Type:* str

---

##### `max_time_elapsed_since_last_modification_input`<sup>Optional</sup> <a name="max_time_elapsed_since_last_modification_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput"></a>

```python
max_time_elapsed_since_last_modification_input: str
```

- *Type:* str

---

##### `min_time_elapsed_since_last_modification_input`<sup>Optional</sup> <a name="min_time_elapsed_since_last_modification_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput"></a>

```python
min_time_elapsed_since_last_modification_input: str
```

- *Type:* str

---

##### `exclude_prefixes`<sup>Required</sup> <a name="exclude_prefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.excludePrefixes"></a>

```python
exclude_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_prefixes`<sup>Required</sup> <a name="include_prefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.includePrefixes"></a>

```python
include_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `last_modified_before`<sup>Required</sup> <a name="last_modified_before" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedBefore"></a>

```python
last_modified_before: str
```

- *Type:* str

---

##### `last_modified_since`<sup>Required</sup> <a name="last_modified_since" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.lastModifiedSince"></a>

```python
last_modified_since: str
```

- *Type:* str

---

##### `max_time_elapsed_since_last_modification`<sup>Required</sup> <a name="max_time_elapsed_since_last_modification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification"></a>

```python
max_time_elapsed_since_last_modification: str
```

- *Type:* str

---

##### `min_time_elapsed_since_last_modification`<sup>Required</sup> <a name="min_time_elapsed_since_last_modification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification"></a>

```python
min_time_elapsed_since_last_modification: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobReplicationSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a>

---


### GoogleStorageTransferJobReplicationSpecOutputReference <a name="GoogleStorageTransferJobReplicationSpecOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSink">put_gcs_data_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSource">put_gcs_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putObjectConditions">put_object_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putTransferOptions">put_transfer_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetGcsDataSink">reset_gcs_data_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetGcsDataSource">reset_gcs_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetObjectConditions">reset_object_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetTransferOptions">reset_transfer_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gcs_data_sink` <a name="put_gcs_data_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSink"></a>

```python
def put_gcs_data_sink(
  bucket_name: str,
  path: str = None
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSink.parameter.bucketName"></a>

- *Type:* str

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSink.parameter.path"></a>

- *Type:* str

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

##### `put_gcs_data_source` <a name="put_gcs_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSource"></a>

```python
def put_gcs_data_source(
  bucket_name: str,
  path: str = None
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSource.parameter.bucketName"></a>

- *Type:* str

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putGcsDataSource.parameter.path"></a>

- *Type:* str

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

##### `put_object_conditions` <a name="put_object_conditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putObjectConditions"></a>

```python
def put_object_conditions(
  exclude_prefixes: typing.List[str] = None,
  include_prefixes: typing.List[str] = None,
  last_modified_before: str = None,
  last_modified_since: str = None,
  max_time_elapsed_since_last_modification: str = None,
  min_time_elapsed_since_last_modification: str = None
) -> None
```

###### `exclude_prefixes`<sup>Optional</sup> <a name="exclude_prefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putObjectConditions.parameter.excludePrefixes"></a>

- *Type:* typing.List[str]

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#exclude_prefixes GoogleStorageTransferJob#exclude_prefixes}

---

###### `include_prefixes`<sup>Optional</sup> <a name="include_prefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putObjectConditions.parameter.includePrefixes"></a>

- *Type:* typing.List[str]

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#include_prefixes GoogleStorageTransferJob#include_prefixes}

---

###### `last_modified_before`<sup>Optional</sup> <a name="last_modified_before" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putObjectConditions.parameter.lastModifiedBefore"></a>

- *Type:* str

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#last_modified_before GoogleStorageTransferJob#last_modified_before}

---

###### `last_modified_since`<sup>Optional</sup> <a name="last_modified_since" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putObjectConditions.parameter.lastModifiedSince"></a>

- *Type:* str

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#last_modified_since GoogleStorageTransferJob#last_modified_since}

---

###### `max_time_elapsed_since_last_modification`<sup>Optional</sup> <a name="max_time_elapsed_since_last_modification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putObjectConditions.parameter.maxTimeElapsedSinceLastModification"></a>

- *Type:* str

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#max_time_elapsed_since_last_modification GoogleStorageTransferJob#max_time_elapsed_since_last_modification}

---

###### `min_time_elapsed_since_last_modification`<sup>Optional</sup> <a name="min_time_elapsed_since_last_modification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putObjectConditions.parameter.minTimeElapsedSinceLastModification"></a>

- *Type:* str

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#min_time_elapsed_since_last_modification GoogleStorageTransferJob#min_time_elapsed_since_last_modification}

---

##### `put_transfer_options` <a name="put_transfer_options" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putTransferOptions"></a>

```python
def put_transfer_options(
  delete_objects_from_source_after_transfer: typing.Union[bool, IResolvable] = None,
  delete_objects_unique_in_sink: typing.Union[bool, IResolvable] = None,
  overwrite_objects_already_existing_in_sink: typing.Union[bool, IResolvable] = None,
  overwrite_when: str = None
) -> None
```

###### `delete_objects_from_source_after_transfer`<sup>Optional</sup> <a name="delete_objects_from_source_after_transfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putTransferOptions.parameter.deleteObjectsFromSourceAfterTransfer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#delete_objects_from_source_after_transfer GoogleStorageTransferJob#delete_objects_from_source_after_transfer}

---

###### `delete_objects_unique_in_sink`<sup>Optional</sup> <a name="delete_objects_unique_in_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putTransferOptions.parameter.deleteObjectsUniqueInSink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#delete_objects_unique_in_sink GoogleStorageTransferJob#delete_objects_unique_in_sink}

---

###### `overwrite_objects_already_existing_in_sink`<sup>Optional</sup> <a name="overwrite_objects_already_existing_in_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putTransferOptions.parameter.overwriteObjectsAlreadyExistingInSink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#overwrite_objects_already_existing_in_sink GoogleStorageTransferJob#overwrite_objects_already_existing_in_sink}

---

###### `overwrite_when`<sup>Optional</sup> <a name="overwrite_when" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.putTransferOptions.parameter.overwriteWhen"></a>

- *Type:* str

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#overwrite_when GoogleStorageTransferJob#overwrite_when}

---

##### `reset_gcs_data_sink` <a name="reset_gcs_data_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetGcsDataSink"></a>

```python
def reset_gcs_data_sink() -> None
```

##### `reset_gcs_data_source` <a name="reset_gcs_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetGcsDataSource"></a>

```python
def reset_gcs_data_source() -> None
```

##### `reset_object_conditions` <a name="reset_object_conditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetObjectConditions"></a>

```python
def reset_object_conditions() -> None
```

##### `reset_transfer_options` <a name="reset_transfer_options" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.resetTransferOptions"></a>

```python
def reset_transfer_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSink">gcs_data_sink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference">GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSource">gcs_data_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference">GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.objectConditions">object_conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference">GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.transferOptions">transfer_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference">GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSinkInput">gcs_data_sink_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSourceInput">gcs_data_source_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.objectConditionsInput">object_conditions_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.transferOptionsInput">transfer_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcs_data_sink`<sup>Required</sup> <a name="gcs_data_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSink"></a>

```python
gcs_data_sink: GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference">GoogleStorageTransferJobReplicationSpecGcsDataSinkOutputReference</a>

---

##### `gcs_data_source`<sup>Required</sup> <a name="gcs_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSource"></a>

```python
gcs_data_source: GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference">GoogleStorageTransferJobReplicationSpecGcsDataSourceOutputReference</a>

---

##### `object_conditions`<sup>Required</sup> <a name="object_conditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.objectConditions"></a>

```python
object_conditions: GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference">GoogleStorageTransferJobReplicationSpecObjectConditionsOutputReference</a>

---

##### `transfer_options`<sup>Required</sup> <a name="transfer_options" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.transferOptions"></a>

```python
transfer_options: GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference">GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference</a>

---

##### `gcs_data_sink_input`<sup>Optional</sup> <a name="gcs_data_sink_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSinkInput"></a>

```python
gcs_data_sink_input: GoogleStorageTransferJobReplicationSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSink">GoogleStorageTransferJobReplicationSpecGcsDataSink</a>

---

##### `gcs_data_source_input`<sup>Optional</sup> <a name="gcs_data_source_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.gcsDataSourceInput"></a>

```python
gcs_data_source_input: GoogleStorageTransferJobReplicationSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecGcsDataSource">GoogleStorageTransferJobReplicationSpecGcsDataSource</a>

---

##### `object_conditions_input`<sup>Optional</sup> <a name="object_conditions_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.objectConditionsInput"></a>

```python
object_conditions_input: GoogleStorageTransferJobReplicationSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecObjectConditions">GoogleStorageTransferJobReplicationSpecObjectConditions</a>

---

##### `transfer_options_input`<sup>Optional</sup> <a name="transfer_options_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.transferOptionsInput"></a>

```python
transfer_options_input: GoogleStorageTransferJobReplicationSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobReplicationSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpec">GoogleStorageTransferJobReplicationSpec</a>

---


### GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference <a name="GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer">reset_delete_objects_from_source_after_transfer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink">reset_delete_objects_unique_in_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink">reset_overwrite_objects_already_existing_in_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteWhen">reset_overwrite_when</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_objects_from_source_after_transfer` <a name="reset_delete_objects_from_source_after_transfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer"></a>

```python
def reset_delete_objects_from_source_after_transfer() -> None
```

##### `reset_delete_objects_unique_in_sink` <a name="reset_delete_objects_unique_in_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink"></a>

```python
def reset_delete_objects_unique_in_sink() -> None
```

##### `reset_overwrite_objects_already_existing_in_sink` <a name="reset_overwrite_objects_already_existing_in_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink"></a>

```python
def reset_overwrite_objects_already_existing_in_sink() -> None
```

##### `reset_overwrite_when` <a name="reset_overwrite_when" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.resetOverwriteWhen"></a>

```python
def reset_overwrite_when() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput">delete_objects_from_source_after_transfer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput">delete_objects_unique_in_sink_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput">overwrite_objects_already_existing_in_sink_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhenInput">overwrite_when_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer">delete_objects_from_source_after_transfer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink">delete_objects_unique_in_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink">overwrite_objects_already_existing_in_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhen">overwrite_when</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_objects_from_source_after_transfer_input`<sup>Optional</sup> <a name="delete_objects_from_source_after_transfer_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput"></a>

```python
delete_objects_from_source_after_transfer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_objects_unique_in_sink_input`<sup>Optional</sup> <a name="delete_objects_unique_in_sink_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput"></a>

```python
delete_objects_unique_in_sink_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `overwrite_objects_already_existing_in_sink_input`<sup>Optional</sup> <a name="overwrite_objects_already_existing_in_sink_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput"></a>

```python
overwrite_objects_already_existing_in_sink_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `overwrite_when_input`<sup>Optional</sup> <a name="overwrite_when_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhenInput"></a>

```python
overwrite_when_input: str
```

- *Type:* str

---

##### `delete_objects_from_source_after_transfer`<sup>Required</sup> <a name="delete_objects_from_source_after_transfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer"></a>

```python
delete_objects_from_source_after_transfer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_objects_unique_in_sink`<sup>Required</sup> <a name="delete_objects_unique_in_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink"></a>

```python
delete_objects_unique_in_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `overwrite_objects_already_existing_in_sink`<sup>Required</sup> <a name="overwrite_objects_already_existing_in_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink"></a>

```python
overwrite_objects_already_existing_in_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `overwrite_when`<sup>Required</sup> <a name="overwrite_when" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.overwriteWhen"></a>

```python
overwrite_when: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobReplicationSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobReplicationSpecTransferOptions">GoogleStorageTransferJobReplicationSpecTransferOptions</a>

---


### GoogleStorageTransferJobScheduleOutputReference <a name="GoogleStorageTransferJobScheduleOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleEndDate">put_schedule_end_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleStartDate">put_schedule_start_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putStartTimeOfDay">put_start_time_of_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetRepeatInterval">reset_repeat_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetScheduleEndDate">reset_schedule_end_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetStartTimeOfDay">reset_start_time_of_day</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule_end_date` <a name="put_schedule_end_date" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleEndDate"></a>

```python
def put_schedule_end_date(
  day: typing.Union[int, float],
  month: typing.Union[int, float],
  year: typing.Union[int, float]
) -> None
```

###### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleEndDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#day GoogleStorageTransferJob#day}

---

###### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleEndDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#month GoogleStorageTransferJob#month}

---

###### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleEndDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#year GoogleStorageTransferJob#year}

---

##### `put_schedule_start_date` <a name="put_schedule_start_date" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleStartDate"></a>

```python
def put_schedule_start_date(
  day: typing.Union[int, float],
  month: typing.Union[int, float],
  year: typing.Union[int, float]
) -> None
```

###### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleStartDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#day GoogleStorageTransferJob#day}

---

###### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleStartDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#month GoogleStorageTransferJob#month}

---

###### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putScheduleStartDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#year GoogleStorageTransferJob#year}

---

##### `put_start_time_of_day` <a name="put_start_time_of_day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putStartTimeOfDay"></a>

```python
def put_start_time_of_day(
  hours: typing.Union[int, float],
  minutes: typing.Union[int, float],
  nanos: typing.Union[int, float],
  seconds: typing.Union[int, float]
) -> None
```

###### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putStartTimeOfDay.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#hours GoogleStorageTransferJob#hours}

---

###### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putStartTimeOfDay.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#minutes GoogleStorageTransferJob#minutes}

---

###### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putStartTimeOfDay.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#nanos GoogleStorageTransferJob#nanos}

---

###### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.putStartTimeOfDay.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#seconds GoogleStorageTransferJob#seconds}

---

##### `reset_repeat_interval` <a name="reset_repeat_interval" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetRepeatInterval"></a>

```python
def reset_repeat_interval() -> None
```

##### `reset_schedule_end_date` <a name="reset_schedule_end_date" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetScheduleEndDate"></a>

```python
def reset_schedule_end_date() -> None
```

##### `reset_start_time_of_day` <a name="reset_start_time_of_day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.resetStartTimeOfDay"></a>

```python
def reset_start_time_of_day() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleEndDate">schedule_end_date</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference">GoogleStorageTransferJobScheduleScheduleEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleStartDate">schedule_start_date</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference">GoogleStorageTransferJobScheduleScheduleStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.startTimeOfDay">start_time_of_day</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference">GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.repeatIntervalInput">repeat_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleEndDateInput">schedule_end_date_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleStartDateInput">schedule_start_date_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.startTimeOfDayInput">start_time_of_day_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.repeatInterval">repeat_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_end_date`<sup>Required</sup> <a name="schedule_end_date" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleEndDate"></a>

```python
schedule_end_date: GoogleStorageTransferJobScheduleScheduleEndDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference">GoogleStorageTransferJobScheduleScheduleEndDateOutputReference</a>

---

##### `schedule_start_date`<sup>Required</sup> <a name="schedule_start_date" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleStartDate"></a>

```python
schedule_start_date: GoogleStorageTransferJobScheduleScheduleStartDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference">GoogleStorageTransferJobScheduleScheduleStartDateOutputReference</a>

---

##### `start_time_of_day`<sup>Required</sup> <a name="start_time_of_day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.startTimeOfDay"></a>

```python
start_time_of_day: GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference">GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference</a>

---

##### `repeat_interval_input`<sup>Optional</sup> <a name="repeat_interval_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.repeatIntervalInput"></a>

```python
repeat_interval_input: str
```

- *Type:* str

---

##### `schedule_end_date_input`<sup>Optional</sup> <a name="schedule_end_date_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleEndDateInput"></a>

```python
schedule_end_date_input: GoogleStorageTransferJobScheduleScheduleEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a>

---

##### `schedule_start_date_input`<sup>Optional</sup> <a name="schedule_start_date_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.scheduleStartDateInput"></a>

```python
schedule_start_date_input: GoogleStorageTransferJobScheduleScheduleStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a>

---

##### `start_time_of_day_input`<sup>Optional</sup> <a name="start_time_of_day_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.startTimeOfDayInput"></a>

```python
start_time_of_day_input: GoogleStorageTransferJobScheduleStartTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a>

---

##### `repeat_interval`<sup>Required</sup> <a name="repeat_interval" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.repeatInterval"></a>

```python
repeat_interval: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobSchedule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobSchedule">GoogleStorageTransferJobSchedule</a>

---


### GoogleStorageTransferJobScheduleScheduleEndDateOutputReference <a name="GoogleStorageTransferJobScheduleScheduleEndDateOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobScheduleScheduleEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleEndDate">GoogleStorageTransferJobScheduleScheduleEndDate</a>

---


### GoogleStorageTransferJobScheduleScheduleStartDateOutputReference <a name="GoogleStorageTransferJobScheduleScheduleStartDateOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobScheduleScheduleStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleScheduleStartDate">GoogleStorageTransferJobScheduleScheduleStartDate</a>

---


### GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference <a name="GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDayOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobScheduleStartTimeOfDay
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobScheduleStartTimeOfDay">GoogleStorageTransferJobScheduleStartTimeOfDay</a>

---


### GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference <a name="GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---


### GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey">put_aws_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetAwsAccessKey">reset_aws_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_access_key` <a name="put_aws_access_key" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey"></a>

```python
def put_aws_access_key(
  access_key_id: str,
  secret_access_key: str
) -> None
```

###### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey.parameter.accessKeyId"></a>

- *Type:* str

AWS Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#access_key_id GoogleStorageTransferJob#access_key_id}

---

###### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.putAwsAccessKey.parameter.secretAccessKey"></a>

- *Type:* str

AWS Secret Access Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#secret_access_key GoogleStorageTransferJob#secret_access_key}

---

##### `reset_aws_access_key` <a name="reset_aws_access_key" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetAwsAccessKey"></a>

```python
def reset_aws_access_key() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKey">aws_access_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKeyInput">aws_access_key_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_access_key`<sup>Required</sup> <a name="aws_access_key" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKey"></a>

```python
aws_access_key: GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference</a>

---

##### `aws_access_key_input`<sup>Optional</sup> <a name="aws_access_key_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.awsAccessKeyInput"></a>

```python
aws_access_key_input: GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobTransferSpecAwsS3DataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a>

---


### GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference <a name="GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasTokenInput">sas_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasToken">sas_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sas_token_input`<sup>Optional</sup> <a name="sas_token_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasTokenInput"></a>

```python
sas_token_input: str
```

- *Type:* str

---

##### `sas_token`<sup>Required</sup> <a name="sas_token" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.sasToken"></a>

```python
sas_token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---


### GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials">put_azure_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetAzureCredentials">reset_azure_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetCredentialsSecret">reset_credentials_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_azure_credentials` <a name="put_azure_credentials" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials"></a>

```python
def put_azure_credentials(
  sas_token: str
) -> None
```

###### `sas_token`<sup>Required</sup> <a name="sas_token" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.putAzureCredentials.parameter.sasToken"></a>

- *Type:* str

Azure shared access signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#sas_token GoogleStorageTransferJob#sas_token}

---

##### `reset_azure_credentials` <a name="reset_azure_credentials" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetAzureCredentials"></a>

```python
def reset_azure_credentials() -> None
```

##### `reset_credentials_secret` <a name="reset_credentials_secret" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetCredentialsSecret"></a>

```python
def reset_credentials_secret() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentials">azure_credentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentialsInput">azure_credentials_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.containerInput">container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.credentialsSecretInput">credentials_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccountInput">storage_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.credentialsSecret">credentials_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccount">storage_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_credentials`<sup>Required</sup> <a name="azure_credentials" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentials"></a>

```python
azure_credentials: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference</a>

---

##### `azure_credentials_input`<sup>Optional</sup> <a name="azure_credentials_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.azureCredentialsInput"></a>

```python
azure_credentials_input: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.containerInput"></a>

```python
container_input: str
```

- *Type:* str

---

##### `credentials_secret_input`<sup>Optional</sup> <a name="credentials_secret_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.credentialsSecretInput"></a>

```python
credentials_secret_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `storage_account_input`<sup>Optional</sup> <a name="storage_account_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccountInput"></a>

```python
storage_account_input: str
```

- *Type:* str

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `credentials_secret`<sup>Required</sup> <a name="credentials_secret" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.credentialsSecret"></a>

```python
credentials_secret: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.storageAccount"></a>

```python
storage_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---


### GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference <a name="GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobTransferSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a>

---


### GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobTransferSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a>

---


### GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobTransferSpecHdfsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a>

---


### GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrlInput">list_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrl">list_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `list_url_input`<sup>Optional</sup> <a name="list_url_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrlInput"></a>

```python
list_url_input: str
```

- *Type:* str

---

##### `list_url`<sup>Required</sup> <a name="list_url" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.listUrl"></a>

```python
list_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobTransferSpecHttpDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a>

---


### GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference <a name="GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetExcludePrefixes">reset_exclude_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetIncludePrefixes">reset_include_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedBefore">reset_last_modified_before</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedSince">reset_last_modified_since</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification">reset_max_time_elapsed_since_last_modification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification">reset_min_time_elapsed_since_last_modification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_prefixes` <a name="reset_exclude_prefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetExcludePrefixes"></a>

```python
def reset_exclude_prefixes() -> None
```

##### `reset_include_prefixes` <a name="reset_include_prefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetIncludePrefixes"></a>

```python
def reset_include_prefixes() -> None
```

##### `reset_last_modified_before` <a name="reset_last_modified_before" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedBefore"></a>

```python
def reset_last_modified_before() -> None
```

##### `reset_last_modified_since` <a name="reset_last_modified_since" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetLastModifiedSince"></a>

```python
def reset_last_modified_since() -> None
```

##### `reset_max_time_elapsed_since_last_modification` <a name="reset_max_time_elapsed_since_last_modification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetMaxTimeElapsedSinceLastModification"></a>

```python
def reset_max_time_elapsed_since_last_modification() -> None
```

##### `reset_min_time_elapsed_since_last_modification` <a name="reset_min_time_elapsed_since_last_modification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.resetMinTimeElapsedSinceLastModification"></a>

```python
def reset_min_time_elapsed_since_last_modification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixesInput">exclude_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixesInput">include_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput">last_modified_before_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSinceInput">last_modified_since_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput">max_time_elapsed_since_last_modification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput">min_time_elapsed_since_last_modification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixes">exclude_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixes">include_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBefore">last_modified_before</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSince">last_modified_since</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification">max_time_elapsed_since_last_modification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification">min_time_elapsed_since_last_modification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_prefixes_input`<sup>Optional</sup> <a name="exclude_prefixes_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixesInput"></a>

```python
exclude_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_prefixes_input`<sup>Optional</sup> <a name="include_prefixes_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixesInput"></a>

```python
include_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `last_modified_before_input`<sup>Optional</sup> <a name="last_modified_before_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBeforeInput"></a>

```python
last_modified_before_input: str
```

- *Type:* str

---

##### `last_modified_since_input`<sup>Optional</sup> <a name="last_modified_since_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSinceInput"></a>

```python
last_modified_since_input: str
```

- *Type:* str

---

##### `max_time_elapsed_since_last_modification_input`<sup>Optional</sup> <a name="max_time_elapsed_since_last_modification_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModificationInput"></a>

```python
max_time_elapsed_since_last_modification_input: str
```

- *Type:* str

---

##### `min_time_elapsed_since_last_modification_input`<sup>Optional</sup> <a name="min_time_elapsed_since_last_modification_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModificationInput"></a>

```python
min_time_elapsed_since_last_modification_input: str
```

- *Type:* str

---

##### `exclude_prefixes`<sup>Required</sup> <a name="exclude_prefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.excludePrefixes"></a>

```python
exclude_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_prefixes`<sup>Required</sup> <a name="include_prefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.includePrefixes"></a>

```python
include_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `last_modified_before`<sup>Required</sup> <a name="last_modified_before" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedBefore"></a>

```python
last_modified_before: str
```

- *Type:* str

---

##### `last_modified_since`<sup>Required</sup> <a name="last_modified_since" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.lastModifiedSince"></a>

```python
last_modified_since: str
```

- *Type:* str

---

##### `max_time_elapsed_since_last_modification`<sup>Required</sup> <a name="max_time_elapsed_since_last_modification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.maxTimeElapsedSinceLastModification"></a>

```python
max_time_elapsed_since_last_modification: str
```

- *Type:* str

---

##### `min_time_elapsed_since_last_modification`<sup>Required</sup> <a name="min_time_elapsed_since_last_modification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.minTimeElapsedSinceLastModification"></a>

```python
min_time_elapsed_since_last_modification: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobTransferSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a>

---


### GoogleStorageTransferJobTransferSpecOutputReference <a name="GoogleStorageTransferJobTransferSpecOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAwsS3DataSource">put_aws_s3_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource">put_azure_blob_storage_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSink">put_gcs_data_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSource">put_gcs_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHdfsDataSource">put_hdfs_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHttpDataSource">put_http_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putObjectConditions">put_object_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSink">put_posix_data_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSource">put_posix_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putTransferOptions">put_transfer_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetAwsS3DataSource">reset_aws_s3_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetAzureBlobStorageDataSource">reset_azure_blob_storage_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetGcsDataSink">reset_gcs_data_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetGcsDataSource">reset_gcs_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetHdfsDataSource">reset_hdfs_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetHttpDataSource">reset_http_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetObjectConditions">reset_object_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetPosixDataSink">reset_posix_data_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetPosixDataSource">reset_posix_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetSinkAgentPoolName">reset_sink_agent_pool_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetSourceAgentPoolName">reset_source_agent_pool_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetTransferOptions">reset_transfer_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_s3_data_source` <a name="put_aws_s3_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAwsS3DataSource"></a>

```python
def put_aws_s3_data_source(
  bucket_name: str,
  aws_access_key: GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey = None,
  path: str = None,
  role_arn: str = None
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAwsS3DataSource.parameter.bucketName"></a>

- *Type:* str

S3 Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

###### `aws_access_key`<sup>Optional</sup> <a name="aws_access_key" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAwsS3DataSource.parameter.awsAccessKey"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey">GoogleStorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey</a>

aws_access_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#aws_access_key GoogleStorageTransferJob#aws_access_key}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAwsS3DataSource.parameter.path"></a>

- *Type:* str

S3 Bucket path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAwsS3DataSource.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'.

For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a 'AssumeRoleWithWebIdentity' call for the provided role using the [GoogleServiceAccount][] for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#role_arn GoogleStorageTransferJob#role_arn}

---

##### `put_azure_blob_storage_data_source` <a name="put_azure_blob_storage_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource"></a>

```python
def put_azure_blob_storage_data_source(
  container: str,
  storage_account: str,
  azure_credentials: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials = None,
  credentials_secret: str = None,
  path: str = None
) -> None
```

###### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource.parameter.container"></a>

- *Type:* str

The container to transfer from the Azure Storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#container GoogleStorageTransferJob#container}

---

###### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource.parameter.storageAccount"></a>

- *Type:* str

The name of the Azure Storage account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#storage_account GoogleStorageTransferJob#storage_account}

---

###### `azure_credentials`<sup>Optional</sup> <a name="azure_credentials" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource.parameter.azureCredentials"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials</a>

azure_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#azure_credentials GoogleStorageTransferJob#azure_credentials}

---

###### `credentials_secret`<sup>Optional</sup> <a name="credentials_secret" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource.parameter.credentialsSecret"></a>

- *Type:* str

The Resource name of a secret in Secret Manager containing SAS Credentials in JSON form.

Service Agent must have permissions to access secret. If credentials_secret is specified, do not specify azure_credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#credentials_secret GoogleStorageTransferJob#credentials_secret}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putAzureBlobStorageDataSource.parameter.path"></a>

- *Type:* str

Root path to transfer objects.

Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

##### `put_gcs_data_sink` <a name="put_gcs_data_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSink"></a>

```python
def put_gcs_data_sink(
  bucket_name: str,
  path: str = None
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSink.parameter.bucketName"></a>

- *Type:* str

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSink.parameter.path"></a>

- *Type:* str

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

##### `put_gcs_data_source` <a name="put_gcs_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSource"></a>

```python
def put_gcs_data_source(
  bucket_name: str,
  path: str = None
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSource.parameter.bucketName"></a>

- *Type:* str

Google Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#bucket_name GoogleStorageTransferJob#bucket_name}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putGcsDataSource.parameter.path"></a>

- *Type:* str

Google Cloud Storage path in bucket to transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

##### `put_hdfs_data_source` <a name="put_hdfs_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHdfsDataSource"></a>

```python
def put_hdfs_data_source(
  path: str
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHdfsDataSource.parameter.path"></a>

- *Type:* str

Directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#path GoogleStorageTransferJob#path}

---

##### `put_http_data_source` <a name="put_http_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHttpDataSource"></a>

```python
def put_http_data_source(
  list_url: str
) -> None
```

###### `list_url`<sup>Required</sup> <a name="list_url" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putHttpDataSource.parameter.listUrl"></a>

- *Type:* str

The URL that points to the file that stores the object list entries.

This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#list_url GoogleStorageTransferJob#list_url}

---

##### `put_object_conditions` <a name="put_object_conditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putObjectConditions"></a>

```python
def put_object_conditions(
  exclude_prefixes: typing.List[str] = None,
  include_prefixes: typing.List[str] = None,
  last_modified_before: str = None,
  last_modified_since: str = None,
  max_time_elapsed_since_last_modification: str = None,
  min_time_elapsed_since_last_modification: str = None
) -> None
```

###### `exclude_prefixes`<sup>Optional</sup> <a name="exclude_prefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.excludePrefixes"></a>

- *Type:* typing.List[str]

exclude_prefixes must follow the requirements described for include_prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#exclude_prefixes GoogleStorageTransferJob#exclude_prefixes}

---

###### `include_prefixes`<sup>Optional</sup> <a name="include_prefixes" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.includePrefixes"></a>

- *Type:* typing.List[str]

If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes.

If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#include_prefixes GoogleStorageTransferJob#include_prefixes}

---

###### `last_modified_before`<sup>Optional</sup> <a name="last_modified_before" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.lastModifiedBefore"></a>

- *Type:* str

If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#last_modified_before GoogleStorageTransferJob#last_modified_before}

---

###### `last_modified_since`<sup>Optional</sup> <a name="last_modified_since" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.lastModifiedSince"></a>

- *Type:* str

If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred.

A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#last_modified_since GoogleStorageTransferJob#last_modified_since}

---

###### `max_time_elapsed_since_last_modification`<sup>Optional</sup> <a name="max_time_elapsed_since_last_modification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.maxTimeElapsedSinceLastModification"></a>

- *Type:* str

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#max_time_elapsed_since_last_modification GoogleStorageTransferJob#max_time_elapsed_since_last_modification}

---

###### `min_time_elapsed_since_last_modification`<sup>Optional</sup> <a name="min_time_elapsed_since_last_modification" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putObjectConditions.parameter.minTimeElapsedSinceLastModification"></a>

- *Type:* str

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#min_time_elapsed_since_last_modification GoogleStorageTransferJob#min_time_elapsed_since_last_modification}

---

##### `put_posix_data_sink` <a name="put_posix_data_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSink"></a>

```python
def put_posix_data_sink(
  root_directory: str
) -> None
```

###### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSink.parameter.rootDirectory"></a>

- *Type:* str

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#root_directory GoogleStorageTransferJob#root_directory}

---

##### `put_posix_data_source` <a name="put_posix_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSource"></a>

```python
def put_posix_data_source(
  root_directory: str
) -> None
```

###### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putPosixDataSource.parameter.rootDirectory"></a>

- *Type:* str

Root directory path to the filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#root_directory GoogleStorageTransferJob#root_directory}

---

##### `put_transfer_options` <a name="put_transfer_options" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putTransferOptions"></a>

```python
def put_transfer_options(
  delete_objects_from_source_after_transfer: typing.Union[bool, IResolvable] = None,
  delete_objects_unique_in_sink: typing.Union[bool, IResolvable] = None,
  overwrite_objects_already_existing_in_sink: typing.Union[bool, IResolvable] = None,
  overwrite_when: str = None
) -> None
```

###### `delete_objects_from_source_after_transfer`<sup>Optional</sup> <a name="delete_objects_from_source_after_transfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putTransferOptions.parameter.deleteObjectsFromSourceAfterTransfer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether objects should be deleted from the source after they are transferred to the sink.

Note that this option and delete_objects_unique_in_sink are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#delete_objects_from_source_after_transfer GoogleStorageTransferJob#delete_objects_from_source_after_transfer}

---

###### `delete_objects_unique_in_sink`<sup>Optional</sup> <a name="delete_objects_unique_in_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putTransferOptions.parameter.deleteObjectsUniqueInSink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether objects that exist only in the sink should be deleted.

Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#delete_objects_unique_in_sink GoogleStorageTransferJob#delete_objects_unique_in_sink}

---

###### `overwrite_objects_already_existing_in_sink`<sup>Optional</sup> <a name="overwrite_objects_already_existing_in_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putTransferOptions.parameter.overwriteObjectsAlreadyExistingInSink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether overwriting objects that already exist in the sink is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#overwrite_objects_already_existing_in_sink GoogleStorageTransferJob#overwrite_objects_already_existing_in_sink}

---

###### `overwrite_when`<sup>Optional</sup> <a name="overwrite_when" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.putTransferOptions.parameter.overwriteWhen"></a>

- *Type:* str

When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_storage_transfer_job#overwrite_when GoogleStorageTransferJob#overwrite_when}

---

##### `reset_aws_s3_data_source` <a name="reset_aws_s3_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetAwsS3DataSource"></a>

```python
def reset_aws_s3_data_source() -> None
```

##### `reset_azure_blob_storage_data_source` <a name="reset_azure_blob_storage_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetAzureBlobStorageDataSource"></a>

```python
def reset_azure_blob_storage_data_source() -> None
```

##### `reset_gcs_data_sink` <a name="reset_gcs_data_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetGcsDataSink"></a>

```python
def reset_gcs_data_sink() -> None
```

##### `reset_gcs_data_source` <a name="reset_gcs_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetGcsDataSource"></a>

```python
def reset_gcs_data_source() -> None
```

##### `reset_hdfs_data_source` <a name="reset_hdfs_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetHdfsDataSource"></a>

```python
def reset_hdfs_data_source() -> None
```

##### `reset_http_data_source` <a name="reset_http_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetHttpDataSource"></a>

```python
def reset_http_data_source() -> None
```

##### `reset_object_conditions` <a name="reset_object_conditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetObjectConditions"></a>

```python
def reset_object_conditions() -> None
```

##### `reset_posix_data_sink` <a name="reset_posix_data_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetPosixDataSink"></a>

```python
def reset_posix_data_sink() -> None
```

##### `reset_posix_data_source` <a name="reset_posix_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetPosixDataSource"></a>

```python
def reset_posix_data_source() -> None
```

##### `reset_sink_agent_pool_name` <a name="reset_sink_agent_pool_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetSinkAgentPoolName"></a>

```python
def reset_sink_agent_pool_name() -> None
```

##### `reset_source_agent_pool_name` <a name="reset_source_agent_pool_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetSourceAgentPoolName"></a>

```python
def reset_source_agent_pool_name() -> None
```

##### `reset_transfer_options` <a name="reset_transfer_options" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.resetTransferOptions"></a>

```python
def reset_transfer_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.awsS3DataSource">aws_s3_data_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference">GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSource">azure_blob_storage_data_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSink">gcs_data_sink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference">GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSource">gcs_data_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference">GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.hdfsDataSource">hdfs_data_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference">GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.httpDataSource">http_data_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference">GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.objectConditions">object_conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference">GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSink">posix_data_sink</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference">GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSource">posix_data_source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference">GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.transferOptions">transfer_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference">GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.awsS3DataSourceInput">aws_s3_data_source_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSourceInput">azure_blob_storage_data_source_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSinkInput">gcs_data_sink_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSourceInput">gcs_data_source_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.hdfsDataSourceInput">hdfs_data_source_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.httpDataSourceInput">http_data_source_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.objectConditionsInput">object_conditions_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSinkInput">posix_data_sink_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSourceInput">posix_data_source_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolNameInput">sink_agent_pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolNameInput">source_agent_pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.transferOptionsInput">transfer_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolName">sink_agent_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolName">source_agent_pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_s3_data_source`<sup>Required</sup> <a name="aws_s3_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.awsS3DataSource"></a>

```python
aws_s3_data_source: GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference">GoogleStorageTransferJobTransferSpecAwsS3DataSourceOutputReference</a>

---

##### `azure_blob_storage_data_source`<sup>Required</sup> <a name="azure_blob_storage_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSource"></a>

```python
azure_blob_storage_data_source: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference</a>

---

##### `gcs_data_sink`<sup>Required</sup> <a name="gcs_data_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSink"></a>

```python
gcs_data_sink: GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference">GoogleStorageTransferJobTransferSpecGcsDataSinkOutputReference</a>

---

##### `gcs_data_source`<sup>Required</sup> <a name="gcs_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSource"></a>

```python
gcs_data_source: GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference">GoogleStorageTransferJobTransferSpecGcsDataSourceOutputReference</a>

---

##### `hdfs_data_source`<sup>Required</sup> <a name="hdfs_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.hdfsDataSource"></a>

```python
hdfs_data_source: GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference">GoogleStorageTransferJobTransferSpecHdfsDataSourceOutputReference</a>

---

##### `http_data_source`<sup>Required</sup> <a name="http_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.httpDataSource"></a>

```python
http_data_source: GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference">GoogleStorageTransferJobTransferSpecHttpDataSourceOutputReference</a>

---

##### `object_conditions`<sup>Required</sup> <a name="object_conditions" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.objectConditions"></a>

```python
object_conditions: GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference">GoogleStorageTransferJobTransferSpecObjectConditionsOutputReference</a>

---

##### `posix_data_sink`<sup>Required</sup> <a name="posix_data_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSink"></a>

```python
posix_data_sink: GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference">GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference</a>

---

##### `posix_data_source`<sup>Required</sup> <a name="posix_data_source" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSource"></a>

```python
posix_data_source: GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference">GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference</a>

---

##### `transfer_options`<sup>Required</sup> <a name="transfer_options" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.transferOptions"></a>

```python
transfer_options: GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference">GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference</a>

---

##### `aws_s3_data_source_input`<sup>Optional</sup> <a name="aws_s3_data_source_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.awsS3DataSourceInput"></a>

```python
aws_s3_data_source_input: GoogleStorageTransferJobTransferSpecAwsS3DataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAwsS3DataSource">GoogleStorageTransferJobTransferSpecAwsS3DataSource</a>

---

##### `azure_blob_storage_data_source_input`<sup>Optional</sup> <a name="azure_blob_storage_data_source_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.azureBlobStorageDataSourceInput"></a>

```python
azure_blob_storage_data_source_input: GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource">GoogleStorageTransferJobTransferSpecAzureBlobStorageDataSource</a>

---

##### `gcs_data_sink_input`<sup>Optional</sup> <a name="gcs_data_sink_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSinkInput"></a>

```python
gcs_data_sink_input: GoogleStorageTransferJobTransferSpecGcsDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSink">GoogleStorageTransferJobTransferSpecGcsDataSink</a>

---

##### `gcs_data_source_input`<sup>Optional</sup> <a name="gcs_data_source_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.gcsDataSourceInput"></a>

```python
gcs_data_source_input: GoogleStorageTransferJobTransferSpecGcsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecGcsDataSource">GoogleStorageTransferJobTransferSpecGcsDataSource</a>

---

##### `hdfs_data_source_input`<sup>Optional</sup> <a name="hdfs_data_source_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.hdfsDataSourceInput"></a>

```python
hdfs_data_source_input: GoogleStorageTransferJobTransferSpecHdfsDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHdfsDataSource">GoogleStorageTransferJobTransferSpecHdfsDataSource</a>

---

##### `http_data_source_input`<sup>Optional</sup> <a name="http_data_source_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.httpDataSourceInput"></a>

```python
http_data_source_input: GoogleStorageTransferJobTransferSpecHttpDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecHttpDataSource">GoogleStorageTransferJobTransferSpecHttpDataSource</a>

---

##### `object_conditions_input`<sup>Optional</sup> <a name="object_conditions_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.objectConditionsInput"></a>

```python
object_conditions_input: GoogleStorageTransferJobTransferSpecObjectConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecObjectConditions">GoogleStorageTransferJobTransferSpecObjectConditions</a>

---

##### `posix_data_sink_input`<sup>Optional</sup> <a name="posix_data_sink_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSinkInput"></a>

```python
posix_data_sink_input: GoogleStorageTransferJobTransferSpecPosixDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a>

---

##### `posix_data_source_input`<sup>Optional</sup> <a name="posix_data_source_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.posixDataSourceInput"></a>

```python
posix_data_source_input: GoogleStorageTransferJobTransferSpecPosixDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a>

---

##### `sink_agent_pool_name_input`<sup>Optional</sup> <a name="sink_agent_pool_name_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolNameInput"></a>

```python
sink_agent_pool_name_input: str
```

- *Type:* str

---

##### `source_agent_pool_name_input`<sup>Optional</sup> <a name="source_agent_pool_name_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolNameInput"></a>

```python
source_agent_pool_name_input: str
```

- *Type:* str

---

##### `transfer_options_input`<sup>Optional</sup> <a name="transfer_options_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.transferOptionsInput"></a>

```python
transfer_options_input: GoogleStorageTransferJobTransferSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a>

---

##### `sink_agent_pool_name`<sup>Required</sup> <a name="sink_agent_pool_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sinkAgentPoolName"></a>

```python
sink_agent_pool_name: str
```

- *Type:* str

---

##### `source_agent_pool_name`<sup>Required</sup> <a name="source_agent_pool_name" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.sourceAgentPoolName"></a>

```python
source_agent_pool_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobTransferSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpec">GoogleStorageTransferJobTransferSpec</a>

---


### GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference <a name="GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectoryInput">root_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectory">root_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `root_directory_input`<sup>Optional</sup> <a name="root_directory_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectoryInput"></a>

```python
root_directory_input: str
```

- *Type:* str

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.rootDirectory"></a>

```python
root_directory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSinkOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobTransferSpecPosixDataSink
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSink">GoogleStorageTransferJobTransferSpecPosixDataSink</a>

---


### GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference <a name="GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectoryInput">root_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectory">root_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `root_directory_input`<sup>Optional</sup> <a name="root_directory_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectoryInput"></a>

```python
root_directory_input: str
```

- *Type:* str

---

##### `root_directory`<sup>Required</sup> <a name="root_directory" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.rootDirectory"></a>

```python
root_directory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSourceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobTransferSpecPosixDataSource
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecPosixDataSource">GoogleStorageTransferJobTransferSpecPosixDataSource</a>

---


### GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference <a name="GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_transfer_job

googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer">reset_delete_objects_from_source_after_transfer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink">reset_delete_objects_unique_in_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink">reset_overwrite_objects_already_existing_in_sink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteWhen">reset_overwrite_when</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_objects_from_source_after_transfer` <a name="reset_delete_objects_from_source_after_transfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsFromSourceAfterTransfer"></a>

```python
def reset_delete_objects_from_source_after_transfer() -> None
```

##### `reset_delete_objects_unique_in_sink` <a name="reset_delete_objects_unique_in_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetDeleteObjectsUniqueInSink"></a>

```python
def reset_delete_objects_unique_in_sink() -> None
```

##### `reset_overwrite_objects_already_existing_in_sink` <a name="reset_overwrite_objects_already_existing_in_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteObjectsAlreadyExistingInSink"></a>

```python
def reset_overwrite_objects_already_existing_in_sink() -> None
```

##### `reset_overwrite_when` <a name="reset_overwrite_when" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.resetOverwriteWhen"></a>

```python
def reset_overwrite_when() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput">delete_objects_from_source_after_transfer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput">delete_objects_unique_in_sink_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput">overwrite_objects_already_existing_in_sink_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhenInput">overwrite_when_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer">delete_objects_from_source_after_transfer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink">delete_objects_unique_in_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink">overwrite_objects_already_existing_in_sink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhen">overwrite_when</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_objects_from_source_after_transfer_input`<sup>Optional</sup> <a name="delete_objects_from_source_after_transfer_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransferInput"></a>

```python
delete_objects_from_source_after_transfer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_objects_unique_in_sink_input`<sup>Optional</sup> <a name="delete_objects_unique_in_sink_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSinkInput"></a>

```python
delete_objects_unique_in_sink_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `overwrite_objects_already_existing_in_sink_input`<sup>Optional</sup> <a name="overwrite_objects_already_existing_in_sink_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSinkInput"></a>

```python
overwrite_objects_already_existing_in_sink_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `overwrite_when_input`<sup>Optional</sup> <a name="overwrite_when_input" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhenInput"></a>

```python
overwrite_when_input: str
```

- *Type:* str

---

##### `delete_objects_from_source_after_transfer`<sup>Required</sup> <a name="delete_objects_from_source_after_transfer" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsFromSourceAfterTransfer"></a>

```python
delete_objects_from_source_after_transfer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_objects_unique_in_sink`<sup>Required</sup> <a name="delete_objects_unique_in_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.deleteObjectsUniqueInSink"></a>

```python
delete_objects_unique_in_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `overwrite_objects_already_existing_in_sink`<sup>Required</sup> <a name="overwrite_objects_already_existing_in_sink" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteObjectsAlreadyExistingInSink"></a>

```python
overwrite_objects_already_existing_in_sink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `overwrite_when`<sup>Required</sup> <a name="overwrite_when" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.overwriteWhen"></a>

```python
overwrite_when: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageTransferJobTransferSpecTransferOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageTransferJob.GoogleStorageTransferJobTransferSpecTransferOptions">GoogleStorageTransferJobTransferSpecTransferOptions</a>

---



