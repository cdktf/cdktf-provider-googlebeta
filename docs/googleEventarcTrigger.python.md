# `googleEventarcTrigger` Submodule <a name="`googleEventarcTrigger` Submodule" id="@cdktf/provider-google-beta.googleEventarcTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEventarcTrigger <a name="GoogleEventarcTrigger" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger google_eventarc_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTrigger(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: GoogleEventarcTriggerDestination,
  location: str,
  matching_criteria: typing.Union[IResolvable, typing.List[GoogleEventarcTriggerMatchingCriteria]],
  name: str,
  channel: str = None,
  event_data_content_type: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  service_account: str = None,
  timeouts: GoogleEventarcTriggerTimeouts = None,
  transport: GoogleEventarcTriggerTransport = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.destination">destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.matchingCriteria">matching_criteria</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>]]</code> | matching_criteria block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.name">name</a></code> | <code>str</code> | Required. The resource name of the trigger. Must be unique within the location on the project. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.channel">channel</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.eventDataContentType">event_data_content_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#id GoogleEventarcTrigger#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. User labels attached to the triggers that can be used to group resources. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.transport">transport</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a></code> | transport block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.destination"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#destination GoogleEventarcTrigger#destination}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#location GoogleEventarcTrigger#location}

---

##### `matching_criteria`<sup>Required</sup> <a name="matching_criteria" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.matchingCriteria"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>]]

matching_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#matching_criteria GoogleEventarcTrigger#matching_criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.name"></a>

- *Type:* str

Required. The resource name of the trigger. Must be unique within the location on the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#name GoogleEventarcTrigger#name}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.channel"></a>

- *Type:* str

Optional.

The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#channel GoogleEventarcTrigger#channel}

---

##### `event_data_content_type`<sup>Optional</sup> <a name="event_data_content_type" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.eventDataContentType"></a>

- *Type:* str

Optional.

EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#event_data_content_type GoogleEventarcTrigger#event_data_content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#id GoogleEventarcTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. User labels attached to the triggers that can be used to group resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#labels GoogleEventarcTrigger#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#project GoogleEventarcTrigger#project}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Optional.

The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#service_account GoogleEventarcTrigger#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#timeouts GoogleEventarcTrigger#timeouts}

---

##### `transport`<sup>Optional</sup> <a name="transport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.Initializer.parameter.transport"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

transport block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#transport GoogleEventarcTrigger#transport}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putMatchingCriteria">put_matching_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTransport">put_transport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetChannel">reset_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetEventDataContentType">reset_event_data_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetTransport">reset_transport</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination` <a name="put_destination" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putDestination"></a>

```python
def put_destination(
  cloud_run_service: GoogleEventarcTriggerDestinationCloudRunService = None,
  gke: GoogleEventarcTriggerDestinationGke = None,
  http_endpoint: GoogleEventarcTriggerDestinationHttpEndpoint = None,
  network_config: GoogleEventarcTriggerDestinationNetworkConfig = None,
  workflow: str = None
) -> None
```

###### `cloud_run_service`<sup>Optional</sup> <a name="cloud_run_service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putDestination.parameter.cloudRunService"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a>

cloud_run_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#cloud_run_service GoogleEventarcTrigger#cloud_run_service}

---

###### `gke`<sup>Optional</sup> <a name="gke" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putDestination.parameter.gke"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#gke GoogleEventarcTrigger#gke}

---

###### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putDestination.parameter.httpEndpoint"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a>

http_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#http_endpoint GoogleEventarcTrigger#http_endpoint}

---

###### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putDestination.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#network_config GoogleEventarcTrigger#network_config}

---

###### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putDestination.parameter.workflow"></a>

- *Type:* str

The resource name of the Workflow whose Executions are triggered by the events.

The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#workflow GoogleEventarcTrigger#workflow}

---

##### `put_matching_criteria` <a name="put_matching_criteria" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putMatchingCriteria"></a>

