# `googleMonitoringAlertPolicy` Submodule <a name="`googleMonitoringAlertPolicy` Submodule" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMonitoringAlertPolicy <a name="GoogleMonitoringAlertPolicy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy google_monitoring_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  combiner: str,
  conditions: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditions]],
  display_name: str,
  alert_strategy: GoogleMonitoringAlertPolicyAlertStrategy = None,
  documentation: GoogleMonitoringAlertPolicyDocumentation = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  notification_channels: typing.List[str] = None,
  project: str = None,
  severity: str = None,
  timeouts: GoogleMonitoringAlertPolicyTimeouts = None,
  user_labels: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.combiner">combiner</a></code> | <code>str</code> | How to combine the results of multiple conditions to determine if an incident should be opened. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.conditions">conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>]]</code> | conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A short name or phrase used to identify the policy in dashboards, notifications, and incidents. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.alertStrategy">alert_strategy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a></code> | alert_strategy block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a></code> | documentation block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not the policy is enabled. The default is true. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#id GoogleMonitoringAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.notificationChannels">notification_channels</a></code> | <code>typing.List[str]</code> | Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#project GoogleMonitoringAlertPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.severity">severity</a></code> | <code>str</code> | The severity of an alert policy indicates how important incidents generated by that policy are. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `combiner`<sup>Required</sup> <a name="combiner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.combiner"></a>

- *Type:* str

How to combine the results of multiple conditions to determine if an incident should be opened.

Possible values: ["AND", "OR", "AND_WITH_MATCHING_RESOURCE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#combiner GoogleMonitoringAlertPolicy#combiner}

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.conditions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#conditions GoogleMonitoringAlertPolicy#conditions}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

A short name or phrase used to identify the policy in dashboards, notifications, and incidents.

To avoid confusion, don't use
the same display name for multiple policies in the same project. The
name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#display_name GoogleMonitoringAlertPolicy#display_name}

---

##### `alert_strategy`<sup>Optional</sup> <a name="alert_strategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.alertStrategy"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a>

alert_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#alert_strategy GoogleMonitoringAlertPolicy#alert_strategy}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.documentation"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a>

documentation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#documentation GoogleMonitoringAlertPolicy#documentation}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not the policy is enabled. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#enabled GoogleMonitoringAlertPolicy#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#id GoogleMonitoringAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_channels`<sup>Optional</sup> <a name="notification_channels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.notificationChannels"></a>

- *Type:* typing.List[str]

Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident.

Each element of this array corresponds
to the name field in each of the NotificationChannel objects that are
returned from the notificationChannels.list method. The syntax of the
entries in this field is
'projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#notification_channels GoogleMonitoringAlertPolicy#notification_channels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#project GoogleMonitoringAlertPolicy#project}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.severity"></a>

- *Type:* str

The severity of an alert policy indicates how important incidents generated by that policy are.

The severity level will be displayed on the Incident
detail page and in notifications. Possible values: ["CRITICAL", "ERROR", "WARNING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#severity GoogleMonitoringAlertPolicy#severity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#timeouts GoogleMonitoringAlertPolicy#timeouts}

---

##### `user_labels`<sup>Optional</sup> <a name="user_labels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.Initializer.parameter.userLabels"></a>

- *Type:* typing.Mapping[str]

This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#user_labels GoogleMonitoringAlertPolicy#user_labels}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putAlertStrategy">put_alert_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putDocumentation">put_documentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetAlertStrategy">reset_alert_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetDocumentation">reset_documentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetNotificationChannels">reset_notification_channels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetSeverity">reset_severity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetUserLabels">reset_user_labels</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_alert_strategy` <a name="put_alert_strategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putAlertStrategy"></a>

```python
def put_alert_strategy(
  auto_close: str = None,
  notification_channel_strategy: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy]] = None,
  notification_prompts: typing.List[str] = None,
  notification_rate_limit: GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit = None
) -> None
```

###### `auto_close`<sup>Optional</sup> <a name="auto_close" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putAlertStrategy.parameter.autoClose"></a>

- *Type:* str

If an alert policy that was active has no data for this long, any open incidents will close.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#auto_close GoogleMonitoringAlertPolicy#auto_close}

---

###### `notification_channel_strategy`<sup>Optional</sup> <a name="notification_channel_strategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putAlertStrategy.parameter.notificationChannelStrategy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>]]

notification_channel_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#notification_channel_strategy GoogleMonitoringAlertPolicy#notification_channel_strategy}

---

###### `notification_prompts`<sup>Optional</sup> <a name="notification_prompts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putAlertStrategy.parameter.notificationPrompts"></a>

- *Type:* typing.List[str]

Control when notifications will be sent out. Possible values: ["NOTIFICATION_PROMPT_UNSPECIFIED", "OPENED", "CLOSED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#notification_prompts GoogleMonitoringAlertPolicy#notification_prompts}

---

###### `notification_rate_limit`<sup>Optional</sup> <a name="notification_rate_limit" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putAlertStrategy.parameter.notificationRateLimit"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

notification_rate_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#notification_rate_limit GoogleMonitoringAlertPolicy#notification_rate_limit}

---

##### `put_conditions` <a name="put_conditions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putConditions"></a>

```python
def put_conditions(
  value: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putConditions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>]]

---

##### `put_documentation` <a name="put_documentation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putDocumentation"></a>

```python
def put_documentation(
  content: str = None,
  links: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyDocumentationLinks]] = None,
  mime_type: str = None,
  subject: str = None
) -> None
```

###### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putDocumentation.parameter.content"></a>

- *Type:* str

The text of the documentation, interpreted according to mimeType.

The content may not exceed 8,192 Unicode characters and may not
exceed more than 10,240 bytes when encoded in UTF-8 format,
whichever is smaller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#content GoogleMonitoringAlertPolicy#content}

---

###### `links`<sup>Optional</sup> <a name="links" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putDocumentation.parameter.links"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>]]

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#links GoogleMonitoringAlertPolicy#links}

---

###### `mime_type`<sup>Optional</sup> <a name="mime_type" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putDocumentation.parameter.mimeType"></a>

- *Type:* str

The format of the content field. Presently, only the value "text/markdown" is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#mime_type GoogleMonitoringAlertPolicy#mime_type}

---

###### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putDocumentation.parameter.subject"></a>

- *Type:* str

The subject line of the notification.

The subject line may not
exceed 10,240 bytes. In notifications generated by this policy the contents
of the subject line after variable expansion will be truncated to 255 bytes
or shorter at the latest UTF-8 character boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#subject GoogleMonitoringAlertPolicy#subject}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#create GoogleMonitoringAlertPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#delete GoogleMonitoringAlertPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#update GoogleMonitoringAlertPolicy#update}.

---

##### `reset_alert_strategy` <a name="reset_alert_strategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetAlertStrategy"></a>

```python
def reset_alert_strategy() -> None
```

##### `reset_documentation` <a name="reset_documentation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetDocumentation"></a>

```python
def reset_documentation() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notification_channels` <a name="reset_notification_channels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetNotificationChannels"></a>

```python
def reset_notification_channels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_severity` <a name="reset_severity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetSeverity"></a>

```python
def reset_severity() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_labels` <a name="reset_user_labels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.resetUserLabels"></a>

```python
def reset_user_labels() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleMonitoringAlertPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleMonitoringAlertPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleMonitoringAlertPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleMonitoringAlertPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleMonitoringAlertPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.alertStrategy">alert_strategy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference">GoogleMonitoringAlertPolicyAlertStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList">GoogleMonitoringAlertPolicyConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.creationRecord">creation_record</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList">GoogleMonitoringAlertPolicyCreationRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference">GoogleMonitoringAlertPolicyDocumentationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference">GoogleMonitoringAlertPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.alertStrategyInput">alert_strategy_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.combinerInput">combiner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.conditionsInput">conditions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.documentationInput">documentation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.notificationChannelsInput">notification_channels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.userLabelsInput">user_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.combiner">combiner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.notificationChannels">notification_channels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alert_strategy`<sup>Required</sup> <a name="alert_strategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.alertStrategy"></a>

```python
alert_strategy: GoogleMonitoringAlertPolicyAlertStrategyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference">GoogleMonitoringAlertPolicyAlertStrategyOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.conditions"></a>

```python
conditions: GoogleMonitoringAlertPolicyConditionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList">GoogleMonitoringAlertPolicyConditionsList</a>

---

##### `creation_record`<sup>Required</sup> <a name="creation_record" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.creationRecord"></a>

```python
creation_record: GoogleMonitoringAlertPolicyCreationRecordList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList">GoogleMonitoringAlertPolicyCreationRecordList</a>

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.documentation"></a>

```python
documentation: GoogleMonitoringAlertPolicyDocumentationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference">GoogleMonitoringAlertPolicyDocumentationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.timeouts"></a>

```python
timeouts: GoogleMonitoringAlertPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference">GoogleMonitoringAlertPolicyTimeoutsOutputReference</a>

---

##### `alert_strategy_input`<sup>Optional</sup> <a name="alert_strategy_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.alertStrategyInput"></a>

```python
alert_strategy_input: GoogleMonitoringAlertPolicyAlertStrategy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a>

---

##### `combiner_input`<sup>Optional</sup> <a name="combiner_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.combinerInput"></a>

```python
combiner_input: str
```

- *Type:* str

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.conditionsInput"></a>

```python
conditions_input: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>]]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `documentation_input`<sup>Optional</sup> <a name="documentation_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.documentationInput"></a>

```python
documentation_input: GoogleMonitoringAlertPolicyDocumentation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `notification_channels_input`<sup>Optional</sup> <a name="notification_channels_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.notificationChannelsInput"></a>

```python
notification_channels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleMonitoringAlertPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a>]

---

##### `user_labels_input`<sup>Optional</sup> <a name="user_labels_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.userLabelsInput"></a>

```python
user_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `combiner`<sup>Required</sup> <a name="combiner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.combiner"></a>

```python
combiner: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `notification_channels`<sup>Required</sup> <a name="notification_channels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.notificationChannels"></a>

```python
notification_channels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `user_labels`<sup>Required</sup> <a name="user_labels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.userLabels"></a>

```python
user_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMonitoringAlertPolicyAlertStrategy <a name="GoogleMonitoringAlertPolicyAlertStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy(
  auto_close: str = None,
  notification_channel_strategy: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy]] = None,
  notification_prompts: typing.List[str] = None,
  notification_rate_limit: GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.autoClose">auto_close</a></code> | <code>str</code> | If an alert policy that was active has no data for this long, any open incidents will close. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationChannelStrategy">notification_channel_strategy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>]]</code> | notification_channel_strategy block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationPrompts">notification_prompts</a></code> | <code>typing.List[str]</code> | Control when notifications will be sent out. Possible values: ["NOTIFICATION_PROMPT_UNSPECIFIED", "OPENED", "CLOSED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationRateLimit">notification_rate_limit</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a></code> | notification_rate_limit block. |

---

##### `auto_close`<sup>Optional</sup> <a name="auto_close" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.autoClose"></a>

```python
auto_close: str
```

- *Type:* str

If an alert policy that was active has no data for this long, any open incidents will close.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#auto_close GoogleMonitoringAlertPolicy#auto_close}

---

##### `notification_channel_strategy`<sup>Optional</sup> <a name="notification_channel_strategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationChannelStrategy"></a>

```python
notification_channel_strategy: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>]]

notification_channel_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#notification_channel_strategy GoogleMonitoringAlertPolicy#notification_channel_strategy}

---

##### `notification_prompts`<sup>Optional</sup> <a name="notification_prompts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationPrompts"></a>

```python
notification_prompts: typing.List[str]
```

- *Type:* typing.List[str]

