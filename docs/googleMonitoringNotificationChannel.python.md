# `googleMonitoringNotificationChannel` Submodule <a name="`googleMonitoringNotificationChannel` Submodule" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringNotificationChannel <a name="GoogleMonitoringNotificationChannel" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel google_monitoring_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_notification_channel

googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  type: str,
  description: str = None,
  display_name: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  force_delete: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  sensitive_labels: GoogleMonitoringNotificationChannelSensitiveLabels = None,
  timeouts: GoogleMonitoringNotificationChannelTimeouts = None,
  user_labels: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the notification channel. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional human-readable description of this notification channel. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | An optional human-readable name for this notification channel. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether notifications are forwarded to the described channel. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#id GoogleMonitoringNotificationChannel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Configuration fields that define the channel and its behavior. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#project GoogleMonitoringNotificationChannel#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.sensitiveLabels">sensitive_labels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a></code> | sensitive_labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.type"></a>

- *Type:* str

The type of the notification channel.

This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#type GoogleMonitoringNotificationChannel#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.description"></a>

- *Type:* str

An optional human-readable description of this notification channel.

This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#description GoogleMonitoringNotificationChannel#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.displayName"></a>

- *Type:* str

An optional human-readable name for this notification channel.

It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#display_name GoogleMonitoringNotificationChannel#display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether notifications are forwarded to the described channel.

This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#enabled GoogleMonitoringNotificationChannel#enabled}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.forceDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel).

If false, channels that are still
referenced by an existing alerting policy will fail to be
deleted in a delete operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#force_delete GoogleMonitoringNotificationChannel#force_delete}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#id GoogleMonitoringNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Configuration fields that define the channel and its behavior.

The
permissible and required labels are specified in the
NotificationChannelDescriptor corresponding to the type field.

Labels with sensitive data are obfuscated by the API and therefore Terraform cannot
determine if there are upstream changes to these fields. They can also be configured via
the sensitive_labels block, but cannot be configured in both places.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#labels GoogleMonitoringNotificationChannel#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#project GoogleMonitoringNotificationChannel#project}.

---

##### `sensitive_labels`<sup>Optional</sup> <a name="sensitive_labels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.sensitiveLabels"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a>

sensitive_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#sensitive_labels GoogleMonitoringNotificationChannel#sensitive_labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#timeouts GoogleMonitoringNotificationChannel#timeouts}

---

##### `user_labels`<sup>Optional</sup> <a name="user_labels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.Initializer.parameter.userLabels"></a>

- *Type:* typing.Mapping[str]

User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field.

This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#user_labels GoogleMonitoringNotificationChannel#user_labels}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putSensitiveLabels">put_sensitive_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetForceDelete">reset_force_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetSensitiveLabels">reset_sensitive_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetUserLabels">reset_user_labels</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_sensitive_labels` <a name="put_sensitive_labels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putSensitiveLabels"></a>

```python
def put_sensitive_labels(
  auth_token: str = None,
  password: str = None,
  service_key: str = None
) -> None
```

###### `auth_token`<sup>Optional</sup> <a name="auth_token" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putSensitiveLabels.parameter.authToken"></a>

- *Type:* str

An authorization token for a notification channel. Channel types that support this field include: slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#auth_token GoogleMonitoringNotificationChannel#auth_token}

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putSensitiveLabels.parameter.password"></a>

- *Type:* str

An password for a notification channel. Channel types that support this field include: webhook_basicauth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#password GoogleMonitoringNotificationChannel#password}

---

###### `service_key`<sup>Optional</sup> <a name="service_key" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putSensitiveLabels.parameter.serviceKey"></a>

- *Type:* str

An servicekey token for a notification channel. Channel types that support this field include: pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#service_key GoogleMonitoringNotificationChannel#service_key}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#create GoogleMonitoringNotificationChannel#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#delete GoogleMonitoringNotificationChannel#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#update GoogleMonitoringNotificationChannel#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_force_delete` <a name="reset_force_delete" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetForceDelete"></a>