```python
def put_matching_criteria(
  value: typing.Union[IResolvable, typing.List[GoogleEventarcTriggerMatchingCriteria]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putMatchingCriteria.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#create GoogleEventarcTrigger#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#delete GoogleEventarcTrigger#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#update GoogleEventarcTrigger#update}.

---

##### `put_transport` <a name="put_transport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTransport"></a>

```python
def put_transport(
  pubsub: GoogleEventarcTriggerTransportPubsub = None
) -> None
```

###### `pubsub`<sup>Optional</sup> <a name="pubsub" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.putTransport.parameter.pubsub"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a>

pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#pubsub GoogleEventarcTrigger#pubsub}

---

##### `reset_channel` <a name="reset_channel" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetChannel"></a>

```python
def reset_channel() -> None
```

##### `reset_event_data_content_type` <a name="reset_event_data_content_type" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetEventDataContentType"></a>

```python
def reset_event_data_content_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transport` <a name="reset_transport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.resetTransport"></a>

```python
def reset_transport() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleEventarcTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTrigger.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTrigger.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTrigger.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTrigger.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleEventarcTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleEventarcTrigger to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleEventarcTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEventarcTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.conditions">conditions</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference">GoogleEventarcTriggerDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.matchingCriteria">matching_criteria</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList">GoogleEventarcTriggerMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference">GoogleEventarcTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.transport">transport</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference">GoogleEventarcTriggerTransportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.destinationInput">destination_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.eventDataContentTypeInput">event_data_content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.matchingCriteriaInput">matching_criteria_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.transportInput">transport_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.eventDataContentType">event_data_content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.conditions"></a>

```python
conditions: StringMap
```

- *Type:* cdktf.StringMap

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.destination"></a>

```python
destination: GoogleEventarcTriggerDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference">GoogleEventarcTriggerDestinationOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `matching_criteria`<sup>Required</sup> <a name="matching_criteria" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.matchingCriteria"></a>

```python
matching_criteria: GoogleEventarcTriggerMatchingCriteriaList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList">GoogleEventarcTriggerMatchingCriteriaList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.timeouts"></a>

```python
timeouts: GoogleEventarcTriggerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference">GoogleEventarcTriggerTimeoutsOutputReference</a>

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.transport"></a>

```python
transport: GoogleEventarcTriggerTransportOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference">GoogleEventarcTriggerTransportOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.destinationInput"></a>

```python
destination_input: GoogleEventarcTriggerDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

---

##### `event_data_content_type_input`<sup>Optional</sup> <a name="event_data_content_type_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.eventDataContentTypeInput"></a>

```python
event_data_content_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `matching_criteria_input`<sup>Optional</sup> <a name="matching_criteria_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.matchingCriteriaInput"></a>

```python
matching_criteria_input: typing.Union[IResolvable, typing.List[GoogleEventarcTriggerMatchingCriteria]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleEventarcTriggerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>]

---

##### `transport_input`<sup>Optional</sup> <a name="transport_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.transportInput"></a>

```python
transport_input: GoogleEventarcTriggerTransport
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `event_data_content_type`<sup>Required</sup> <a name="event_data_content_type" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.eventDataContentType"></a>

```python
event_data_content_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTrigger.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEventarcTriggerConfig <a name="GoogleEventarcTriggerConfig" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: GoogleEventarcTriggerDestination,
  location: str,
  matching_criteria: typing.Union[IResolvable, typing.List[GoogleEventarcTriggerMatchingCriteria]],
  name: str,
  channel: str = None,
  event_data_content_type: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  service_account: str = None,
  timeouts: GoogleEventarcTriggerTimeouts = None,
  transport: GoogleEventarcTriggerTransport = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.matchingCriteria">matching_criteria</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>]]</code> | matching_criteria block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.name">name</a></code> | <code>str</code> | Required. The resource name of the trigger. Must be unique within the location on the project. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.channel">channel</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.eventDataContentType">event_data_content_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#id GoogleEventarcTrigger#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. User labels attached to the triggers that can be used to group resources. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.transport">transport</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a></code> | transport block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.destination"></a>

```python
destination: GoogleEventarcTriggerDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#destination GoogleEventarcTrigger#destination}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#location GoogleEventarcTrigger#location}

---

##### `matching_criteria`<sup>Required</sup> <a name="matching_criteria" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.matchingCriteria"></a>

```python
matching_criteria: typing.Union[IResolvable, typing.List[GoogleEventarcTriggerMatchingCriteria]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>]]

matching_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#matching_criteria GoogleEventarcTrigger#matching_criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Required. The resource name of the trigger. Must be unique within the location on the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#name GoogleEventarcTrigger#name}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.channel"></a>

```python
channel: str
```

- *Type:* str

Optional.

The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#channel GoogleEventarcTrigger#channel}

---

##### `event_data_content_type`<sup>Optional</sup> <a name="event_data_content_type" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.eventDataContentType"></a>

```python
event_data_content_type: str
```

- *Type:* str

Optional.

EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#event_data_content_type GoogleEventarcTrigger#event_data_content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#id GoogleEventarcTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. User labels attached to the triggers that can be used to group resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#labels GoogleEventarcTrigger#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#project GoogleEventarcTrigger#project}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Optional.

The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#service_account GoogleEventarcTrigger#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.timeouts"></a>

```python
timeouts: GoogleEventarcTriggerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#timeouts GoogleEventarcTrigger#timeouts}