Control when notifications will be sent out. Possible values: ["NOTIFICATION_PROMPT_UNSPECIFIED", "OPENED", "CLOSED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#notification_prompts GoogleMonitoringAlertPolicy#notification_prompts}

---

##### `notification_rate_limit`<sup>Optional</sup> <a name="notification_rate_limit" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy.property.notificationRateLimit"></a>

```python
notification_rate_limit: GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

notification_rate_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#notification_rate_limit GoogleMonitoringAlertPolicy#notification_rate_limit}

---

### GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy <a name="GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy(
  notification_channel_names: typing.List[str] = None,
  renotify_interval: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.notificationChannelNames">notification_channel_names</a></code> | <code>typing.List[str]</code> | The notification channels that these settings apply to. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.renotifyInterval">renotify_interval</a></code> | <code>str</code> | The frequency at which to send reminder notifications for open incidents. |

---

##### `notification_channel_names`<sup>Optional</sup> <a name="notification_channel_names" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.notificationChannelNames"></a>

```python
notification_channel_names: typing.List[str]
```

- *Type:* typing.List[str]

The notification channels that these settings apply to.

Each of these
correspond to the name field in one of the NotificationChannel objects
referenced in the notification_channels field of this AlertPolicy. The format is
'projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#notification_channel_names GoogleMonitoringAlertPolicy#notification_channel_names}

---

##### `renotify_interval`<sup>Optional</sup> <a name="renotify_interval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.renotifyInterval"></a>

```python
renotify_interval: str
```

- *Type:* str

The frequency at which to send reminder notifications for open incidents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#renotify_interval GoogleMonitoringAlertPolicy#renotify_interval}

---

### GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit <a name="GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit(
  period: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit.property.period">period</a></code> | <code>str</code> | Not more than one notification per period. |

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit.property.period"></a>

```python
period: str
```

- *Type:* str

Not more than one notification per period.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "60.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#period GoogleMonitoringAlertPolicy#period}

---

### GoogleMonitoringAlertPolicyConditions <a name="GoogleMonitoringAlertPolicyConditions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions(
  display_name: str,
  condition_absent: GoogleMonitoringAlertPolicyConditionsConditionAbsent = None,
  condition_matched_log: GoogleMonitoringAlertPolicyConditionsConditionMatchedLog = None,
  condition_monitoring_query_language: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage = None,
  condition_prometheus_query_language: GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage = None,
  condition_sql: GoogleMonitoringAlertPolicyConditionsConditionSql = None,
  condition_threshold: GoogleMonitoringAlertPolicyConditionsConditionThreshold = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.displayName">display_name</a></code> | <code>str</code> | A short name or phrase used to identify the condition in dashboards, notifications, and incidents. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionAbsent">condition_absent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a></code> | condition_absent block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionMatchedLog">condition_matched_log</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a></code> | condition_matched_log block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionMonitoringQueryLanguage">condition_monitoring_query_language</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a></code> | condition_monitoring_query_language block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionPrometheusQueryLanguage">condition_prometheus_query_language</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a></code> | condition_prometheus_query_language block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionSql">condition_sql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a></code> | condition_sql block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionThreshold">condition_threshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a></code> | condition_threshold block. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A short name or phrase used to identify the condition in dashboards, notifications, and incidents.

To avoid confusion, don't use the same
display name for multiple conditions in the same
policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#display_name GoogleMonitoringAlertPolicy#display_name}

---

##### `condition_absent`<sup>Optional</sup> <a name="condition_absent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionAbsent"></a>

```python
condition_absent: GoogleMonitoringAlertPolicyConditionsConditionAbsent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a>

condition_absent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#condition_absent GoogleMonitoringAlertPolicy#condition_absent}

---

##### `condition_matched_log`<sup>Optional</sup> <a name="condition_matched_log" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionMatchedLog"></a>

```python
condition_matched_log: GoogleMonitoringAlertPolicyConditionsConditionMatchedLog
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a>

condition_matched_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#condition_matched_log GoogleMonitoringAlertPolicy#condition_matched_log}

---

##### `condition_monitoring_query_language`<sup>Optional</sup> <a name="condition_monitoring_query_language" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionMonitoringQueryLanguage"></a>

```python
condition_monitoring_query_language: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

condition_monitoring_query_language block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#condition_monitoring_query_language GoogleMonitoringAlertPolicy#condition_monitoring_query_language}

---

##### `condition_prometheus_query_language`<sup>Optional</sup> <a name="condition_prometheus_query_language" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionPrometheusQueryLanguage"></a>

```python
condition_prometheus_query_language: GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

condition_prometheus_query_language block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#condition_prometheus_query_language GoogleMonitoringAlertPolicy#condition_prometheus_query_language}

---

##### `condition_sql`<sup>Optional</sup> <a name="condition_sql" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionSql"></a>

```python
condition_sql: GoogleMonitoringAlertPolicyConditionsConditionSql
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a>

condition_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#condition_sql GoogleMonitoringAlertPolicy#condition_sql}

---

##### `condition_threshold`<sup>Optional</sup> <a name="condition_threshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions.property.conditionThreshold"></a>

```python
condition_threshold: GoogleMonitoringAlertPolicyConditionsConditionThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a>

condition_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#condition_threshold GoogleMonitoringAlertPolicy#condition_threshold}

---

### GoogleMonitoringAlertPolicyConditionsConditionAbsent <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent(
  duration: str,
  aggregations: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations]] = None,
  filter: str = None,
  trigger: GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.duration">duration</a></code> | <code>str</code> | The amount of time that a time series must fail to report new data to be considered failing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.aggregations">aggregations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>]]</code> | aggregations block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.filter">filter</a></code> | <code>str</code> | A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a></code> | trigger block. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.duration"></a>

```python
duration: str
```

- *Type:* str

The amount of time that a time series must fail to report new data to be considered failing.

Currently, only values that are a
multiple of a minute--e.g. 60s, 120s, or 300s
--are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}

---

##### `aggregations`<sup>Optional</sup> <a name="aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.aggregations"></a>

```python
aggregations: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>]]

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#aggregations GoogleMonitoringAlertPolicy#aggregations}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.filter"></a>

```python
filter: str
```

- *Type:* str

A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#filter GoogleMonitoringAlertPolicy#filter}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent.property.trigger"></a>

```python
trigger: GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#trigger GoogleMonitoringAlertPolicy#trigger}

---

### GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations(
  alignment_period: str = None,
  cross_series_reducer: str = None,
  group_by_fields: typing.List[str] = None,
  per_series_aligner: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.alignmentPeriod">alignment_period</a></code> | <code>str</code> | The alignment period for per-time series alignment. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.crossSeriesReducer">cross_series_reducer</a></code> | <code>str</code> | The approach to be used to combine time series. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.groupByFields">group_by_fields</a></code> | <code>typing.List[str]</code> | The set of fields to preserve when crossSeriesReducer is specified. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.perSeriesAligner">per_series_aligner</a></code> | <code>str</code> | The approach to be used to align individual time series. |

---

##### `alignment_period`<sup>Optional</sup> <a name="alignment_period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.alignmentPeriod"></a>

```python
alignment_period: str
```

- *Type:* str

The alignment period for per-time series alignment.

If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#alignment_period GoogleMonitoringAlertPolicy#alignment_period}

---

##### `cross_series_reducer`<sup>Optional</sup> <a name="cross_series_reducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.crossSeriesReducer"></a>

```python
cross_series_reducer: str
```

- *Type:* str

The approach to be used to combine time series.

Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#cross_series_reducer GoogleMonitoringAlertPolicy#cross_series_reducer}

---

##### `group_by_fields`<sup>Optional</sup> <a name="group_by_fields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.groupByFields"></a>

```python
group_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

The set of fields to preserve when crossSeriesReducer is specified.

The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#group_by_fields GoogleMonitoringAlertPolicy#group_by_fields}

---

##### `per_series_aligner`<sup>Optional</sup> <a name="per_series_aligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations.property.perSeriesAligner"></a>

```python
per_series_aligner: str
```

- *Type:* str

The approach to be used to align individual time series.

Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#per_series_aligner GoogleMonitoringAlertPolicy#per_series_aligner}

---

### GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger(
  count: typing.Union[int, float] = None,
  percent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger.property.count">count</a></code> | <code>typing.Union[int, float]</code> | The absolute number of time series that must fail the predicate for the condition to be triggered. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | The percentage of time series that must fail the predicate for the condition to be triggered. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#count GoogleMonitoringAlertPolicy#count}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#percent GoogleMonitoringAlertPolicy#percent}

---

### GoogleMonitoringAlertPolicyConditionsConditionMatchedLog <a name="GoogleMonitoringAlertPolicyConditionsConditionMatchedLog" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog(
  filter: str,
  label_extractors: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog.property.filter">filter</a></code> | <code>str</code> | A logs-based filter. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog.property.labelExtractors">label_extractors</a></code> | <code>typing.Mapping[str]</code> | A map from a label key to an extractor expression, which is used to extract the value for this label key. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog.property.filter"></a>

```python
filter: str
```

- *Type:* str

A logs-based filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#filter GoogleMonitoringAlertPolicy#filter}

---

##### `label_extractors`<sup>Optional</sup> <a name="label_extractors" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog.property.labelExtractors"></a>

```python
label_extractors: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map from a label key to an extractor expression, which is used to extract the value for this label key.

Each entry in this map is
a specification for how data should be extracted from log entries that
match filter. Each combination of extracted values is treated as
a separate rule for the purposes of triggering notifications.
Label keys and corresponding values can be used in notifications
generated by this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#label_extractors GoogleMonitoringAlertPolicy#label_extractors}

---

### GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage <a name="GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage(
  duration: str,
  query: str,
  evaluation_missing_data: str = None,
  trigger: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.duration">duration</a></code> | <code>str</code> | The amount of time that a time series must violate the threshold to be considered failing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.query">query</a></code> | <code>str</code> | Monitoring Query Language query that outputs a boolean stream. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.evaluationMissingData">evaluation_missing_data</a></code> | <code>str</code> | A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a></code> | trigger block. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.duration"></a>

```python
duration: str
```

- *Type:* str

The amount of time that a time series must violate the threshold to be considered failing.

Currently, only values that are a
multiple of a minute--e.g., 0, 60, 120, or
300 seconds--are supported. If an invalid
value is given, an error will be returned.
When choosing a duration, it is useful to
keep in mind the frequency of the underlying
time series data (which may also be affected
by any alignments specified in the
aggregations field); a good duration is long
enough so that a single outlier does not
generate spurious alerts, but short enough
that unhealthy states are detected and
alerted on quickly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.query"></a>

```python
query: str
```

- *Type:* str

Monitoring Query Language query that outputs a boolean stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#query GoogleMonitoringAlertPolicy#query}

---

##### `evaluation_missing_data`<sup>Optional</sup> <a name="evaluation_missing_data" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.evaluationMissingData"></a>

```python
evaluation_missing_data: str
```

- *Type:* str

A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#evaluation_missing_data GoogleMonitoringAlertPolicy#evaluation_missing_data}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.trigger"></a>

```python
trigger: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#trigger GoogleMonitoringAlertPolicy#trigger}

---

### GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger <a name="GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger(
  count: typing.Union[int, float] = None,
  percent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.count">count</a></code> | <code>typing.Union[int, float]</code> | The absolute number of time series that must fail the predicate for the condition to be triggered. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | The percentage of time series that must fail the predicate for the condition to be triggered. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#count GoogleMonitoringAlertPolicy#count}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#percent GoogleMonitoringAlertPolicy#percent}

---

### GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage <a name="GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage(
  query: str,
  alert_rule: str = None,
  disable_metric_validation: typing.Union[bool, IResolvable] = None,
  duration: str = None,
  evaluation_interval: str = None,
  labels: typing.Mapping[str] = None,
  rule_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.query">query</a></code> | <code>str</code> | The PromQL expression to evaluate. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.alertRule">alert_rule</a></code> | <code>str</code> | The alerting rule name of this alert in the corresponding Prometheus configuration file. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.disableMetricValidation">disable_metric_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to disable metric existence validation for this condition. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.duration">duration</a></code> | <code>str</code> | Alerts are considered firing once their PromQL expression evaluated to be "true" for this long. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.evaluationInterval">evaluation_interval</a></code> | <code>str</code> | How often this rule should be evaluated. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to add to or overwrite in the PromQL query result. Label names must be valid. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.ruleGroup">rule_group</a></code> | <code>str</code> | The rule group name of this alert in the corresponding Prometheus configuration file. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.query"></a>

```python
query: str
```

- *Type:* str

The PromQL expression to evaluate.

Every evaluation cycle this
expression is evaluated at the current time, and all resultant time
series become pending/firing alerts. This field must not be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#query GoogleMonitoringAlertPolicy#query}

---

##### `alert_rule`<sup>Optional</sup> <a name="alert_rule" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.alertRule"></a>

```python
alert_rule: str
```

- *Type:* str

The alerting rule name of this alert in the corresponding Prometheus configuration file.

Some external tools may require this field to be populated correctly
in order to refer to the original Prometheus configuration file.
The rule group name and the alert name are necessary to update the
relevant AlertPolicies in case the definition of the rule group changes
in the future.