```python
def reset_force_delete() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_sensitive_labels` <a name="reset_sensitive_labels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetSensitiveLabels"></a>

```python
def reset_sensitive_labels() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_labels` <a name="reset_user_labels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.resetUserLabels"></a>

```python
def reset_user_labels() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleMonitoringNotificationChannel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_notification_channel

googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_notification_channel

googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_notification_channel

googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_notification_channel

googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleMonitoringNotificationChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleMonitoringNotificationChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleMonitoringNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMonitoringNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.sensitiveLabels">sensitive_labels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference">GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference">GoogleMonitoringNotificationChannelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.verificationStatus">verification_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forceDeleteInput">force_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.sensitiveLabelsInput">sensitive_labels_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.userLabelsInput">user_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sensitive_labels`<sup>Required</sup> <a name="sensitive_labels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.sensitiveLabels"></a>

```python
sensitive_labels: GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference">GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.timeouts"></a>

```python
timeouts: GoogleMonitoringNotificationChannelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference">GoogleMonitoringNotificationChannelTimeoutsOutputReference</a>

---

##### `verification_status`<sup>Required</sup> <a name="verification_status" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.verificationStatus"></a>

```python
verification_status: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_delete_input`<sup>Optional</sup> <a name="force_delete_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forceDeleteInput"></a>

```python
force_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `sensitive_labels_input`<sup>Optional</sup> <a name="sensitive_labels_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.sensitiveLabelsInput"></a>

```python
sensitive_labels_input: GoogleMonitoringNotificationChannelSensitiveLabels
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleMonitoringNotificationChannelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_labels_input`<sup>Optional</sup> <a name="user_labels_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.userLabelsInput"></a>

```python
user_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_delete`<sup>Required</sup> <a name="force_delete" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_labels`<sup>Required</sup> <a name="user_labels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.userLabels"></a>

```python
user_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringNotificationChannelConfig <a name="GoogleMonitoringNotificationChannelConfig" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_notification_channel

googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  type: str,
  description: str = None,
  display_name: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  force_delete: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  sensitive_labels: GoogleMonitoringNotificationChannelSensitiveLabels = None,
  timeouts: GoogleMonitoringNotificationChannelTimeouts = None,
  user_labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.type">type</a></code> | <code>str</code> | The type of the notification channel. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.description">description</a></code> | <code>str</code> | An optional human-readable description of this notification channel. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.displayName">display_name</a></code> | <code>str</code> | An optional human-readable name for this notification channel. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether notifications are forwarded to the described channel. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#id GoogleMonitoringNotificationChannel#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Configuration fields that define the channel and its behavior. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#project GoogleMonitoringNotificationChannel#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.sensitiveLabels">sensitive_labels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a></code> | sensitive_labels block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the notification channel.

This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#type GoogleMonitoringNotificationChannel#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional human-readable description of this notification channel.

This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#description GoogleMonitoringNotificationChannel#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

An optional human-readable name for this notification channel.

It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#display_name GoogleMonitoringNotificationChannel#display_name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether notifications are forwarded to the described channel.

This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#enabled GoogleMonitoringNotificationChannel#enabled}

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the notification channel will be deleted regardless of its use in alert policies (the policies will be updated to remove the channel).

If false, channels that are still
referenced by an existing alerting policy will fail to be
deleted in a delete operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#force_delete GoogleMonitoringNotificationChannel#force_delete}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#id GoogleMonitoringNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Configuration fields that define the channel and its behavior.

The
permissible and required labels are specified in the
NotificationChannelDescriptor corresponding to the type field.

Labels with sensitive data are obfuscated by the API and therefore Terraform cannot
determine if there are upstream changes to these fields. They can also be configured via
the sensitive_labels block, but cannot be configured in both places.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#labels GoogleMonitoringNotificationChannel#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#project GoogleMonitoringNotificationChannel#project}.

---

##### `sensitive_labels`<sup>Optional</sup> <a name="sensitive_labels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.sensitiveLabels"></a>

```python
sensitive_labels: GoogleMonitoringNotificationChannelSensitiveLabels
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a>

