# `googlePubsubLiteTopic` Submodule <a name="`googlePubsubLiteTopic` Submodule" id="@cdktf/provider-google-beta.googlePubsubLiteTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePubsubLiteTopic <a name="GooglePubsubLiteTopic" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic google_pubsub_lite_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_lite_topic

googlePubsubLiteTopic.GooglePubsubLiteTopic(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  partition_config: GooglePubsubLiteTopicPartitionConfig = None,
  project: str = None,
  region: str = None,
  reservation_config: GooglePubsubLiteTopicReservationConfig = None,
  retention_config: GooglePubsubLiteTopicRetentionConfig = None,
  timeouts: GooglePubsubLiteTopicTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the topic. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#id GooglePubsubLiteTopic#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.partitionConfig">partition_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a></code> | partition_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#project GooglePubsubLiteTopic#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the pubsub lite topic. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.reservationConfig">reservation_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a></code> | reservation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.retentionConfig">retention_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a></code> | retention_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.zone">zone</a></code> | <code>str</code> | The zone of the pubsub lite topic. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.name"></a>

- *Type:* str

Name of the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#name GooglePubsubLiteTopic#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#id GooglePubsubLiteTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partition_config`<sup>Optional</sup> <a name="partition_config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.partitionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a>

partition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#partition_config GooglePubsubLiteTopic#partition_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#project GooglePubsubLiteTopic#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.region"></a>

- *Type:* str

The region of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#region GooglePubsubLiteTopic#region}

---

##### `reservation_config`<sup>Optional</sup> <a name="reservation_config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.reservationConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a>

reservation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#reservation_config GooglePubsubLiteTopic#reservation_config}

---

##### `retention_config`<sup>Optional</sup> <a name="retention_config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.retentionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a>

retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#retention_config GooglePubsubLiteTopic#retention_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#timeouts GooglePubsubLiteTopic#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.zone"></a>

- *Type:* str

The zone of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#zone GooglePubsubLiteTopic#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putPartitionConfig">put_partition_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putReservationConfig">put_reservation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putRetentionConfig">put_retention_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetPartitionConfig">reset_partition_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetReservationConfig">reset_reservation_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetRetentionConfig">reset_retention_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_partition_config` <a name="put_partition_config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putPartitionConfig"></a>

```python
def put_partition_config(
  count: typing.Union[int, float],
  capacity: GooglePubsubLiteTopicPartitionConfigCapacity = None
) -> None
```

###### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putPartitionConfig.parameter.count"></a>

- *Type:* typing.Union[int, float]

The number of partitions in the topic. Must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#count GooglePubsubLiteTopic#count}

---

###### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putPartitionConfig.parameter.capacity"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#capacity GooglePubsubLiteTopic#capacity}

---

##### `put_reservation_config` <a name="put_reservation_config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putReservationConfig"></a>

```python
def put_reservation_config(
  throughput_reservation: str = None
) -> None
```

###### `throughput_reservation`<sup>Optional</sup> <a name="throughput_reservation" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putReservationConfig.parameter.throughputReservation"></a>

- *Type:* str

The Reservation to use for this topic's throughput capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#throughput_reservation GooglePubsubLiteTopic#throughput_reservation}

---

##### `put_retention_config` <a name="put_retention_config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putRetentionConfig"></a>

```python
def put_retention_config(
  per_partition_bytes: str,
  period: str = None
) -> None
```

###### `per_partition_bytes`<sup>Required</sup> <a name="per_partition_bytes" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putRetentionConfig.parameter.perPartitionBytes"></a>

- *Type:* str

The provisioned storage, in bytes, per partition.

If the number of bytes stored
in any of the topic's partitions grows beyond this value, older messages will be
dropped to make room for newer ones, regardless of the value of period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#per_partition_bytes GooglePubsubLiteTopic#per_partition_bytes}

---

###### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putRetentionConfig.parameter.period"></a>

- *Type:* str

How long a published message is retained.

If unset, messages will be retained as
long as the bytes retained for each partition is below perPartitionBytes. A
duration in seconds with up to nine fractional digits, terminated by 's'.
Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#period GooglePubsubLiteTopic#period}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#create GooglePubsubLiteTopic#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#delete GooglePubsubLiteTopic#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#update GooglePubsubLiteTopic#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_partition_config` <a name="reset_partition_config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetPartitionConfig"></a>

```python
def reset_partition_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_reservation_config` <a name="reset_reservation_config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetReservationConfig"></a>

```python
def reset_reservation_config() -> None
```

##### `reset_retention_config` <a name="reset_retention_config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetRetentionConfig"></a>

```python
def reset_retention_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GooglePubsubLiteTopic resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_lite_topic

googlePubsubLiteTopic.GooglePubsubLiteTopic.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_lite_topic

googlePubsubLiteTopic.GooglePubsubLiteTopic.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_lite_topic

googlePubsubLiteTopic.GooglePubsubLiteTopic.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_lite_topic

googlePubsubLiteTopic.GooglePubsubLiteTopic.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GooglePubsubLiteTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GooglePubsubLiteTopic to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GooglePubsubLiteTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GooglePubsubLiteTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.partitionConfig">partition_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference">GooglePubsubLiteTopicPartitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.reservationConfig">reservation_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference">GooglePubsubLiteTopicReservationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.retentionConfig">retention_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference">GooglePubsubLiteTopicRetentionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference">GooglePubsubLiteTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.partitionConfigInput">partition_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.reservationConfigInput">reservation_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.retentionConfigInput">retention_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `partition_config`<sup>Required</sup> <a name="partition_config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.partitionConfig"></a>

```python
partition_config: GooglePubsubLiteTopicPartitionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference">GooglePubsubLiteTopicPartitionConfigOutputReference</a>

---

##### `reservation_config`<sup>Required</sup> <a name="reservation_config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.reservationConfig"></a>

```python
reservation_config: GooglePubsubLiteTopicReservationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference">GooglePubsubLiteTopicReservationConfigOutputReference</a>

---

##### `retention_config`<sup>Required</sup> <a name="retention_config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.retentionConfig"></a>

```python
retention_config: GooglePubsubLiteTopicRetentionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference">GooglePubsubLiteTopicRetentionConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.timeouts"></a>

```python
timeouts: GooglePubsubLiteTopicTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference">GooglePubsubLiteTopicTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partition_config_input`<sup>Optional</sup> <a name="partition_config_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.partitionConfigInput"></a>

```python
partition_config_input: GooglePubsubLiteTopicPartitionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `reservation_config_input`<sup>Optional</sup> <a name="reservation_config_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.reservationConfigInput"></a>

```python
reservation_config_input: GooglePubsubLiteTopicReservationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a>

---

##### `retention_config_input`<sup>Optional</sup> <a name="retention_config_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.retentionConfigInput"></a>

```python
retention_config_input: GooglePubsubLiteTopicRetentionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GooglePubsubLiteTopicTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a>]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePubsubLiteTopicConfig <a name="GooglePubsubLiteTopicConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_lite_topic

googlePubsubLiteTopic.GooglePubsubLiteTopicConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  partition_config: GooglePubsubLiteTopicPartitionConfig = None,
  project: str = None,
  region: str = None,
  reservation_config: GooglePubsubLiteTopicReservationConfig = None,
  retention_config: GooglePubsubLiteTopicRetentionConfig = None,
  timeouts: GooglePubsubLiteTopicTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.name">name</a></code> | <code>str</code> | Name of the topic. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#id GooglePubsubLiteTopic#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.partitionConfig">partition_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a></code> | partition_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#project GooglePubsubLiteTopic#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.region">region</a></code> | <code>str</code> | The region of the pubsub lite topic. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.reservationConfig">reservation_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a></code> | reservation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.retentionConfig">retention_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a></code> | retention_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.zone">zone</a></code> | <code>str</code> | The zone of the pubsub lite topic. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#name GooglePubsubLiteTopic#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#id GooglePubsubLiteTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partition_config`<sup>Optional</sup> <a name="partition_config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.partitionConfig"></a>

```python
partition_config: GooglePubsubLiteTopicPartitionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a>

partition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#partition_config GooglePubsubLiteTopic#partition_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#project GooglePubsubLiteTopic#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#region GooglePubsubLiteTopic#region}

---

##### `reservation_config`<sup>Optional</sup> <a name="reservation_config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.reservationConfig"></a>

```python
reservation_config: GooglePubsubLiteTopicReservationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a>

reservation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#reservation_config GooglePubsubLiteTopic#reservation_config}

---

##### `retention_config`<sup>Optional</sup> <a name="retention_config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.retentionConfig"></a>

```python
retention_config: GooglePubsubLiteTopicRetentionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a>

retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#retention_config GooglePubsubLiteTopic#retention_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.timeouts"></a>

```python
timeouts: GooglePubsubLiteTopicTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#timeouts GooglePubsubLiteTopic#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

The zone of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#zone GooglePubsubLiteTopic#zone}

---

### GooglePubsubLiteTopicPartitionConfig <a name="GooglePubsubLiteTopicPartitionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_lite_topic

googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig(
  count: typing.Union[int, float],
  capacity: GooglePubsubLiteTopicPartitionConfigCapacity = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | The number of partitions in the topic. Must be at least 1. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a></code> | capacity block. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of partitions in the topic. Must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#count GooglePubsubLiteTopic#count}

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig.property.capacity"></a>

```python
capacity: GooglePubsubLiteTopicPartitionConfigCapacity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#capacity GooglePubsubLiteTopic#capacity}

---

### GooglePubsubLiteTopicPartitionConfigCapacity <a name="GooglePubsubLiteTopicPartitionConfigCapacity" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_lite_topic

googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity(
  publish_mib_per_sec: typing.Union[int, float],
  subscribe_mib_per_sec: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity.property.publishMibPerSec">publish_mib_per_sec</a></code> | <code>typing.Union[int, float]</code> | Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity.property.subscribeMibPerSec">subscribe_mib_per_sec</a></code> | <code>typing.Union[int, float]</code> | Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16. |

---

##### `publish_mib_per_sec`<sup>Required</sup> <a name="publish_mib_per_sec" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity.property.publishMibPerSec"></a>

```python
publish_mib_per_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#publish_mib_per_sec GooglePubsubLiteTopic#publish_mib_per_sec}

---

##### `subscribe_mib_per_sec`<sup>Required</sup> <a name="subscribe_mib_per_sec" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity.property.subscribeMibPerSec"></a>

```python
subscribe_mib_per_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#subscribe_mib_per_sec GooglePubsubLiteTopic#subscribe_mib_per_sec}

---

### GooglePubsubLiteTopicReservationConfig <a name="GooglePubsubLiteTopicReservationConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_lite_topic

googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig(
  throughput_reservation: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig.property.throughputReservation">throughput_reservation</a></code> | <code>str</code> | The Reservation to use for this topic's throughput capacity. |

---

##### `throughput_reservation`<sup>Optional</sup> <a name="throughput_reservation" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig.property.throughputReservation"></a>

```python
throughput_reservation: str
```

- *Type:* str

The Reservation to use for this topic's throughput capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#throughput_reservation GooglePubsubLiteTopic#throughput_reservation}

---

### GooglePubsubLiteTopicRetentionConfig <a name="GooglePubsubLiteTopicRetentionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_lite_topic

googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig(
  per_partition_bytes: str,
  period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig.property.perPartitionBytes">per_partition_bytes</a></code> | <code>str</code> | The provisioned storage, in bytes, per partition. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig.property.period">period</a></code> | <code>str</code> | How long a published message is retained. |

---

##### `per_partition_bytes`<sup>Required</sup> <a name="per_partition_bytes" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig.property.perPartitionBytes"></a>

```python
per_partition_bytes: str
```

- *Type:* str

The provisioned storage, in bytes, per partition.

If the number of bytes stored
in any of the topic's partitions grows beyond this value, older messages will be
dropped to make room for newer ones, regardless of the value of period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#per_partition_bytes GooglePubsubLiteTopic#per_partition_bytes}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig.property.period"></a>

```python
period: str
```

- *Type:* str

How long a published message is retained.

If unset, messages will be retained as
long as the bytes retained for each partition is below perPartitionBytes. A
duration in seconds with up to nine fractional digits, terminated by 's'.
Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#period GooglePubsubLiteTopic#period}

---

### GooglePubsubLiteTopicTimeouts <a name="GooglePubsubLiteTopicTimeouts" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_lite_topic

googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#create GooglePubsubLiteTopic#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#delete GooglePubsubLiteTopic#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#update GooglePubsubLiteTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#create GooglePubsubLiteTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#delete GooglePubsubLiteTopic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#update GooglePubsubLiteTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePubsubLiteTopicPartitionConfigCapacityOutputReference <a name="GooglePubsubLiteTopicPartitionConfigCapacityOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_lite_topic

googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSecInput">publish_mib_per_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSecInput">subscribe_mib_per_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSec">publish_mib_per_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSec">subscribe_mib_per_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `publish_mib_per_sec_input`<sup>Optional</sup> <a name="publish_mib_per_sec_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSecInput"></a>

```python
publish_mib_per_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subscribe_mib_per_sec_input`<sup>Optional</sup> <a name="subscribe_mib_per_sec_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSecInput"></a>

```python
subscribe_mib_per_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publish_mib_per_sec`<sup>Required</sup> <a name="publish_mib_per_sec" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSec"></a>

```python
publish_mib_per_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subscribe_mib_per_sec`<sup>Required</sup> <a name="subscribe_mib_per_sec" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSec"></a>

```python
subscribe_mib_per_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.internalValue"></a>

```python
internal_value: GooglePubsubLiteTopicPartitionConfigCapacity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a>

---


### GooglePubsubLiteTopicPartitionConfigOutputReference <a name="GooglePubsubLiteTopicPartitionConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_lite_topic

googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.putCapacity">put_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.resetCapacity">reset_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_capacity` <a name="put_capacity" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.putCapacity"></a>

```python
def put_capacity(
  publish_mib_per_sec: typing.Union[int, float],
  subscribe_mib_per_sec: typing.Union[int, float]
) -> None
```

###### `publish_mib_per_sec`<sup>Required</sup> <a name="publish_mib_per_sec" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.putCapacity.parameter.publishMibPerSec"></a>

- *Type:* typing.Union[int, float]

Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#publish_mib_per_sec GooglePubsubLiteTopic#publish_mib_per_sec}

---

###### `subscribe_mib_per_sec`<sup>Required</sup> <a name="subscribe_mib_per_sec" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.putCapacity.parameter.subscribeMibPerSec"></a>

- *Type:* typing.Union[int, float]

Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_pubsub_lite_topic#subscribe_mib_per_sec GooglePubsubLiteTopic#subscribe_mib_per_sec}

---

##### `reset_capacity` <a name="reset_capacity" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.resetCapacity"></a>

```python
def reset_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference">GooglePubsubLiteTopicPartitionConfigCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.capacityInput">capacity_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.capacity"></a>

```python
capacity: GooglePubsubLiteTopicPartitionConfigCapacityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference">GooglePubsubLiteTopicPartitionConfigCapacityOutputReference</a>

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.capacityInput"></a>

```python
capacity_input: GooglePubsubLiteTopicPartitionConfigCapacity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a>

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GooglePubsubLiteTopicPartitionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a>

---


### GooglePubsubLiteTopicReservationConfigOutputReference <a name="GooglePubsubLiteTopicReservationConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_lite_topic

googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.resetThroughputReservation">reset_throughput_reservation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_throughput_reservation` <a name="reset_throughput_reservation" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.resetThroughputReservation"></a>

```python
def reset_throughput_reservation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.throughputReservationInput">throughput_reservation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.throughputReservation">throughput_reservation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `throughput_reservation_input`<sup>Optional</sup> <a name="throughput_reservation_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.throughputReservationInput"></a>

```python
throughput_reservation_input: str
```

- *Type:* str

---

##### `throughput_reservation`<sup>Required</sup> <a name="throughput_reservation" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.throughputReservation"></a>

```python
throughput_reservation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GooglePubsubLiteTopicReservationConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a>

---


### GooglePubsubLiteTopicRetentionConfigOutputReference <a name="GooglePubsubLiteTopicRetentionConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_lite_topic

googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.resetPeriod">reset_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_period` <a name="reset_period" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytesInput">per_partition_bytes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytes">per_partition_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `per_partition_bytes_input`<sup>Optional</sup> <a name="per_partition_bytes_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytesInput"></a>

```python
per_partition_bytes_input: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `per_partition_bytes`<sup>Required</sup> <a name="per_partition_bytes" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytes"></a>

```python
per_partition_bytes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GooglePubsubLiteTopicRetentionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a>

---


### GooglePubsubLiteTopicTimeoutsOutputReference <a name="GooglePubsubLiteTopicTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_pubsub_lite_topic

googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GooglePubsubLiteTopicTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a>]

---