This field is optional. If this field is not empty, then it must be a
valid Prometheus label name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#alert_rule GoogleMonitoringAlertPolicy#alert_rule}

---

##### `disable_metric_validation`<sup>Optional</sup> <a name="disable_metric_validation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.disableMetricValidation"></a>

```python
disable_metric_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable metric existence validation for this condition.

This allows alerting policies to be defined on metrics that do not yet
exist, improving advanced customer workflows such as configuring
alerting policies using Terraform.

Users with the 'monitoring.alertPolicyViewer' role are able to see the
name of the non-existent metric in the alerting policy condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#disable_metric_validation GoogleMonitoringAlertPolicy#disable_metric_validation}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.duration"></a>

```python
duration: str
```

- *Type:* str

Alerts are considered firing once their PromQL expression evaluated to be "true" for this long.

Alerts whose PromQL expression was not
evaluated to be "true" for long enough are considered pending. The
default value is zero. Must be zero or positive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}

---

##### `evaluation_interval`<sup>Optional</sup> <a name="evaluation_interval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.evaluationInterval"></a>

```python
evaluation_interval: str
```

- *Type:* str

How often this rule should be evaluated.

Must be a positive multiple
of 30 seconds or missing. The default value is 30 seconds. If this
PrometheusQueryLanguageCondition was generated from a Prometheus
alerting rule, then this value should be taken from the enclosing
rule group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#evaluation_interval GoogleMonitoringAlertPolicy#evaluation_interval}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to add to or overwrite in the PromQL query result. Label names must be valid.

Label values can be templatized by using variables. The only available
variable names are the names of the labels in the PromQL result,
although label names beginning with __ (two "_") are reserved for
internal use. "labels" may be empty. This field is intended to be used
for organizing and identifying the AlertPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#labels GoogleMonitoringAlertPolicy#labels}

---

##### `rule_group`<sup>Optional</sup> <a name="rule_group" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.ruleGroup"></a>

```python
rule_group: str
```

- *Type:* str

The rule group name of this alert in the corresponding Prometheus configuration file.

Some external tools may require this field to be populated correctly
in order to refer to the original Prometheus configuration file.
The rule group name and the alert name are necessary to update the
relevant AlertPolicies in case the definition of the rule group changes
in the future. This field is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#rule_group GoogleMonitoringAlertPolicy#rule_group}

---

### GoogleMonitoringAlertPolicyConditionsConditionSql <a name="GoogleMonitoringAlertPolicyConditionsConditionSql" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql(
  query: str,
  boolean_test: GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest = None,
  daily: GoogleMonitoringAlertPolicyConditionsConditionSqlDaily = None,
  hourly: GoogleMonitoringAlertPolicyConditionsConditionSqlHourly = None,
  minutes: GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes = None,
  row_count_test: GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.query">query</a></code> | <code>str</code> | The Log Analytics SQL query to run, as a string. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.booleanTest">boolean_test</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a></code> | boolean_test block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.daily">daily</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a></code> | daily block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.hourly">hourly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a></code> | hourly block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.minutes">minutes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a></code> | minutes block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.rowCountTest">row_count_test</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a></code> | row_count_test block. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.query"></a>

```python
query: str
```

- *Type:* str

The Log Analytics SQL query to run, as a string.

The query must
conform to the required shape. Specifically, the query must not try to
filter the input by time.  A filter will automatically be applied
to filter the input so that the query receives all rows received
since the last time the query was run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#query GoogleMonitoringAlertPolicy#query}

---

##### `boolean_test`<sup>Optional</sup> <a name="boolean_test" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.booleanTest"></a>

```python
boolean_test: GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

boolean_test block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#boolean_test GoogleMonitoringAlertPolicy#boolean_test}

---

##### `daily`<sup>Optional</sup> <a name="daily" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.daily"></a>

```python
daily: GoogleMonitoringAlertPolicyConditionsConditionSqlDaily
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a>

daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#daily GoogleMonitoringAlertPolicy#daily}

---

##### `hourly`<sup>Optional</sup> <a name="hourly" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.hourly"></a>

```python
hourly: GoogleMonitoringAlertPolicyConditionsConditionSqlHourly
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a>

hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#hourly GoogleMonitoringAlertPolicy#hourly}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.minutes"></a>

```python
minutes: GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a>

minutes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#minutes GoogleMonitoringAlertPolicy#minutes}

---

##### `row_count_test`<sup>Optional</sup> <a name="row_count_test" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql.property.rowCountTest"></a>

```python
row_count_test: GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

row_count_test block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#row_count_test GoogleMonitoringAlertPolicy#row_count_test}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest(
  column: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest.property.column">column</a></code> | <code>str</code> | The name of the column containing the boolean value. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest.property.column"></a>

```python
column: str
```

- *Type:* str

The name of the column containing the boolean value.

If the value
in a row is NULL, that row is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#column GoogleMonitoringAlertPolicy#column}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlDaily <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlDaily" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily(
  periodicity: typing.Union[int, float],
  execution_time: GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily.property.periodicity">periodicity</a></code> | <code>typing.Union[int, float]</code> | The number of days between runs. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily.property.executionTime">execution_time</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a></code> | execution_time block. |

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily.property.periodicity"></a>

```python
periodicity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days between runs.

Must be greater than or equal
to 1 day and less than or equal to 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#periodicity GoogleMonitoringAlertPolicy#periodicity}

---

##### `execution_time`<sup>Optional</sup> <a name="execution_time" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily.property.executionTime"></a>

```python
execution_time: GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

execution_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#execution_time GoogleMonitoringAlertPolicy#execution_time}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | Seconds of a minute. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Hours of a day in 24 hour format.

Must be greater than or equal
to 0 and typically must be less than or equal to 23. An API may
choose to allow the value "24:00:00" for scenarios like business
closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#hours GoogleMonitoringAlertPolicy#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#minutes GoogleMonitoringAlertPolicy#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#nanos GoogleMonitoringAlertPolicy#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Seconds of a minute.

Must be greater than or equal to 0 and
typically must be less than or equal to 59. An API may allow the
value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#seconds GoogleMonitoringAlertPolicy#seconds}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlHourly <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlHourly" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly(
  periodicity: typing.Union[int, float],
  minute_offset: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly.property.periodicity">periodicity</a></code> | <code>typing.Union[int, float]</code> | Number of hours between runs. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly.property.minuteOffset">minute_offset</a></code> | <code>typing.Union[int, float]</code> | The number of minutes after the hour (in UTC) to run the query. |

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly.property.periodicity"></a>

```python
periodicity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of hours between runs.

The interval must be greater than or
equal to 1 hour and less than or equal to 48 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#periodicity GoogleMonitoringAlertPolicy#periodicity}

---

##### `minute_offset`<sup>Optional</sup> <a name="minute_offset" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly.property.minuteOffset"></a>

```python
minute_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of minutes after the hour (in UTC) to run the query.

Must be greater than or equal to 0 minutes and less than or equal to
59 minutes.  If left unspecified, then an arbitrary offset is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#minute_offset GoogleMonitoringAlertPolicy#minute_offset}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes(
  periodicity: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes.property.periodicity">periodicity</a></code> | <code>typing.Union[int, float]</code> | Number of minutes between runs. |

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes.property.periodicity"></a>

```python
periodicity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of minutes between runs.

The interval must be greater than or
equal to 5 minutes and less than or equal to 1440 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#periodicity GoogleMonitoringAlertPolicy#periodicity}

---

### GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest(
  comparison: str,
  threshold: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.comparison">comparison</a></code> | <code>str</code> | The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | Test the boolean value in the indicated column. |

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value).

The comparison is applied
on each time series, with the time series on
the left-hand side and the threshold on the
right-hand side. Only COMPARISON_LT and
COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#comparison GoogleMonitoringAlertPolicy#comparison}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Test the boolean value in the indicated column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#threshold GoogleMonitoringAlertPolicy#threshold}

---

### GoogleMonitoringAlertPolicyConditionsConditionThreshold <a name="GoogleMonitoringAlertPolicyConditionsConditionThreshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold(
  comparison: str,
  duration: str,
  aggregations: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations]] = None,
  denominator_aggregations: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations]] = None,
  denominator_filter: str = None,
  evaluation_missing_data: str = None,
  filter: str = None,
  forecast_options: GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions = None,
  threshold_value: typing.Union[int, float] = None,
  trigger: GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.comparison">comparison</a></code> | <code>str</code> | The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value). |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.duration">duration</a></code> | <code>str</code> | The amount of time that a time series must violate the threshold to be considered failing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.aggregations">aggregations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>]]</code> | aggregations block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.denominatorAggregations">denominator_aggregations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>]]</code> | denominator_aggregations block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.denominatorFilter">denominator_filter</a></code> | <code>str</code> | A filter that identifies a time series that should be used as the denominator of a ratio that will be compared with the threshold. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.evaluationMissingData">evaluation_missing_data</a></code> | <code>str</code> | A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"]. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.filter">filter</a></code> | <code>str</code> | A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.forecastOptions">forecast_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a></code> | forecast_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.thresholdValue">threshold_value</a></code> | <code>typing.Union[int, float]</code> | A value against which to compare the time series. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a></code> | trigger block. |

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value).

The comparison is applied
on each time series, with the time series on
the left-hand side and the threshold on the
right-hand side. Only COMPARISON_LT and
COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#comparison GoogleMonitoringAlertPolicy#comparison}

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.duration"></a>

```python
duration: str
```

- *Type:* str

The amount of time that a time series must violate the threshold to be considered failing.

Currently, only values that are a
multiple of a minute--e.g., 0, 60, 120, or
300 seconds--are supported. If an invalid
value is given, an error will be returned.
When choosing a duration, it is useful to
keep in mind the frequency of the underlying
time series data (which may also be affected
by any alignments specified in the
aggregations field); a good duration is long
enough so that a single outlier does not
generate spurious alerts, but short enough
that unhealthy states are detected and
alerted on quickly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}

---

##### `aggregations`<sup>Optional</sup> <a name="aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.aggregations"></a>

```python
aggregations: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>]]

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#aggregations GoogleMonitoringAlertPolicy#aggregations}

---

##### `denominator_aggregations`<sup>Optional</sup> <a name="denominator_aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.denominatorAggregations"></a>

```python
denominator_aggregations: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>]]

denominator_aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#denominator_aggregations GoogleMonitoringAlertPolicy#denominator_aggregations}

---

##### `denominator_filter`<sup>Optional</sup> <a name="denominator_filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.denominatorFilter"></a>

```python
denominator_filter: str
```

- *Type:* str

A filter that identifies a time series that should be used as the denominator of a ratio that will be compared with the threshold.

If
a denominator_filter is specified, the time
series specified by the filter field will be
used as the numerator.The filter is similar
to the one that is specified in the
MetricService.ListTimeSeries request (that
call is useful to verify the time series
that will be retrieved / processed) and must
specify the metric type and optionally may
contain restrictions on resource type,
resource labels, and metric labels. This
field may not exceed 2048 Unicode characters
in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#denominator_filter GoogleMonitoringAlertPolicy#denominator_filter}

---

##### `evaluation_missing_data`<sup>Optional</sup> <a name="evaluation_missing_data" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.evaluationMissingData"></a>

```python
evaluation_missing_data: str
```

- *Type:* str

A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#evaluation_missing_data GoogleMonitoringAlertPolicy#evaluation_missing_data}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.filter"></a>

```python
filter: str
```

- *Type:* str

A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#filter GoogleMonitoringAlertPolicy#filter}

---

##### `forecast_options`<sup>Optional</sup> <a name="forecast_options" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.forecastOptions"></a>

```python
forecast_options: GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

forecast_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#forecast_options GoogleMonitoringAlertPolicy#forecast_options}

---

##### `threshold_value`<sup>Optional</sup> <a name="threshold_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.thresholdValue"></a>

```python
threshold_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

A value against which to compare the time series.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#threshold_value GoogleMonitoringAlertPolicy#threshold_value}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold.property.trigger"></a>

```python
trigger: GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#trigger GoogleMonitoringAlertPolicy#trigger}

---

### GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations(
  alignment_period: str = None,
  cross_series_reducer: str = None,
  group_by_fields: typing.List[str] = None,
  per_series_aligner: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.alignmentPeriod">alignment_period</a></code> | <code>str</code> | The alignment period for per-time series alignment. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.crossSeriesReducer">cross_series_reducer</a></code> | <code>str</code> | The approach to be used to combine time series. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.groupByFields">group_by_fields</a></code> | <code>typing.List[str]</code> | The set of fields to preserve when crossSeriesReducer is specified. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.perSeriesAligner">per_series_aligner</a></code> | <code>str</code> | The approach to be used to align individual time series. |