---

##### `transport`<sup>Optional</sup> <a name="transport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerConfig.property.transport"></a>

```python
transport: GoogleEventarcTriggerTransport
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

transport block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#transport GoogleEventarcTrigger#transport}

---

### GoogleEventarcTriggerDestination <a name="GoogleEventarcTriggerDestination" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerDestination(
  cloud_run_service: GoogleEventarcTriggerDestinationCloudRunService = None,
  gke: GoogleEventarcTriggerDestinationGke = None,
  http_endpoint: GoogleEventarcTriggerDestinationHttpEndpoint = None,
  network_config: GoogleEventarcTriggerDestinationNetworkConfig = None,
  workflow: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.cloudRunService">cloud_run_service</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a></code> | cloud_run_service block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.gke">gke</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a></code> | gke block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.httpEndpoint">http_endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a></code> | http_endpoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.workflow">workflow</a></code> | <code>str</code> | The resource name of the Workflow whose Executions are triggered by the events. |

---

##### `cloud_run_service`<sup>Optional</sup> <a name="cloud_run_service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.cloudRunService"></a>

```python
cloud_run_service: GoogleEventarcTriggerDestinationCloudRunService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a>

cloud_run_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#cloud_run_service GoogleEventarcTrigger#cloud_run_service}

---

##### `gke`<sup>Optional</sup> <a name="gke" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.gke"></a>

```python
gke: GoogleEventarcTriggerDestinationGke
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#gke GoogleEventarcTrigger#gke}

---

##### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.httpEndpoint"></a>

```python
http_endpoint: GoogleEventarcTriggerDestinationHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a>

http_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#http_endpoint GoogleEventarcTrigger#http_endpoint}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.networkConfig"></a>

```python
network_config: GoogleEventarcTriggerDestinationNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#network_config GoogleEventarcTrigger#network_config}

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination.property.workflow"></a>

```python
workflow: str
```

- *Type:* str

The resource name of the Workflow whose Executions are triggered by the events.

The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#workflow GoogleEventarcTrigger#workflow}

---

### GoogleEventarcTriggerDestinationCloudRunService <a name="GoogleEventarcTriggerDestinationCloudRunService" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService(
  service: str,
  path: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.service">service</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.path">path</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.region">region</a></code> | <code>str</code> | Required. The region the Cloud Run service is deployed in. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.service"></a>

```python
service: str
```

- *Type:* str

Required.

The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#service GoogleEventarcTrigger#service}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.path"></a>

```python
path: str
```

- *Type:* str

Optional.

The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#path GoogleEventarcTrigger#path}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService.property.region"></a>

```python
region: str
```

- *Type:* str

Required. The region the Cloud Run service is deployed in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#region GoogleEventarcTrigger#region}

---

### GoogleEventarcTriggerDestinationGke <a name="GoogleEventarcTriggerDestinationGke" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerDestinationGke(
  cluster: str,
  location: str,
  namespace: str,
  service: str,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.cluster">cluster</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.location">location</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.namespace">namespace</a></code> | <code>str</code> | Required. The namespace the GKE service is running in. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.service">service</a></code> | <code>str</code> | Required. Name of the GKE service. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.path">path</a></code> | <code>str</code> | Optional. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

Required.

The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#cluster GoogleEventarcTrigger#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.location"></a>

```python
location: str
```

- *Type:* str

Required.

The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#location GoogleEventarcTrigger#location}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Required. The namespace the GKE service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#namespace GoogleEventarcTrigger#namespace}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.service"></a>

```python
service: str
```

- *Type:* str

Required. Name of the GKE service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#service GoogleEventarcTrigger#service}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke.property.path"></a>

```python
path: str
```

- *Type:* str

Optional.

The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#path GoogleEventarcTrigger#path}

---

### GoogleEventarcTriggerDestinationHttpEndpoint <a name="GoogleEventarcTriggerDestinationHttpEndpoint" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint(
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint.property.uri">uri</a></code> | <code>str</code> | Required. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint.property.uri"></a>

```python
uri: str
```

- *Type:* str

Required.

The URI of the HTTP enpdoint. The value must be a RFC2396 URI string. Examples: `http://10.10.10.8:80/route`, `http://svc.us-central1.p.local:8080/`. Only HTTP and HTTPS protocols are supported. The host can be either a static IP addressable from the VPC specified by the network config, or an internal DNS hostname of the service resolvable via Cloud DNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#uri GoogleEventarcTrigger#uri}