sensitive_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#sensitive_labels GoogleMonitoringNotificationChannel#sensitive_labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.timeouts"></a>

```python
timeouts: GoogleMonitoringNotificationChannelTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#timeouts GoogleMonitoringNotificationChannel#timeouts}

---

##### `user_labels`<sup>Optional</sup> <a name="user_labels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelConfig.property.userLabels"></a>

```python
user_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field.

This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#user_labels GoogleMonitoringNotificationChannel#user_labels}

---

### GoogleMonitoringNotificationChannelSensitiveLabels <a name="GoogleMonitoringNotificationChannelSensitiveLabels" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_notification_channel

googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels(
  auth_token: str = None,
  password: str = None,
  service_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.authToken">auth_token</a></code> | <code>str</code> | An authorization token for a notification channel. Channel types that support this field include: slack. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.password">password</a></code> | <code>str</code> | An password for a notification channel. Channel types that support this field include: webhook_basicauth. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.serviceKey">service_key</a></code> | <code>str</code> | An servicekey token for a notification channel. Channel types that support this field include: pagerduty. |

---

##### `auth_token`<sup>Optional</sup> <a name="auth_token" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.authToken"></a>

```python
auth_token: str
```

- *Type:* str

An authorization token for a notification channel. Channel types that support this field include: slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#auth_token GoogleMonitoringNotificationChannel#auth_token}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.password"></a>

```python
password: str
```

- *Type:* str

An password for a notification channel. Channel types that support this field include: webhook_basicauth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#password GoogleMonitoringNotificationChannel#password}

---

##### `service_key`<sup>Optional</sup> <a name="service_key" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels.property.serviceKey"></a>

```python
service_key: str
```

- *Type:* str

An servicekey token for a notification channel. Channel types that support this field include: pagerduty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#service_key GoogleMonitoringNotificationChannel#service_key}

---

### GoogleMonitoringNotificationChannelTimeouts <a name="GoogleMonitoringNotificationChannelTimeouts" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_notification_channel

googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#create GoogleMonitoringNotificationChannel#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#delete GoogleMonitoringNotificationChannel#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#update GoogleMonitoringNotificationChannel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#create GoogleMonitoringNotificationChannel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#delete GoogleMonitoringNotificationChannel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_notification_channel#update GoogleMonitoringNotificationChannel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference <a name="GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_notification_channel

googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthToken">reset_auth_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKey">reset_service_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_token` <a name="reset_auth_token" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetAuthToken"></a>

```python
def reset_auth_token() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_service_key` <a name="reset_service_key" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resetServiceKey"></a>

```python
def reset_service_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenInput">auth_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyInput">service_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken">auth_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey">service_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_token_input`<sup>Optional</sup> <a name="auth_token_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenInput"></a>

```python
auth_token_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `service_key_input`<sup>Optional</sup> <a name="service_key_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyInput"></a>

```python
service_key_input: str
```

- *Type:* str

---

##### `auth_token`<sup>Required</sup> <a name="auth_token" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken"></a>

```python
auth_token: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `service_key`<sup>Required</sup> <a name="service_key" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey"></a>

```python
service_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringNotificationChannelSensitiveLabels
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelSensitiveLabels">GoogleMonitoringNotificationChannelSensitiveLabels</a>

---


### GoogleMonitoringNotificationChannelTimeoutsOutputReference <a name="GoogleMonitoringNotificationChannelTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_notification_channel

googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMonitoringNotificationChannelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringNotificationChannel.GoogleMonitoringNotificationChannelTimeouts">GoogleMonitoringNotificationChannelTimeouts</a>]

---