---

##### `alignment_period`<sup>Optional</sup> <a name="alignment_period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.alignmentPeriod"></a>

```python
alignment_period: str
```

- *Type:* str

The alignment period for per-time series alignment.

If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#alignment_period GoogleMonitoringAlertPolicy#alignment_period}

---

##### `cross_series_reducer`<sup>Optional</sup> <a name="cross_series_reducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.crossSeriesReducer"></a>

```python
cross_series_reducer: str
```

- *Type:* str

The approach to be used to combine time series.

Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#cross_series_reducer GoogleMonitoringAlertPolicy#cross_series_reducer}

---

##### `group_by_fields`<sup>Optional</sup> <a name="group_by_fields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.groupByFields"></a>

```python
group_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

The set of fields to preserve when crossSeriesReducer is specified.

The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#group_by_fields GoogleMonitoringAlertPolicy#group_by_fields}

---

##### `per_series_aligner`<sup>Optional</sup> <a name="per_series_aligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations.property.perSeriesAligner"></a>

```python
per_series_aligner: str
```

- *Type:* str

The approach to be used to align individual time series.

Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#per_series_aligner GoogleMonitoringAlertPolicy#per_series_aligner}

---

### GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations(
  alignment_period: str = None,
  cross_series_reducer: str = None,
  group_by_fields: typing.List[str] = None,
  per_series_aligner: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.alignmentPeriod">alignment_period</a></code> | <code>str</code> | The alignment period for per-time series alignment. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.crossSeriesReducer">cross_series_reducer</a></code> | <code>str</code> | The approach to be used to combine time series. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.groupByFields">group_by_fields</a></code> | <code>typing.List[str]</code> | The set of fields to preserve when crossSeriesReducer is specified. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.perSeriesAligner">per_series_aligner</a></code> | <code>str</code> | The approach to be used to align individual time series. |

---

##### `alignment_period`<sup>Optional</sup> <a name="alignment_period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.alignmentPeriod"></a>

```python
alignment_period: str
```

- *Type:* str

The alignment period for per-time series alignment.

If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#alignment_period GoogleMonitoringAlertPolicy#alignment_period}

---

##### `cross_series_reducer`<sup>Optional</sup> <a name="cross_series_reducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.crossSeriesReducer"></a>

```python
cross_series_reducer: str
```

- *Type:* str

The approach to be used to combine time series.

Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#cross_series_reducer GoogleMonitoringAlertPolicy#cross_series_reducer}

---

##### `group_by_fields`<sup>Optional</sup> <a name="group_by_fields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.groupByFields"></a>

```python
group_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

The set of fields to preserve when crossSeriesReducer is specified.

The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#group_by_fields GoogleMonitoringAlertPolicy#group_by_fields}

---

##### `per_series_aligner`<sup>Optional</sup> <a name="per_series_aligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.perSeriesAligner"></a>

```python
per_series_aligner: str
```

- *Type:* str

The approach to be used to align individual time series.

Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#per_series_aligner GoogleMonitoringAlertPolicy#per_series_aligner}

---

### GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions(
  forecast_horizon: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions.property.forecastHorizon">forecast_horizon</a></code> | <code>str</code> | The length of time into the future to forecast whether a timeseries will violate the threshold. |

---

##### `forecast_horizon`<sup>Required</sup> <a name="forecast_horizon" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions.property.forecastHorizon"></a>

```python
forecast_horizon: str
```

- *Type:* str

The length of time into the future to forecast whether a timeseries will violate the threshold.

If the predicted value is found to violate the
threshold, and the violation is observed in all
forecasts made for the Configured 'duration',
then the timeseries is considered to be failing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#forecast_horizon GoogleMonitoringAlertPolicy#forecast_horizon}

---

### GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger(
  count: typing.Union[int, float] = None,
  percent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger.property.count">count</a></code> | <code>typing.Union[int, float]</code> | The absolute number of time series that must fail the predicate for the condition to be triggered. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | The percentage of time series that must fail the predicate for the condition to be triggered. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#count GoogleMonitoringAlertPolicy#count}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#percent GoogleMonitoringAlertPolicy#percent}

---

### GoogleMonitoringAlertPolicyConfig <a name="GoogleMonitoringAlertPolicyConfig" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  combiner: str,
  conditions: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditions]],
  display_name: str,
  alert_strategy: GoogleMonitoringAlertPolicyAlertStrategy = None,
  documentation: GoogleMonitoringAlertPolicyDocumentation = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  notification_channels: typing.List[str] = None,
  project: str = None,
  severity: str = None,
  timeouts: GoogleMonitoringAlertPolicyTimeouts = None,
  user_labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.combiner">combiner</a></code> | <code>str</code> | How to combine the results of multiple conditions to determine if an incident should be opened. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.conditions">conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>]]</code> | conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | A short name or phrase used to identify the policy in dashboards, notifications, and incidents. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.alertStrategy">alert_strategy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a></code> | alert_strategy block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.documentation">documentation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a></code> | documentation block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not the policy is enabled. The default is true. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#id GoogleMonitoringAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.notificationChannels">notification_channels</a></code> | <code>typing.List[str]</code> | Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#project GoogleMonitoringAlertPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.severity">severity</a></code> | <code>str</code> | The severity of an alert policy indicates how important incidents generated by that policy are. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.userLabels">user_labels</a></code> | <code>typing.Mapping[str]</code> | This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `combiner`<sup>Required</sup> <a name="combiner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.combiner"></a>

```python
combiner: str
```

- *Type:* str

How to combine the results of multiple conditions to determine if an incident should be opened.

Possible values: ["AND", "OR", "AND_WITH_MATCHING_RESOURCE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#combiner GoogleMonitoringAlertPolicy#combiner}

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.conditions"></a>

```python
conditions: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#conditions GoogleMonitoringAlertPolicy#conditions}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A short name or phrase used to identify the policy in dashboards, notifications, and incidents.

To avoid confusion, don't use
the same display name for multiple policies in the same project. The
name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#display_name GoogleMonitoringAlertPolicy#display_name}

---

##### `alert_strategy`<sup>Optional</sup> <a name="alert_strategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.alertStrategy"></a>

```python
alert_strategy: GoogleMonitoringAlertPolicyAlertStrategy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a>

alert_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#alert_strategy GoogleMonitoringAlertPolicy#alert_strategy}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.documentation"></a>

```python
documentation: GoogleMonitoringAlertPolicyDocumentation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a>

documentation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#documentation GoogleMonitoringAlertPolicy#documentation}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not the policy is enabled. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#enabled GoogleMonitoringAlertPolicy#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#id GoogleMonitoringAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notification_channels`<sup>Optional</sup> <a name="notification_channels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.notificationChannels"></a>

```python
notification_channels: typing.List[str]
```

- *Type:* typing.List[str]

Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident.

Each element of this array corresponds
to the name field in each of the NotificationChannel objects that are
returned from the notificationChannels.list method. The syntax of the
entries in this field is
'projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#notification_channels GoogleMonitoringAlertPolicy#notification_channels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#project GoogleMonitoringAlertPolicy#project}.

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

The severity of an alert policy indicates how important incidents generated by that policy are.

The severity level will be displayed on the Incident
detail page and in notifications. Possible values: ["CRITICAL", "ERROR", "WARNING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#severity GoogleMonitoringAlertPolicy#severity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleMonitoringAlertPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#timeouts GoogleMonitoringAlertPolicy#timeouts}

---

##### `user_labels`<sup>Optional</sup> <a name="user_labels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConfig.property.userLabels"></a>

```python
user_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#user_labels GoogleMonitoringAlertPolicy#user_labels}

---

### GoogleMonitoringAlertPolicyCreationRecord <a name="GoogleMonitoringAlertPolicyCreationRecord" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecord.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecord()
```


### GoogleMonitoringAlertPolicyDocumentation <a name="GoogleMonitoringAlertPolicyDocumentation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation(
  content: str = None,
  links: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyDocumentationLinks]] = None,
  mime_type: str = None,
  subject: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.content">content</a></code> | <code>str</code> | The text of the documentation, interpreted according to mimeType. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.links">links</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>]]</code> | links block. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.mimeType">mime_type</a></code> | <code>str</code> | The format of the content field. Presently, only the value "text/markdown" is supported. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.subject">subject</a></code> | <code>str</code> | The subject line of the notification. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.content"></a>

```python
content: str
```

- *Type:* str

The text of the documentation, interpreted according to mimeType.

The content may not exceed 8,192 Unicode characters and may not
exceed more than 10,240 bytes when encoded in UTF-8 format,
whichever is smaller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#content GoogleMonitoringAlertPolicy#content}

---

##### `links`<sup>Optional</sup> <a name="links" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.links"></a>

```python
links: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyDocumentationLinks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>]]

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#links GoogleMonitoringAlertPolicy#links}

---

##### `mime_type`<sup>Optional</sup> <a name="mime_type" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

The format of the content field. Presently, only the value "text/markdown" is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#mime_type GoogleMonitoringAlertPolicy#mime_type}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation.property.subject"></a>

```python
subject: str
```

- *Type:* str

The subject line of the notification.

The subject line may not
exceed 10,240 bytes. In notifications generated by this policy the contents
of the subject line after variable expansion will be truncated to 255 bytes
or shorter at the latest UTF-8 character boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#subject GoogleMonitoringAlertPolicy#subject}

---

### GoogleMonitoringAlertPolicyDocumentationLinks <a name="GoogleMonitoringAlertPolicyDocumentationLinks" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks(
  display_name: str = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks.property.displayName">display_name</a></code> | <code>str</code> | A short display name for the link. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks.property.url">url</a></code> | <code>str</code> | The url of a webpage. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A short display name for the link.

The display name must not be empty or exceed 63 characters. Example: "playbook".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#display_name GoogleMonitoringAlertPolicy#display_name}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks.property.url"></a>

```python
url: str
```

- *Type:* str

The url of a webpage.

A url can be templatized by using variables in the path or the query parameters. The total length of a URL should not exceed 2083 characters before and after variable expansion. Example: "https://my_domain.com/playbook?name=${resource.name}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#url GoogleMonitoringAlertPolicy#url}

---

### GoogleMonitoringAlertPolicyTimeouts <a name="GoogleMonitoringAlertPolicyTimeouts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#create GoogleMonitoringAlertPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#delete GoogleMonitoringAlertPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#update GoogleMonitoringAlertPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#create GoogleMonitoringAlertPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#delete GoogleMonitoringAlertPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#update GoogleMonitoringAlertPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList <a name="GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>]]

---


### GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference <a name="GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetNotificationChannelNames">reset_notification_channel_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetRenotifyInterval">reset_renotify_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_notification_channel_names` <a name="reset_notification_channel_names" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetNotificationChannelNames"></a>

```python
def reset_notification_channel_names() -> None
```

##### `reset_renotify_interval` <a name="reset_renotify_interval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetRenotifyInterval"></a>

```python
def reset_renotify_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNamesInput">notification_channel_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyIntervalInput">renotify_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNames">notification_channel_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyInterval">renotify_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notification_channel_names_input`<sup>Optional</sup> <a name="notification_channel_names_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNamesInput"></a>

```python
notification_channel_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `renotify_interval_input`<sup>Optional</sup> <a name="renotify_interval_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyIntervalInput"></a>

```python
renotify_interval_input: str
```

- *Type:* str

---

##### `notification_channel_names`<sup>Required</sup> <a name="notification_channel_names" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNames"></a>

```python
notification_channel_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `renotify_interval`<sup>Required</sup> <a name="renotify_interval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyInterval"></a>

```python
renotify_interval: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>]

---


### GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference <a name="GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resetPeriod">reset_period</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_period` <a name="reset_period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

---


### GoogleMonitoringAlertPolicyAlertStrategyOutputReference <a name="GoogleMonitoringAlertPolicyAlertStrategyOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationChannelStrategy">put_notification_channel_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationRateLimit">put_notification_rate_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetAutoClose">reset_auto_close</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationChannelStrategy">reset_notification_channel_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationPrompts">reset_notification_prompts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationRateLimit">reset_notification_rate_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_notification_channel_strategy` <a name="put_notification_channel_strategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationChannelStrategy"></a>