---

### GoogleEventarcTriggerDestinationNetworkConfig <a name="GoogleEventarcTriggerDestinationNetworkConfig" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig(
  network_attachment: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig.property.networkAttachment">network_attachment</a></code> | <code>str</code> | Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}`. |

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#network_attachment GoogleEventarcTrigger#network_attachment}

---

### GoogleEventarcTriggerMatchingCriteria <a name="GoogleEventarcTriggerMatchingCriteria" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria(
  attribute: str,
  value: str,
  operator: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.attribute">attribute</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.value">value</a></code> | <code>str</code> | Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.operator">operator</a></code> | <code>str</code> | Optional. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

Required.

The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. All triggers MUST provide a filter for the 'type' attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#attribute GoogleEventarcTrigger#attribute}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.value"></a>

```python
value: str
```

- *Type:* str

Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#value GoogleEventarcTrigger#value}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria.property.operator"></a>

```python
operator: str
```

- *Type:* str

Optional.

The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The only allowed value is `match-path-pattern`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#operator GoogleEventarcTrigger#operator}

---

### GoogleEventarcTriggerTimeouts <a name="GoogleEventarcTriggerTimeouts" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#create GoogleEventarcTrigger#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#delete GoogleEventarcTrigger#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#update GoogleEventarcTrigger#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#create GoogleEventarcTrigger#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#delete GoogleEventarcTrigger#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#update GoogleEventarcTrigger#update}.

---

### GoogleEventarcTriggerTransport <a name="GoogleEventarcTriggerTransport" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerTransport(
  pubsub: GoogleEventarcTriggerTransportPubsub = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport.property.pubsub">pubsub</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a></code> | pubsub block. |

---

##### `pubsub`<sup>Optional</sup> <a name="pubsub" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport.property.pubsub"></a>

```python
pubsub: GoogleEventarcTriggerTransportPubsub
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a>

pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#pubsub GoogleEventarcTrigger#pubsub}

---

### GoogleEventarcTriggerTransportPubsub <a name="GoogleEventarcTriggerTransportPubsub" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub(
  topic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub.property.topic">topic</a></code> | <code>str</code> | Optional. |

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub.property.topic"></a>

```python
topic: str
```

- *Type:* str

Optional.

The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}. You may set an existing topic for triggers of the type google.cloud.pubsub.topic.v1.messagePublished` only. The topic you provide here will not be deleted by Eventarc at trigger deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#topic GoogleEventarcTrigger#topic}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEventarcTriggerDestinationCloudRunServiceOutputReference <a name="GoogleEventarcTriggerDestinationCloudRunServiceOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcTriggerDestinationCloudRunService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a>

---


### GoogleEventarcTriggerDestinationGkeOutputReference <a name="GoogleEventarcTriggerDestinationGkeOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcTriggerDestinationGke
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a>

---


### GoogleEventarcTriggerDestinationHttpEndpointOutputReference <a name="GoogleEventarcTriggerDestinationHttpEndpointOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcTriggerDestinationHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a>

---


### GoogleEventarcTriggerDestinationNetworkConfigOutputReference <a name="GoogleEventarcTriggerDestinationNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachmentInput">network_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_attachment_input`<sup>Optional</sup> <a name="network_attachment_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```python
network_attachment_input: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcTriggerDestinationNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a>

---


### GoogleEventarcTriggerDestinationOutputReference <a name="GoogleEventarcTriggerDestinationOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putCloudRunService">put_cloud_run_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putGke">put_gke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putHttpEndpoint">put_http_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetCloudRunService">reset_cloud_run_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetGke">reset_gke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetHttpEndpoint">reset_http_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetWorkflow">reset_workflow</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_run_service` <a name="put_cloud_run_service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putCloudRunService"></a>

```python
def put_cloud_run_service(
  service: str,
  path: str = None,
  region: str = None
) -> None
```

###### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putCloudRunService.parameter.service"></a>

- *Type:* str

Required.

The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#service GoogleEventarcTrigger#service}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putCloudRunService.parameter.path"></a>

- *Type:* str

Optional.

The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#path GoogleEventarcTrigger#path}

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putCloudRunService.parameter.region"></a>

- *Type:* str

Required. The region the Cloud Run service is deployed in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#region GoogleEventarcTrigger#region}

---

##### `put_gke` <a name="put_gke" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putGke"></a>

```python
def put_gke(
  cluster: str,
  location: str,
  namespace: str,
  service: str,
  path: str = None
) -> None
```

###### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putGke.parameter.cluster"></a>

- *Type:* str

Required.

The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#cluster GoogleEventarcTrigger#cluster}

---

###### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putGke.parameter.location"></a>

- *Type:* str

Required.

The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#location GoogleEventarcTrigger#location}

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putGke.parameter.namespace"></a>

- *Type:* str

Required. The namespace the GKE service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#namespace GoogleEventarcTrigger#namespace}

---

###### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putGke.parameter.service"></a>

- *Type:* str

Required. Name of the GKE service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#service GoogleEventarcTrigger#service}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putGke.parameter.path"></a>

- *Type:* str

Optional.

The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#path GoogleEventarcTrigger#path}

---

##### `put_http_endpoint` <a name="put_http_endpoint" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putHttpEndpoint"></a>

```python
def put_http_endpoint(
  uri: str
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putHttpEndpoint.parameter.uri"></a>

- *Type:* str

Required.

The URI of the HTTP enpdoint. The value must be a RFC2396 URI string. Examples: `http://10.10.10.8:80/route`, `http://svc.us-central1.p.local:8080/`. Only HTTP and HTTPS protocols are supported. The host can be either a static IP addressable from the VPC specified by the network config, or an internal DNS hostname of the service resolvable via Cloud DNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#uri GoogleEventarcTrigger#uri}

---

##### `put_network_config` <a name="put_network_config" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putNetworkConfig"></a>

```python
def put_network_config(
  network_attachment: str
) -> None
```

###### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.putNetworkConfig.parameter.networkAttachment"></a>

- *Type:* str

Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#network_attachment GoogleEventarcTrigger#network_attachment}

---

##### `reset_cloud_run_service` <a name="reset_cloud_run_service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetCloudRunService"></a>

```python
def reset_cloud_run_service() -> None
```

##### `reset_gke` <a name="reset_gke" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetGke"></a>

```python
def reset_gke() -> None
```

##### `reset_http_endpoint` <a name="reset_http_endpoint" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetHttpEndpoint"></a>

```python
def reset_http_endpoint() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_workflow` <a name="reset_workflow" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.resetWorkflow"></a>

```python
def reset_workflow() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudFunction">cloud_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudRunService">cloud_run_service</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference">GoogleEventarcTriggerDestinationCloudRunServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.gke">gke</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference">GoogleEventarcTriggerDestinationGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.httpEndpoint">http_endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference">GoogleEventarcTriggerDestinationHttpEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference">GoogleEventarcTriggerDestinationNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudRunServiceInput">cloud_run_service_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.gkeInput">gke_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.httpEndpointInput">http_endpoint_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.networkConfigInput">network_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.workflowInput">workflow_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.workflow">workflow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_function`<sup>Required</sup> <a name="cloud_function" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudFunction"></a>

```python
cloud_function: str
```

- *Type:* str

---

##### `cloud_run_service`<sup>Required</sup> <a name="cloud_run_service" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudRunService"></a>

```python
cloud_run_service: GoogleEventarcTriggerDestinationCloudRunServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunServiceOutputReference">GoogleEventarcTriggerDestinationCloudRunServiceOutputReference</a>

---

##### `gke`<sup>Required</sup> <a name="gke" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.gke"></a>

```python
gke: GoogleEventarcTriggerDestinationGkeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGkeOutputReference">GoogleEventarcTriggerDestinationGkeOutputReference</a>

---

##### `http_endpoint`<sup>Required</sup> <a name="http_endpoint" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.httpEndpoint"></a>

```python
http_endpoint: GoogleEventarcTriggerDestinationHttpEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpointOutputReference">GoogleEventarcTriggerDestinationHttpEndpointOutputReference</a>

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.networkConfig"></a>

```python
network_config: GoogleEventarcTriggerDestinationNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfigOutputReference">GoogleEventarcTriggerDestinationNetworkConfigOutputReference</a>