```python
def put_notification_channel_strategy(
  value: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationChannelStrategy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>]]

---

##### `put_notification_rate_limit` <a name="put_notification_rate_limit" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationRateLimit"></a>

```python
def put_notification_rate_limit(
  period: str = None
) -> None
```

###### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.putNotificationRateLimit.parameter.period"></a>

- *Type:* str

Not more than one notification per period.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "60.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#period GoogleMonitoringAlertPolicy#period}

---

##### `reset_auto_close` <a name="reset_auto_close" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetAutoClose"></a>

```python
def reset_auto_close() -> None
```

##### `reset_notification_channel_strategy` <a name="reset_notification_channel_strategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationChannelStrategy"></a>

```python
def reset_notification_channel_strategy() -> None
```

##### `reset_notification_prompts` <a name="reset_notification_prompts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationPrompts"></a>

```python
def reset_notification_prompts() -> None
```

##### `reset_notification_rate_limit` <a name="reset_notification_rate_limit" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationRateLimit"></a>

```python
def reset_notification_rate_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategy">notification_channel_strategy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimit">notification_rate_limit</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.autoCloseInput">auto_close_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategyInput">notification_channel_strategy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPromptsInput">notification_prompts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimitInput">notification_rate_limit_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.autoClose">auto_close</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPrompts">notification_prompts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notification_channel_strategy`<sup>Required</sup> <a name="notification_channel_strategy" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategy"></a>

```python
notification_channel_strategy: GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList</a>

---

##### `notification_rate_limit`<sup>Required</sup> <a name="notification_rate_limit" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimit"></a>

```python
notification_rate_limit: GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference</a>

---

##### `auto_close_input`<sup>Optional</sup> <a name="auto_close_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.autoCloseInput"></a>

```python
auto_close_input: str
```

- *Type:* str

---

##### `notification_channel_strategy_input`<sup>Optional</sup> <a name="notification_channel_strategy_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategyInput"></a>

```python
notification_channel_strategy_input: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy">GoogleMonitoringAlertPolicyAlertStrategyNotificationChannelStrategy</a>]]

---

##### `notification_prompts_input`<sup>Optional</sup> <a name="notification_prompts_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPromptsInput"></a>

```python
notification_prompts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notification_rate_limit_input`<sup>Optional</sup> <a name="notification_rate_limit_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimitInput"></a>

```python
notification_rate_limit_input: GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit">GoogleMonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

---

##### `auto_close`<sup>Required</sup> <a name="auto_close" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.autoClose"></a>

```python
auto_close: str
```

- *Type:* str

---

##### `notification_prompts`<sup>Required</sup> <a name="notification_prompts" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPrompts"></a>

```python
notification_prompts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyAlertStrategy
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyAlertStrategy">GoogleMonitoringAlertPolicyAlertStrategy</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>]]

---


### GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetAlignmentPeriod">reset_alignment_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetCrossSeriesReducer">reset_cross_series_reducer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetGroupByFields">reset_group_by_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetPerSeriesAligner">reset_per_series_aligner</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alignment_period` <a name="reset_alignment_period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetAlignmentPeriod"></a>

```python
def reset_alignment_period() -> None
```

##### `reset_cross_series_reducer` <a name="reset_cross_series_reducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetCrossSeriesReducer"></a>

```python
def reset_cross_series_reducer() -> None
```

##### `reset_group_by_fields` <a name="reset_group_by_fields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetGroupByFields"></a>

```python
def reset_group_by_fields() -> None
```

##### `reset_per_series_aligner` <a name="reset_per_series_aligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetPerSeriesAligner"></a>

```python
def reset_per_series_aligner() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriodInput">alignment_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducerInput">cross_series_reducer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFieldsInput">group_by_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAlignerInput">per_series_aligner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriod">alignment_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducer">cross_series_reducer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFields">group_by_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAligner">per_series_aligner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alignment_period_input`<sup>Optional</sup> <a name="alignment_period_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriodInput"></a>

```python
alignment_period_input: str
```

- *Type:* str

---

##### `cross_series_reducer_input`<sup>Optional</sup> <a name="cross_series_reducer_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducerInput"></a>

```python
cross_series_reducer_input: str
```

- *Type:* str

---

##### `group_by_fields_input`<sup>Optional</sup> <a name="group_by_fields_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFieldsInput"></a>

```python
group_by_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `per_series_aligner_input`<sup>Optional</sup> <a name="per_series_aligner_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAlignerInput"></a>

```python
per_series_aligner_input: str
```

- *Type:* str

---

##### `alignment_period`<sup>Required</sup> <a name="alignment_period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriod"></a>

```python
alignment_period: str
```

- *Type:* str

---

##### `cross_series_reducer`<sup>Required</sup> <a name="cross_series_reducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducer"></a>

```python
cross_series_reducer: str
```

- *Type:* str

---

##### `group_by_fields`<sup>Required</sup> <a name="group_by_fields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFields"></a>

```python
group_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `per_series_aligner`<sup>Required</sup> <a name="per_series_aligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAligner"></a>

```python
per_series_aligner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>]

---


### GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putAggregations">put_aggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putTrigger">put_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetAggregations">reset_aggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetTrigger">reset_trigger</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aggregations` <a name="put_aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putAggregations"></a>

```python
def put_aggregations(
  value: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putAggregations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>]]

---

##### `put_trigger` <a name="put_trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putTrigger"></a>

```python
def put_trigger(
  count: typing.Union[int, float] = None,
  percent: typing.Union[int, float] = None
) -> None
```

###### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putTrigger.parameter.count"></a>

- *Type:* typing.Union[int, float]

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#count GoogleMonitoringAlertPolicy#count}

---

###### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.putTrigger.parameter.percent"></a>

- *Type:* typing.Union[int, float]

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#percent GoogleMonitoringAlertPolicy#percent}

---

##### `reset_aggregations` <a name="reset_aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetAggregations"></a>

```python
def reset_aggregations() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_trigger` <a name="reset_trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetTrigger"></a>

```python
def reset_trigger() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregations">aggregations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregationsInput">aggregations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.triggerInput">trigger_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregations`<sup>Required</sup> <a name="aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregations"></a>

```python
aggregations: GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregationsList</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.trigger"></a>

```python
trigger: GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference</a>

---

##### `aggregations_input`<sup>Optional</sup> <a name="aggregations_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregationsInput"></a>

```python
aggregations_input: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>]]

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `trigger_input`<sup>Optional</sup> <a name="trigger_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.triggerInput"></a>

```python
trigger_input: GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyConditionsConditionAbsent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetPercent">reset_percent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count` <a name="reset_count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_percent` <a name="reset_percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetPercent"></a>

```python
def reset_percent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percentInput">percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percent_input`<sup>Optional</sup> <a name="percent_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percentInput"></a>

```python
percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resetLabelExtractors">reset_label_extractors</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_label_extractors` <a name="reset_label_extractors" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resetLabelExtractors"></a>

```python
def reset_label_extractors() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractorsInput">label_extractors_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractors">label_extractors</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `label_extractors_input`<sup>Optional</sup> <a name="label_extractors_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractorsInput"></a>

```python
label_extractors_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `label_extractors`<sup>Required</sup> <a name="label_extractors" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractors"></a>

```python
label_extractors: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyConditionsConditionMatchedLog
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.putTrigger">put_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetEvaluationMissingData">reset_evaluation_missing_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetTrigger">reset_trigger</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_trigger` <a name="put_trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.putTrigger"></a>

```python
def put_trigger(
  count: typing.Union[int, float] = None,
  percent: typing.Union[int, float] = None
) -> None
```

###### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.putTrigger.parameter.count"></a>

- *Type:* typing.Union[int, float]

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#count GoogleMonitoringAlertPolicy#count}

---

###### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.putTrigger.parameter.percent"></a>

- *Type:* typing.Union[int, float]

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#percent GoogleMonitoringAlertPolicy#percent}

---

##### `reset_evaluation_missing_data` <a name="reset_evaluation_missing_data" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetEvaluationMissingData"></a>

```python
def reset_evaluation_missing_data() -> None
```

##### `reset_trigger` <a name="reset_trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetTrigger"></a>

```python
def reset_trigger() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingDataInput">evaluation_missing_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.triggerInput">trigger_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingData">evaluation_missing_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.trigger"></a>

```python
trigger: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference</a>

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `evaluation_missing_data_input`<sup>Optional</sup> <a name="evaluation_missing_data_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingDataInput"></a>

```python
evaluation_missing_data_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `trigger_input`<sup>Optional</sup> <a name="trigger_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.triggerInput"></a>

```python
trigger_input: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `evaluation_missing_data`<sup>Required</sup> <a name="evaluation_missing_data" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingData"></a>

```python
evaluation_missing_data: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetPercent">reset_percent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count` <a name="reset_count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_percent` <a name="reset_percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetPercent"></a>

```python
def reset_percent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percentInput">percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percent_input`<sup>Optional</sup> <a name="percent_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percentInput"></a>

```python
percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetAlertRule">reset_alert_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDisableMetricValidation">reset_disable_metric_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetEvaluationInterval">reset_evaluation_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetRuleGroup">reset_rule_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alert_rule` <a name="reset_alert_rule" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetAlertRule"></a>

```python
def reset_alert_rule() -> None
```

##### `reset_disable_metric_validation` <a name="reset_disable_metric_validation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDisableMetricValidation"></a>

```python
def reset_disable_metric_validation() -> None
```

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_evaluation_interval` <a name="reset_evaluation_interval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetEvaluationInterval"></a>

```python
def reset_evaluation_interval() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_rule_group` <a name="reset_rule_group" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetRuleGroup"></a>

```python
def reset_rule_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRuleInput">alert_rule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidationInput">disable_metric_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationIntervalInput">evaluation_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroupInput">rule_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRule">alert_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidation">disable_metric_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationInterval">evaluation_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroup">rule_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alert_rule_input`<sup>Optional</sup> <a name="alert_rule_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRuleInput"></a>

```python
alert_rule_input: str
```

- *Type:* str

---

##### `disable_metric_validation_input`<sup>Optional</sup> <a name="disable_metric_validation_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidationInput"></a>

```python
disable_metric_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `evaluation_interval_input`<sup>Optional</sup> <a name="evaluation_interval_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationIntervalInput"></a>

```python
evaluation_interval_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `rule_group_input`<sup>Optional</sup> <a name="rule_group_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroupInput"></a>

```python
rule_group_input: str
```

- *Type:* str

---

##### `alert_rule`<sup>Required</sup> <a name="alert_rule" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRule"></a>

```python
alert_rule: str
```

- *Type:* str

---

##### `disable_metric_validation`<sup>Required</sup> <a name="disable_metric_validation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidation"></a>

```python
disable_metric_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `evaluation_interval`<sup>Required</sup> <a name="evaluation_interval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationInterval"></a>

```python
evaluation_interval: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `rule_group`<sup>Required</sup> <a name="rule_group" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroup"></a>

```python
rule_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.columnInput">column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.columnInput"></a>

```python
column_input: str
```

- *Type:* str

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetHours">reset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetSeconds">reset_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hours` <a name="reset_hours" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetHours"></a>

```python
def reset_hours() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```

##### `reset_seconds` <a name="reset_seconds" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetSeconds"></a>

```python
def reset_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hoursInput">hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.secondsInput">seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hours">hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.seconds">seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hours_input`<sup>Optional</sup> <a name="hours_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hoursInput"></a>

```python
hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds_input`<sup>Optional</sup> <a name="seconds_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.secondsInput"></a>

```python
seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hours"></a>

```python
hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.seconds"></a>

```python
seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime">put_execution_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resetExecutionTime">reset_execution_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_execution_time` <a name="put_execution_time" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime"></a>

```python
def put_execution_time(
  hours: typing.Union[int, float] = None,
  minutes: typing.Union[int, float] = None,
  nanos: typing.Union[int, float] = None,
  seconds: typing.Union[int, float] = None
) -> None
```

###### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime.parameter.hours"></a>

- *Type:* typing.Union[int, float]

Hours of a day in 24 hour format.

Must be greater than or equal
to 0 and typically must be less than or equal to 23. An API may
choose to allow the value "24:00:00" for scenarios like business
closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#hours GoogleMonitoringAlertPolicy#hours}

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#minutes GoogleMonitoringAlertPolicy#minutes}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#nanos GoogleMonitoringAlertPolicy#nanos}

---

###### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime.parameter.seconds"></a>

- *Type:* typing.Union[int, float]

Seconds of a minute.

Must be greater than or equal to 0 and
typically must be less than or equal to 59. An API may allow the
value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#seconds GoogleMonitoringAlertPolicy#seconds}

---

##### `reset_execution_time` <a name="reset_execution_time" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resetExecutionTime"></a>

```python
def reset_execution_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTime">execution_time</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTimeInput">execution_time_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicityInput">periodicity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicity">periodicity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_time`<sup>Required</sup> <a name="execution_time" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTime"></a>

```python
execution_time: GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference</a>

---

##### `execution_time_input`<sup>Optional</sup> <a name="execution_time_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTimeInput"></a>

```python
execution_time_input: GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

---

##### `periodicity_input`<sup>Optional</sup> <a name="periodicity_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicityInput"></a>

```python
periodicity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicity"></a>

```python
periodicity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyConditionsConditionSqlDaily
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resetMinuteOffset">reset_minute_offset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_minute_offset` <a name="reset_minute_offset" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resetMinuteOffset"></a>

```python
def reset_minute_offset() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffsetInput">minute_offset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicityInput">periodicity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffset">minute_offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicity">periodicity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minute_offset_input`<sup>Optional</sup> <a name="minute_offset_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffsetInput"></a>

```python
minute_offset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `periodicity_input`<sup>Optional</sup> <a name="periodicity_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicityInput"></a>

```python
periodicity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute_offset`<sup>Required</sup> <a name="minute_offset" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffset"></a>

```python
minute_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicity"></a>

```python
periodicity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyConditionsConditionSqlHourly
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicityInput">periodicity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicity">periodicity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `periodicity_input`<sup>Optional</sup> <a name="periodicity_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicityInput"></a>

```python
periodicity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicity"></a>

```python
periodicity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putBooleanTest">put_boolean_test</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putDaily">put_daily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putHourly">put_hourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putMinutes">put_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putRowCountTest">put_row_count_test</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetBooleanTest">reset_boolean_test</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetDaily">reset_daily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetHourly">reset_hourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetRowCountTest">reset_row_count_test</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_boolean_test` <a name="put_boolean_test" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putBooleanTest"></a>

```python
def put_boolean_test(
  column: str
) -> None
```

###### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putBooleanTest.parameter.column"></a>

- *Type:* str

The name of the column containing the boolean value.

If the value
in a row is NULL, that row is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#column GoogleMonitoringAlertPolicy#column}

---

##### `put_daily` <a name="put_daily" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putDaily"></a>

```python
def put_daily(
  periodicity: typing.Union[int, float],
  execution_time: GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime = None
) -> None
```

###### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putDaily.parameter.periodicity"></a>

- *Type:* typing.Union[int, float]

The number of days between runs.

Must be greater than or equal
to 1 day and less than or equal to 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#periodicity GoogleMonitoringAlertPolicy#periodicity}

---

###### `execution_time`<sup>Optional</sup> <a name="execution_time" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putDaily.parameter.executionTime"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

execution_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#execution_time GoogleMonitoringAlertPolicy#execution_time}

---

##### `put_hourly` <a name="put_hourly" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putHourly"></a>

```python
def put_hourly(
  periodicity: typing.Union[int, float],
  minute_offset: typing.Union[int, float] = None
) -> None
```

###### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putHourly.parameter.periodicity"></a>

- *Type:* typing.Union[int, float]

Number of hours between runs.

The interval must be greater than or
equal to 1 hour and less than or equal to 48 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#periodicity GoogleMonitoringAlertPolicy#periodicity}

---

###### `minute_offset`<sup>Optional</sup> <a name="minute_offset" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putHourly.parameter.minuteOffset"></a>

- *Type:* typing.Union[int, float]

The number of minutes after the hour (in UTC) to run the query.

Must be greater than or equal to 0 minutes and less than or equal to
59 minutes.  If left unspecified, then an arbitrary offset is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#minute_offset GoogleMonitoringAlertPolicy#minute_offset}

---

##### `put_minutes` <a name="put_minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putMinutes"></a>

```python
def put_minutes(
  periodicity: typing.Union[int, float]
) -> None
```

###### `periodicity`<sup>Required</sup> <a name="periodicity" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putMinutes.parameter.periodicity"></a>

- *Type:* typing.Union[int, float]

Number of minutes between runs.

The interval must be greater than or
equal to 5 minutes and less than or equal to 1440 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#periodicity GoogleMonitoringAlertPolicy#periodicity}

---

##### `put_row_count_test` <a name="put_row_count_test" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putRowCountTest"></a>

```python
def put_row_count_test(
  comparison: str,
  threshold: typing.Union[int, float]
) -> None
```

###### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putRowCountTest.parameter.comparison"></a>

- *Type:* str

The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value).

The comparison is applied
on each time series, with the time series on
the left-hand side and the threshold on the
right-hand side. Only COMPARISON_LT and
COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#comparison GoogleMonitoringAlertPolicy#comparison}

---

###### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.putRowCountTest.parameter.threshold"></a>

- *Type:* typing.Union[int, float]

Test the boolean value in the indicated column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#threshold GoogleMonitoringAlertPolicy#threshold}

---

##### `reset_boolean_test` <a name="reset_boolean_test" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetBooleanTest"></a>

```python
def reset_boolean_test() -> None
```

##### `reset_daily` <a name="reset_daily" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetDaily"></a>

```python
def reset_daily() -> None
```

##### `reset_hourly` <a name="reset_hourly" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetHourly"></a>

```python
def reset_hourly() -> None
```

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_row_count_test` <a name="reset_row_count_test" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.resetRowCountTest"></a>

```python
def reset_row_count_test() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTest">boolean_test</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.daily">daily</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourly">hourly</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutes">minutes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTest">row_count_test</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTestInput">boolean_test_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.dailyInput">daily_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourlyInput">hourly_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutesInput">minutes_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTestInput">row_count_test_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_test`<sup>Required</sup> <a name="boolean_test" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTest"></a>

```python
boolean_test: GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference</a>

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.daily"></a>

```python
daily: GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlDailyOutputReference</a>

---

##### `hourly`<sup>Required</sup> <a name="hourly" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourly"></a>

```python
hourly: GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference</a>

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutes"></a>

```python
minutes: GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference</a>

---

##### `row_count_test`<sup>Required</sup> <a name="row_count_test" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTest"></a>

```python
row_count_test: GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference</a>

---

##### `boolean_test_input`<sup>Optional</sup> <a name="boolean_test_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTestInput"></a>

```python
boolean_test_input: GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

---

##### `daily_input`<sup>Optional</sup> <a name="daily_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.dailyInput"></a>

```python
daily_input: GoogleMonitoringAlertPolicyConditionsConditionSqlDaily
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a>

---

##### `hourly_input`<sup>Optional</sup> <a name="hourly_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourlyInput"></a>

```python
hourly_input: GoogleMonitoringAlertPolicyConditionsConditionSqlHourly
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a>

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutesInput"></a>

```python
minutes_input: GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a>

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `row_count_test_input`<sup>Optional</sup> <a name="row_count_test_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTestInput"></a>

```python
row_count_test_input: GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyConditionsConditionSql
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>]]

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetAlignmentPeriod">reset_alignment_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetCrossSeriesReducer">reset_cross_series_reducer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetGroupByFields">reset_group_by_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetPerSeriesAligner">reset_per_series_aligner</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alignment_period` <a name="reset_alignment_period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetAlignmentPeriod"></a>

```python
def reset_alignment_period() -> None
```

##### `reset_cross_series_reducer` <a name="reset_cross_series_reducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetCrossSeriesReducer"></a>

```python
def reset_cross_series_reducer() -> None
```

##### `reset_group_by_fields` <a name="reset_group_by_fields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetGroupByFields"></a>

```python
def reset_group_by_fields() -> None
```

##### `reset_per_series_aligner` <a name="reset_per_series_aligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetPerSeriesAligner"></a>

```python
def reset_per_series_aligner() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriodInput">alignment_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducerInput">cross_series_reducer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFieldsInput">group_by_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAlignerInput">per_series_aligner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriod">alignment_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducer">cross_series_reducer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFields">group_by_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAligner">per_series_aligner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alignment_period_input`<sup>Optional</sup> <a name="alignment_period_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriodInput"></a>

```python
alignment_period_input: str
```

- *Type:* str

---

##### `cross_series_reducer_input`<sup>Optional</sup> <a name="cross_series_reducer_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducerInput"></a>

```python
cross_series_reducer_input: str
```

- *Type:* str

---

##### `group_by_fields_input`<sup>Optional</sup> <a name="group_by_fields_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFieldsInput"></a>

```python
group_by_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `per_series_aligner_input`<sup>Optional</sup> <a name="per_series_aligner_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAlignerInput"></a>

```python
per_series_aligner_input: str
```

- *Type:* str

---

##### `alignment_period`<sup>Required</sup> <a name="alignment_period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriod"></a>

```python
alignment_period: str
```

- *Type:* str

---

##### `cross_series_reducer`<sup>Required</sup> <a name="cross_series_reducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducer"></a>

```python
cross_series_reducer: str
```

- *Type:* str

---

##### `group_by_fields`<sup>Required</sup> <a name="group_by_fields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFields"></a>

```python
group_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `per_series_aligner`<sup>Required</sup> <a name="per_series_aligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAligner"></a>

```python
per_series_aligner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>]

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>]]

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetAlignmentPeriod">reset_alignment_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetCrossSeriesReducer">reset_cross_series_reducer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetGroupByFields">reset_group_by_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetPerSeriesAligner">reset_per_series_aligner</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alignment_period` <a name="reset_alignment_period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetAlignmentPeriod"></a>

```python
def reset_alignment_period() -> None
```

##### `reset_cross_series_reducer` <a name="reset_cross_series_reducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetCrossSeriesReducer"></a>

```python
def reset_cross_series_reducer() -> None
```

##### `reset_group_by_fields` <a name="reset_group_by_fields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetGroupByFields"></a>

```python
def reset_group_by_fields() -> None
```

##### `reset_per_series_aligner` <a name="reset_per_series_aligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetPerSeriesAligner"></a>

```python
def reset_per_series_aligner() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriodInput">alignment_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducerInput">cross_series_reducer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFieldsInput">group_by_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAlignerInput">per_series_aligner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriod">alignment_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducer">cross_series_reducer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFields">group_by_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAligner">per_series_aligner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alignment_period_input`<sup>Optional</sup> <a name="alignment_period_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriodInput"></a>

```python
alignment_period_input: str
```

- *Type:* str

---

##### `cross_series_reducer_input`<sup>Optional</sup> <a name="cross_series_reducer_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducerInput"></a>

```python
cross_series_reducer_input: str
```

- *Type:* str

---

##### `group_by_fields_input`<sup>Optional</sup> <a name="group_by_fields_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFieldsInput"></a>

```python
group_by_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `per_series_aligner_input`<sup>Optional</sup> <a name="per_series_aligner_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAlignerInput"></a>

```python
per_series_aligner_input: str
```

- *Type:* str

---

##### `alignment_period`<sup>Required</sup> <a name="alignment_period" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriod"></a>

```python
alignment_period: str
```

- *Type:* str

---

##### `cross_series_reducer`<sup>Required</sup> <a name="cross_series_reducer" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducer"></a>

```python
cross_series_reducer: str
```

- *Type:* str

---

##### `group_by_fields`<sup>Required</sup> <a name="group_by_fields" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFields"></a>

```python
group_by_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `per_series_aligner`<sup>Required</sup> <a name="per_series_aligner" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAligner"></a>

```python
per_series_aligner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>]

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizonInput">forecast_horizon_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizon">forecast_horizon</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forecast_horizon_input`<sup>Optional</sup> <a name="forecast_horizon_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizonInput"></a>

```python
forecast_horizon_input: str
```

- *Type:* str

---

##### `forecast_horizon`<sup>Required</sup> <a name="forecast_horizon" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizon"></a>

```python
forecast_horizon: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putAggregations">put_aggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putDenominatorAggregations">put_denominator_aggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putForecastOptions">put_forecast_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putTrigger">put_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetAggregations">reset_aggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorAggregations">reset_denominator_aggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorFilter">reset_denominator_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetEvaluationMissingData">reset_evaluation_missing_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetForecastOptions">reset_forecast_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetThresholdValue">reset_threshold_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetTrigger">reset_trigger</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aggregations` <a name="put_aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putAggregations"></a>

```python
def put_aggregations(
  value: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putAggregations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>]]

---

##### `put_denominator_aggregations` <a name="put_denominator_aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putDenominatorAggregations"></a>

```python
def put_denominator_aggregations(
  value: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putDenominatorAggregations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>]]