---

##### `cloud_run_service_input`<sup>Optional</sup> <a name="cloud_run_service_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.cloudRunServiceInput"></a>

```python
cloud_run_service_input: GoogleEventarcTriggerDestinationCloudRunService
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationCloudRunService">GoogleEventarcTriggerDestinationCloudRunService</a>

---

##### `gke_input`<sup>Optional</sup> <a name="gke_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.gkeInput"></a>

```python
gke_input: GoogleEventarcTriggerDestinationGke
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationGke">GoogleEventarcTriggerDestinationGke</a>

---

##### `http_endpoint_input`<sup>Optional</sup> <a name="http_endpoint_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.httpEndpointInput"></a>

```python
http_endpoint_input: GoogleEventarcTriggerDestinationHttpEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationHttpEndpoint">GoogleEventarcTriggerDestinationHttpEndpoint</a>

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.networkConfigInput"></a>

```python
network_config_input: GoogleEventarcTriggerDestinationNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationNetworkConfig">GoogleEventarcTriggerDestinationNetworkConfig</a>

---

##### `workflow_input`<sup>Optional</sup> <a name="workflow_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.workflowInput"></a>

```python
workflow_input: str
```

- *Type:* str

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.workflow"></a>

```python
workflow: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestinationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcTriggerDestination
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerDestination">GoogleEventarcTriggerDestination</a>

---


### GoogleEventarcTriggerMatchingCriteriaList <a name="GoogleEventarcTriggerMatchingCriteriaList" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleEventarcTriggerMatchingCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleEventarcTriggerMatchingCriteria]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>]]

---


### GoogleEventarcTriggerMatchingCriteriaOutputReference <a name="GoogleEventarcTriggerMatchingCriteriaOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resetOperator">reset_operator</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.attributeInput">attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_input`<sup>Optional</sup> <a name="attribute_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.attributeInput"></a>

```python
attribute_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleEventarcTriggerMatchingCriteria]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerMatchingCriteria">GoogleEventarcTriggerMatchingCriteria</a>]

---


### GoogleEventarcTriggerTimeoutsOutputReference <a name="GoogleEventarcTriggerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleEventarcTriggerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTimeouts">GoogleEventarcTriggerTimeouts</a>]

---


### GoogleEventarcTriggerTransportOutputReference <a name="GoogleEventarcTriggerTransportOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.putPubsub">put_pubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resetPubsub">reset_pubsub</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_pubsub` <a name="put_pubsub" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.putPubsub"></a>

```python
def put_pubsub(
  topic: str = None
) -> None
```

###### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.putPubsub.parameter.topic"></a>

- *Type:* str

Optional.

The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}. You may set an existing topic for triggers of the type google.cloud.pubsub.topic.v1.messagePublished` only. The topic you provide here will not be deleted by Eventarc at trigger deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_eventarc_trigger#topic GoogleEventarcTrigger#topic}

---

##### `reset_pubsub` <a name="reset_pubsub" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.resetPubsub"></a>

```python
def reset_pubsub() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.pubsub">pubsub</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference">GoogleEventarcTriggerTransportPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.pubsubInput">pubsub_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pubsub`<sup>Required</sup> <a name="pubsub" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.pubsub"></a>

```python
pubsub: GoogleEventarcTriggerTransportPubsubOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference">GoogleEventarcTriggerTransportPubsubOutputReference</a>

---

##### `pubsub_input`<sup>Optional</sup> <a name="pubsub_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.pubsubInput"></a>

```python
pubsub_input: GoogleEventarcTriggerTransportPubsub
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcTriggerTransport
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransport">GoogleEventarcTriggerTransport</a>

---


### GoogleEventarcTriggerTransportPubsubOutputReference <a name="GoogleEventarcTriggerTransportPubsubOutputReference" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_eventarc_trigger

googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resetTopic">reset_topic</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_topic` <a name="reset_topic" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.resetTopic"></a>

```python
def reset_topic() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.subscription">subscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.subscription"></a>

```python
subscription: str
```

- *Type:* str

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsubOutputReference.property.internalValue"></a>

```python
internal_value: GoogleEventarcTriggerTransportPubsub
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEventarcTrigger.GoogleEventarcTriggerTransportPubsub">GoogleEventarcTriggerTransportPubsub</a>

---