---

##### `put_forecast_options` <a name="put_forecast_options" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putForecastOptions"></a>

```python
def put_forecast_options(
  forecast_horizon: str
) -> None
```

###### `forecast_horizon`<sup>Required</sup> <a name="forecast_horizon" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putForecastOptions.parameter.forecastHorizon"></a>

- *Type:* str

The length of time into the future to forecast whether a timeseries will violate the threshold.

If the predicted value is found to violate the
threshold, and the violation is observed in all
forecasts made for the Configured 'duration',
then the timeseries is considered to be failing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#forecast_horizon GoogleMonitoringAlertPolicy#forecast_horizon}

---

##### `put_trigger` <a name="put_trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putTrigger"></a>

```python
def put_trigger(
  count: typing.Union[int, float] = None,
  percent: typing.Union[int, float] = None
) -> None
```

###### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putTrigger.parameter.count"></a>

- *Type:* typing.Union[int, float]

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#count GoogleMonitoringAlertPolicy#count}

---

###### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.putTrigger.parameter.percent"></a>

- *Type:* typing.Union[int, float]

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#percent GoogleMonitoringAlertPolicy#percent}

---

##### `reset_aggregations` <a name="reset_aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetAggregations"></a>

```python
def reset_aggregations() -> None
```

##### `reset_denominator_aggregations` <a name="reset_denominator_aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorAggregations"></a>

```python
def reset_denominator_aggregations() -> None
```

##### `reset_denominator_filter` <a name="reset_denominator_filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorFilter"></a>

```python
def reset_denominator_filter() -> None
```

##### `reset_evaluation_missing_data` <a name="reset_evaluation_missing_data" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetEvaluationMissingData"></a>

```python
def reset_evaluation_missing_data() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_forecast_options` <a name="reset_forecast_options" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetForecastOptions"></a>

```python
def reset_forecast_options() -> None
```

##### `reset_threshold_value` <a name="reset_threshold_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetThresholdValue"></a>

```python
def reset_threshold_value() -> None
```

##### `reset_trigger` <a name="reset_trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetTrigger"></a>

```python
def reset_trigger() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregations">aggregations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregations">denominator_aggregations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptions">forecast_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregationsInput">aggregations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregationsInput">denominator_aggregations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilterInput">denominator_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingDataInput">evaluation_missing_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptionsInput">forecast_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValueInput">threshold_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.triggerInput">trigger_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilter">denominator_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingData">evaluation_missing_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValue">threshold_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregations`<sup>Required</sup> <a name="aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregations"></a>

```python
aggregations: GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregationsList</a>

---

##### `denominator_aggregations`<sup>Required</sup> <a name="denominator_aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregations"></a>

```python
denominator_aggregations: GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList</a>

---

##### `forecast_options`<sup>Required</sup> <a name="forecast_options" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptions"></a>

```python
forecast_options: GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.trigger"></a>

```python
trigger: GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference</a>

---

##### `aggregations_input`<sup>Optional</sup> <a name="aggregations_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregationsInput"></a>

```python
aggregations_input: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>]]

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `denominator_aggregations_input`<sup>Optional</sup> <a name="denominator_aggregations_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregationsInput"></a>

```python
denominator_aggregations_input: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>]]

---

##### `denominator_filter_input`<sup>Optional</sup> <a name="denominator_filter_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilterInput"></a>

```python
denominator_filter_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `evaluation_missing_data_input`<sup>Optional</sup> <a name="evaluation_missing_data_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingDataInput"></a>

```python
evaluation_missing_data_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `forecast_options_input`<sup>Optional</sup> <a name="forecast_options_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptionsInput"></a>

```python
forecast_options_input: GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

---

##### `threshold_value_input`<sup>Optional</sup> <a name="threshold_value_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValueInput"></a>

```python
threshold_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trigger_input`<sup>Optional</sup> <a name="trigger_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.triggerInput"></a>

```python
trigger_input: GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `denominator_filter`<sup>Required</sup> <a name="denominator_filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilter"></a>

```python
denominator_filter: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `evaluation_missing_data`<sup>Required</sup> <a name="evaluation_missing_data" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingData"></a>

```python
evaluation_missing_data: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `threshold_value`<sup>Required</sup> <a name="threshold_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValue"></a>

```python
threshold_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyConditionsConditionThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a>

---


### GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference <a name="GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetPercent">reset_percent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_count` <a name="reset_count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_percent` <a name="reset_percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetPercent"></a>

```python
def reset_percent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percentInput">percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percent_input`<sup>Optional</sup> <a name="percent_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percentInput"></a>

```python
percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

---


### GoogleMonitoringAlertPolicyConditionsList <a name="GoogleMonitoringAlertPolicyConditionsList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMonitoringAlertPolicyConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>]]

---


### GoogleMonitoringAlertPolicyConditionsOutputReference <a name="GoogleMonitoringAlertPolicyConditionsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionAbsent">put_condition_absent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMatchedLog">put_condition_matched_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage">put_condition_monitoring_query_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage">put_condition_prometheus_query_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionSql">put_condition_sql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold">put_condition_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionAbsent">reset_condition_absent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionMatchedLog">reset_condition_matched_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionMonitoringQueryLanguage">reset_condition_monitoring_query_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionPrometheusQueryLanguage">reset_condition_prometheus_query_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionSql">reset_condition_sql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionThreshold">reset_condition_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition_absent` <a name="put_condition_absent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionAbsent"></a>

```python
def put_condition_absent(
  duration: str,
  aggregations: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations]] = None,
  filter: str = None,
  trigger: GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger = None
) -> None
```

###### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionAbsent.parameter.duration"></a>

- *Type:* str

The amount of time that a time series must fail to report new data to be considered failing.

Currently, only values that are a
multiple of a minute--e.g. 60s, 120s, or 300s
--are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}

---

###### `aggregations`<sup>Optional</sup> <a name="aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionAbsent.parameter.aggregations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations">GoogleMonitoringAlertPolicyConditionsConditionAbsentAggregations</a>]]

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#aggregations GoogleMonitoringAlertPolicy#aggregations}

---

###### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionAbsent.parameter.filter"></a>

- *Type:* str

A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#filter GoogleMonitoringAlertPolicy#filter}

---

###### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionAbsent.parameter.trigger"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger">GoogleMonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#trigger GoogleMonitoringAlertPolicy#trigger}

---

##### `put_condition_matched_log` <a name="put_condition_matched_log" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMatchedLog"></a>

```python
def put_condition_matched_log(
  filter: str,
  label_extractors: typing.Mapping[str] = None
) -> None
```

###### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMatchedLog.parameter.filter"></a>

- *Type:* str

A logs-based filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#filter GoogleMonitoringAlertPolicy#filter}

---

###### `label_extractors`<sup>Optional</sup> <a name="label_extractors" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMatchedLog.parameter.labelExtractors"></a>

- *Type:* typing.Mapping[str]

A map from a label key to an extractor expression, which is used to extract the value for this label key.

Each entry in this map is
a specification for how data should be extracted from log entries that
match filter. Each combination of extracted values is treated as
a separate rule for the purposes of triggering notifications.
Label keys and corresponding values can be used in notifications
generated by this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#label_extractors GoogleMonitoringAlertPolicy#label_extractors}

---

##### `put_condition_monitoring_query_language` <a name="put_condition_monitoring_query_language" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage"></a>

```python
def put_condition_monitoring_query_language(
  duration: str,
  query: str,
  evaluation_missing_data: str = None,
  trigger: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger = None
) -> None
```

###### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage.parameter.duration"></a>

- *Type:* str

The amount of time that a time series must violate the threshold to be considered failing.

Currently, only values that are a
multiple of a minute--e.g., 0, 60, 120, or
300 seconds--are supported. If an invalid
value is given, an error will be returned.
When choosing a duration, it is useful to
keep in mind the frequency of the underlying
time series data (which may also be affected
by any alignments specified in the
aggregations field); a good duration is long
enough so that a single outlier does not
generate spurious alerts, but short enough
that unhealthy states are detected and
alerted on quickly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}

---

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage.parameter.query"></a>

- *Type:* str

Monitoring Query Language query that outputs a boolean stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#query GoogleMonitoringAlertPolicy#query}

---

###### `evaluation_missing_data`<sup>Optional</sup> <a name="evaluation_missing_data" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage.parameter.evaluationMissingData"></a>

- *Type:* str

A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#evaluation_missing_data GoogleMonitoringAlertPolicy#evaluation_missing_data}

---

###### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage.parameter.trigger"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#trigger GoogleMonitoringAlertPolicy#trigger}

---

##### `put_condition_prometheus_query_language` <a name="put_condition_prometheus_query_language" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage"></a>

```python
def put_condition_prometheus_query_language(
  query: str,
  alert_rule: str = None,
  disable_metric_validation: typing.Union[bool, IResolvable] = None,
  duration: str = None,
  evaluation_interval: str = None,
  labels: typing.Mapping[str] = None,
  rule_group: str = None
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage.parameter.query"></a>

- *Type:* str

The PromQL expression to evaluate.

Every evaluation cycle this
expression is evaluated at the current time, and all resultant time
series become pending/firing alerts. This field must not be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#query GoogleMonitoringAlertPolicy#query}

---

###### `alert_rule`<sup>Optional</sup> <a name="alert_rule" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage.parameter.alertRule"></a>

- *Type:* str

The alerting rule name of this alert in the corresponding Prometheus configuration file.

Some external tools may require this field to be populated correctly
in order to refer to the original Prometheus configuration file.
The rule group name and the alert name are necessary to update the
relevant AlertPolicies in case the definition of the rule group changes
in the future.

This field is optional. If this field is not empty, then it must be a
valid Prometheus label name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#alert_rule GoogleMonitoringAlertPolicy#alert_rule}

---

###### `disable_metric_validation`<sup>Optional</sup> <a name="disable_metric_validation" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage.parameter.disableMetricValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to disable metric existence validation for this condition.

This allows alerting policies to be defined on metrics that do not yet
exist, improving advanced customer workflows such as configuring
alerting policies using Terraform.

Users with the 'monitoring.alertPolicyViewer' role are able to see the
name of the non-existent metric in the alerting policy condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#disable_metric_validation GoogleMonitoringAlertPolicy#disable_metric_validation}

---

###### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage.parameter.duration"></a>

- *Type:* str

Alerts are considered firing once their PromQL expression evaluated to be "true" for this long.

Alerts whose PromQL expression was not
evaluated to be "true" for long enough are considered pending. The
default value is zero. Must be zero or positive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}

---

###### `evaluation_interval`<sup>Optional</sup> <a name="evaluation_interval" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage.parameter.evaluationInterval"></a>

- *Type:* str

How often this rule should be evaluated.

Must be a positive multiple
of 30 seconds or missing. The default value is 30 seconds. If this
PrometheusQueryLanguageCondition was generated from a Prometheus
alerting rule, then this value should be taken from the enclosing
rule group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#evaluation_interval GoogleMonitoringAlertPolicy#evaluation_interval}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to add to or overwrite in the PromQL query result. Label names must be valid.

Label values can be templatized by using variables. The only available
variable names are the names of the labels in the PromQL result,
although label names beginning with __ (two "_") are reserved for
internal use. "labels" may be empty. This field is intended to be used
for organizing and identifying the AlertPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#labels GoogleMonitoringAlertPolicy#labels}

---

###### `rule_group`<sup>Optional</sup> <a name="rule_group" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage.parameter.ruleGroup"></a>

- *Type:* str

The rule group name of this alert in the corresponding Prometheus configuration file.

Some external tools may require this field to be populated correctly
in order to refer to the original Prometheus configuration file.
The rule group name and the alert name are necessary to update the
relevant AlertPolicies in case the definition of the rule group changes
in the future. This field is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#rule_group GoogleMonitoringAlertPolicy#rule_group}

---

##### `put_condition_sql` <a name="put_condition_sql" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionSql"></a>

```python
def put_condition_sql(
  query: str,
  boolean_test: GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest = None,
  daily: GoogleMonitoringAlertPolicyConditionsConditionSqlDaily = None,
  hourly: GoogleMonitoringAlertPolicyConditionsConditionSqlHourly = None,
  minutes: GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes = None,
  row_count_test: GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest = None
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionSql.parameter.query"></a>

- *Type:* str

The Log Analytics SQL query to run, as a string.

The query must
conform to the required shape. Specifically, the query must not try to
filter the input by time.  A filter will automatically be applied
to filter the input so that the query receives all rows received
since the last time the query was run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#query GoogleMonitoringAlertPolicy#query}

---

###### `boolean_test`<sup>Optional</sup> <a name="boolean_test" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionSql.parameter.booleanTest"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest">GoogleMonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

boolean_test block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#boolean_test GoogleMonitoringAlertPolicy#boolean_test}

---

###### `daily`<sup>Optional</sup> <a name="daily" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionSql.parameter.daily"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlDaily">GoogleMonitoringAlertPolicyConditionsConditionSqlDaily</a>

daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#daily GoogleMonitoringAlertPolicy#daily}

---

###### `hourly`<sup>Optional</sup> <a name="hourly" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionSql.parameter.hourly"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlHourly">GoogleMonitoringAlertPolicyConditionsConditionSqlHourly</a>

hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#hourly GoogleMonitoringAlertPolicy#hourly}

---

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionSql.parameter.minutes"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes">GoogleMonitoringAlertPolicyConditionsConditionSqlMinutes</a>

minutes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#minutes GoogleMonitoringAlertPolicy#minutes}

---

###### `row_count_test`<sup>Optional</sup> <a name="row_count_test" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionSql.parameter.rowCountTest"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest">GoogleMonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

row_count_test block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#row_count_test GoogleMonitoringAlertPolicy#row_count_test}

---

##### `put_condition_threshold` <a name="put_condition_threshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold"></a>

```python
def put_condition_threshold(
  comparison: str,
  duration: str,
  aggregations: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations]] = None,
  denominator_aggregations: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations]] = None,
  denominator_filter: str = None,
  evaluation_missing_data: str = None,
  filter: str = None,
  forecast_options: GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions = None,
  threshold_value: typing.Union[int, float] = None,
  trigger: GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger = None
) -> None
```

###### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold.parameter.comparison"></a>

- *Type:* str

The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value).

The comparison is applied
on each time series, with the time series on
the left-hand side and the threshold on the
right-hand side. Only COMPARISON_LT and
COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#comparison GoogleMonitoringAlertPolicy#comparison}

---

###### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold.parameter.duration"></a>

- *Type:* str

The amount of time that a time series must violate the threshold to be considered failing.

Currently, only values that are a
multiple of a minute--e.g., 0, 60, 120, or
300 seconds--are supported. If an invalid
value is given, an error will be returned.
When choosing a duration, it is useful to
keep in mind the frequency of the underlying
time series data (which may also be affected
by any alignments specified in the
aggregations field); a good duration is long
enough so that a single outlier does not
generate spurious alerts, but short enough
that unhealthy states are detected and
alerted on quickly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#duration GoogleMonitoringAlertPolicy#duration}

---

###### `aggregations`<sup>Optional</sup> <a name="aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold.parameter.aggregations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdAggregations</a>]]

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#aggregations GoogleMonitoringAlertPolicy#aggregations}

---

###### `denominator_aggregations`<sup>Optional</sup> <a name="denominator_aggregations" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold.parameter.denominatorAggregations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations">GoogleMonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations</a>]]

denominator_aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#denominator_aggregations GoogleMonitoringAlertPolicy#denominator_aggregations}

---

###### `denominator_filter`<sup>Optional</sup> <a name="denominator_filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold.parameter.denominatorFilter"></a>

- *Type:* str

A filter that identifies a time series that should be used as the denominator of a ratio that will be compared with the threshold.

If
a denominator_filter is specified, the time
series specified by the filter field will be
used as the numerator.The filter is similar
to the one that is specified in the
MetricService.ListTimeSeries request (that
call is useful to verify the time series
that will be retrieved / processed) and must
specify the metric type and optionally may
contain restrictions on resource type,
resource labels, and metric labels. This
field may not exceed 2048 Unicode characters
in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#denominator_filter GoogleMonitoringAlertPolicy#denominator_filter}

---

###### `evaluation_missing_data`<sup>Optional</sup> <a name="evaluation_missing_data" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold.parameter.evaluationMissingData"></a>

- *Type:* str

A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#evaluation_missing_data GoogleMonitoringAlertPolicy#evaluation_missing_data}

---

###### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold.parameter.filter"></a>

- *Type:* str

A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#filter GoogleMonitoringAlertPolicy#filter}

---

###### `forecast_options`<sup>Optional</sup> <a name="forecast_options" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold.parameter.forecastOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions">GoogleMonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

forecast_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#forecast_options GoogleMonitoringAlertPolicy#forecast_options}

---

###### `threshold_value`<sup>Optional</sup> <a name="threshold_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold.parameter.thresholdValue"></a>

- *Type:* typing.Union[int, float]

A value against which to compare the time series.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#threshold_value GoogleMonitoringAlertPolicy#threshold_value}

---

###### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.putConditionThreshold.parameter.trigger"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger">GoogleMonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_monitoring_alert_policy#trigger GoogleMonitoringAlertPolicy#trigger}

---

##### `reset_condition_absent` <a name="reset_condition_absent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionAbsent"></a>

```python
def reset_condition_absent() -> None
```

##### `reset_condition_matched_log` <a name="reset_condition_matched_log" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionMatchedLog"></a>

```python
def reset_condition_matched_log() -> None
```

##### `reset_condition_monitoring_query_language` <a name="reset_condition_monitoring_query_language" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionMonitoringQueryLanguage"></a>

```python
def reset_condition_monitoring_query_language() -> None
```

##### `reset_condition_prometheus_query_language` <a name="reset_condition_prometheus_query_language" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionPrometheusQueryLanguage"></a>

```python
def reset_condition_prometheus_query_language() -> None
```

##### `reset_condition_sql` <a name="reset_condition_sql" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionSql"></a>

```python
def reset_condition_sql() -> None
```

##### `reset_condition_threshold` <a name="reset_condition_threshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.resetConditionThreshold"></a>

```python
def reset_condition_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionAbsent">condition_absent</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference">GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLog">condition_matched_log</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguage">condition_monitoring_query_language</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguage">condition_prometheus_query_language</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionSql">condition_sql</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionThreshold">condition_threshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionAbsentInput">condition_absent_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLogInput">condition_matched_log_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguageInput">condition_monitoring_query_language_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguageInput">condition_prometheus_query_language_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionSqlInput">condition_sql_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionThresholdInput">condition_threshold_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_absent`<sup>Required</sup> <a name="condition_absent" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionAbsent"></a>

```python
condition_absent: GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference">GoogleMonitoringAlertPolicyConditionsConditionAbsentOutputReference</a>

---

##### `condition_matched_log`<sup>Required</sup> <a name="condition_matched_log" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLog"></a>

```python
condition_matched_log: GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMatchedLogOutputReference</a>

---

##### `condition_monitoring_query_language`<sup>Required</sup> <a name="condition_monitoring_query_language" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguage"></a>

```python
condition_monitoring_query_language: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference</a>

---

##### `condition_prometheus_query_language`<sup>Required</sup> <a name="condition_prometheus_query_language" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguage"></a>

```python
condition_prometheus_query_language: GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference</a>

---

##### `condition_sql`<sup>Required</sup> <a name="condition_sql" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionSql"></a>

```python
condition_sql: GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference">GoogleMonitoringAlertPolicyConditionsConditionSqlOutputReference</a>

---

##### `condition_threshold`<sup>Required</sup> <a name="condition_threshold" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionThreshold"></a>

```python
condition_threshold: GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference">GoogleMonitoringAlertPolicyConditionsConditionThresholdOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `condition_absent_input`<sup>Optional</sup> <a name="condition_absent_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionAbsentInput"></a>

```python
condition_absent_input: GoogleMonitoringAlertPolicyConditionsConditionAbsent
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionAbsent">GoogleMonitoringAlertPolicyConditionsConditionAbsent</a>

---

##### `condition_matched_log_input`<sup>Optional</sup> <a name="condition_matched_log_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLogInput"></a>

```python
condition_matched_log_input: GoogleMonitoringAlertPolicyConditionsConditionMatchedLog
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMatchedLog">GoogleMonitoringAlertPolicyConditionsConditionMatchedLog</a>

---

##### `condition_monitoring_query_language_input`<sup>Optional</sup> <a name="condition_monitoring_query_language_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguageInput"></a>

```python
condition_monitoring_query_language_input: GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

---

##### `condition_prometheus_query_language_input`<sup>Optional</sup> <a name="condition_prometheus_query_language_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguageInput"></a>

```python
condition_prometheus_query_language_input: GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">GoogleMonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

---

##### `condition_sql_input`<sup>Optional</sup> <a name="condition_sql_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionSqlInput"></a>

```python
condition_sql_input: GoogleMonitoringAlertPolicyConditionsConditionSql
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionSql">GoogleMonitoringAlertPolicyConditionsConditionSql</a>

---

##### `condition_threshold_input`<sup>Optional</sup> <a name="condition_threshold_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.conditionThresholdInput"></a>

```python
condition_threshold_input: GoogleMonitoringAlertPolicyConditionsConditionThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsConditionThreshold">GoogleMonitoringAlertPolicyConditionsConditionThreshold</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMonitoringAlertPolicyConditions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyConditions">GoogleMonitoringAlertPolicyConditions</a>]

---


### GoogleMonitoringAlertPolicyCreationRecordList <a name="GoogleMonitoringAlertPolicyCreationRecordList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMonitoringAlertPolicyCreationRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleMonitoringAlertPolicyCreationRecordOutputReference <a name="GoogleMonitoringAlertPolicyCreationRecordOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.mutatedBy">mutated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.mutateTime">mutate_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecord">GoogleMonitoringAlertPolicyCreationRecord</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mutated_by`<sup>Required</sup> <a name="mutated_by" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.mutatedBy"></a>

```python
mutated_by: str
```

- *Type:* str

---

##### `mutate_time`<sup>Required</sup> <a name="mutate_time" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.mutateTime"></a>

```python
mutate_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecordOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyCreationRecord
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyCreationRecord">GoogleMonitoringAlertPolicyCreationRecord</a>

---


### GoogleMonitoringAlertPolicyDocumentationLinksList <a name="GoogleMonitoringAlertPolicyDocumentationLinksList" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleMonitoringAlertPolicyDocumentationLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyDocumentationLinks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>]]

---


### GoogleMonitoringAlertPolicyDocumentationLinksOutputReference <a name="GoogleMonitoringAlertPolicyDocumentationLinksOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMonitoringAlertPolicyDocumentationLinks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>]

---


### GoogleMonitoringAlertPolicyDocumentationOutputReference <a name="GoogleMonitoringAlertPolicyDocumentationOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.putLinks">put_links</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetLinks">reset_links</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetMimeType">reset_mime_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetSubject">reset_subject</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_links` <a name="put_links" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.putLinks"></a>

```python
def put_links(
  value: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyDocumentationLinks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.putLinks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>]]

---

##### `reset_content` <a name="reset_content" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_links` <a name="reset_links" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetLinks"></a>

```python
def reset_links() -> None
```

##### `reset_mime_type` <a name="reset_mime_type" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetMimeType"></a>

```python
def reset_mime_type() -> None
```

##### `reset_subject` <a name="reset_subject" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.resetSubject"></a>

```python
def reset_subject() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.links">links</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList">GoogleMonitoringAlertPolicyDocumentationLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.linksInput">links_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.mimeTypeInput">mime_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.links"></a>

```python
links: GoogleMonitoringAlertPolicyDocumentationLinksList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinksList">GoogleMonitoringAlertPolicyDocumentationLinksList</a>

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `links_input`<sup>Optional</sup> <a name="links_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.linksInput"></a>

```python
links_input: typing.Union[IResolvable, typing.List[GoogleMonitoringAlertPolicyDocumentationLinks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationLinks">GoogleMonitoringAlertPolicyDocumentationLinks</a>]]

---

##### `mime_type_input`<sup>Optional</sup> <a name="mime_type_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.mimeTypeInput"></a>

```python
mime_type_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleMonitoringAlertPolicyDocumentation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyDocumentation">GoogleMonitoringAlertPolicyDocumentation</a>

---


### GoogleMonitoringAlertPolicyTimeoutsOutputReference <a name="GoogleMonitoringAlertPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_monitoring_alert_policy

googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleMonitoringAlertPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleMonitoringAlertPolicy.GoogleMonitoringAlertPolicyTimeouts">GoogleMonitoringAlertPolicyTimeouts</a>]

---



